"use client";

import {useSocialAuthenticateMutation} from "@/lib/features/auth/authApiSlice";
import useSocialAuth from "@/hooks/use-social-auth";
import FullScreenSpinner from "@/components/general/FullScreenSpinner";
import {useAppSelector} from "@/lib/hooks";
import {useEffect} from "react";
import {redirect} from "next/navigation";
import {profileMyUrl} from "@/utils/consts";

export default function Page() {
  const [googleAuthenticate] = useSocialAuthenticateMutation()
  useSocialAuth(googleAuthenticate, 'google-oauth2')

  const {isAuthenticated} = useAppSelector(state => state.auth);

  useEffect(() => {
    if (isAuthenticated) redirect(profileMyUrl);
  }, [isAuthenticated]);

  return (
      <FullScreenSpinner/>
  )
}