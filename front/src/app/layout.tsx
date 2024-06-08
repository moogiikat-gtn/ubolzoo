import "tailwindcss/tailwind.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UBolzoo",
  description: "UBolzoo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-purple-50">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
