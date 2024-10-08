import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"
import HaederNavigationBar from "@/components/header";
import Dashboard from "@/pages/dashboard";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HaederNavigationBar />
        <Dashboard />
        {children}
      </body>
    </html>
  );
}
