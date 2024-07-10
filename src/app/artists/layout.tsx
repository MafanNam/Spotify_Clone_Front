import type {Metadata} from "next";


export const metadata: Metadata = {
  title: 'Spotify | Artists'
}

export default function ArtistsLayout({
                                        children,
                                      }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}
