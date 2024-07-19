import type {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Account Spotify | Artist albums create'
}

export default function CreateVacancyLayout({
                                              children,
                                            }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>{children}</section>
  );
}
