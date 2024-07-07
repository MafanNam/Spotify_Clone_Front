import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import ReduxStoreProvider from "@/providers/ReduxStoreProvider";
import {cn} from "@/lib/utils"
import {ThemeProvider} from "@/providers/ThemeProvider";
import TrackPlayerProvider from "@/providers/TrackPlayerProvider";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Spotify | Home",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="scroll-auto" suppressHydrationWarning>
    <body className={cn(
      "min-h-screen bg-background font-sans antialiased",
      fontSans.variable
    )}
    >


    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <ReduxStoreProvider>
        <TrackPlayerProvider>

          <main>{children}</main>

        </TrackPlayerProvider>
      </ReduxStoreProvider>
    </ThemeProvider>

    </body>
    </html>
  );
}
