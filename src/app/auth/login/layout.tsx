import type {Metadata} from "next";
import Image from "next/image";


export const metadata: Metadata = {
  title: 'Login - Spotify'
}

export default function Layout({
                                 children,
                               }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
