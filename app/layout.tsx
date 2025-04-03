import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Senka Loosemore",
  description: "Selected works of Senka Loosemore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased px-5`}>{children}</body>
    </html>
  );
}
