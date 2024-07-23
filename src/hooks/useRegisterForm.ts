import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useRegisterMutation} from "@/lib/features/auth/authApiSlice";
import {useRouter} from "next/navigation";
import {toast} from "react-toastify";
import {loginUrl} from "@/utils/consts";

const registerFormSchema = z.object({
  email: z
    .string()
    .email("Please enter your Spotify email address."),
  type_profile: z.string(),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters"
    })
    .max(40, {
      message: "Password must not be longer then 40 characters"
    }),
  re_password: z
    .string(),
}).refine((data) => data.password === data.re_password, {
  path: ["re_password"],
  message: "Passwords don't match",
});

type RegisterFormValue = z.infer<typeof registerFormSchema>

export default function useRegisterForm() {
  const {
    register,
    handleSubmit,
    formState: {errors},
    setValue,
    watch,
  } = useForm<RegisterFormValue>({
    resolver: zodResolver(registerFormSchema),
    mode: "onChange",
    defaultValues: {type_profile: "user"}
  });

  const [registerUser, {isLoading}] = useRegisterMutation()
  const router = useRouter()

  function onSubmit(data: RegisterFormValue) {
    registerUser({...data})
      .unwrap()
      .then(() => {
        toast.info("Please check email to verify account.")
        router.push(loginUrl)
      })
      .catch((error) => {
        toast.error(error?.data?.detail || "Uh oh! Something went wrong.")
      })
  }

  return {register, handleSubmit, errors, isLoading, onSubmit, setValue, watch}
}