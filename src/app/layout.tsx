import "../styles/globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

import { IThemeContextType, ThemeContext } from "../context/ThemeContext";
import ThemeContextDefaultProvider from "@/context/ThemeContextProvider";
import NavBar from "@/components/NavBar";
import { Toaster } from "sonner";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "supetools",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeContextDefaultProvider>
          <NavBar/>
          {children}
          <Toaster  position="top-right"/>
        </ThemeContextDefaultProvider>
      </body>
    </html>
  );
}
