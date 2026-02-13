import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Rundown AI - Partner Pages",
  description: "Exclusive landing pages for The Rundown AI newsletter sponsors and partners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
