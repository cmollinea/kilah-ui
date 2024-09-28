import { Footer } from "@/components/home/footer";
import { NavBar } from "@/components/home/navbar";
import { Alert } from "@/components/ui/alert";
import { Banner } from "@/components/ui/banner";
import { ProgressBarProvider } from "@/components/ui/progress-bar";
import { AlertContextProvider } from "@/context/alert-context";
import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Condensed({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KilahUI | Build Your Website Faster with Seamless Adaptability",
  description:
    "Elevate your web design with KilahUI an open-source library of elegant, pre-built HTML elements styled with TailwindCSS. Fully customizable and ready to use, just copy, paste, and create stunning websites effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{ backgroundImage: "url('/assets/nnnoise.svg')" }}
        className={
          roboto.className +
          " bg-background text-foreground selection:bg-primary selection:text-primary-foreground"
        }
      >
        <ProgressBarProvider>
          <Banner />
          <NavBar />
          <AlertContextProvider>
            <Alert />
            {children}
            <Footer />
          </AlertContextProvider>
        </ProgressBarProvider>
      </body>
    </html>
  );
}
