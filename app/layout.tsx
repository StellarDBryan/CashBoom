import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "./components/ui/navbar";
import Footer from "./components/ui/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Cash Boom",
  description: "Learn financial topics anywhere you want",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
      <>
        <html lang="es">
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased pt-[70px] pb-[70px] md:pt-[75px] md:pb-0`}
          >
            <Providers>
                <Navbar />
                {children}
            </Providers>
            <Footer />
          </body>
        </html>
      </>
  );
}
