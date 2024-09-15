import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
export const metadata: Metadata = {
  title: "Saketh Kotagiri",
  description: "Saketh's personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <head></head>
      <body>{children}</body>
    </html>
  );
}
