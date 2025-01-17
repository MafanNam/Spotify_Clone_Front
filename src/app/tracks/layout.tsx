import type {Metadata} from "next";


export const metadata: Metadata = {
  title: 'Spotify - Albums'
}

export default function TracksLayout({
                                          children,
                                        }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}
