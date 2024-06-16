import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import RecoilWrapper from "@/app/components/recoilWrapper/recoilWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CyberCross Real-Time-Chat",
  description: "Done with love 💖",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <RecoilWrapper>{children}</RecoilWrapper>
      </body>
    </html>
  );
}
