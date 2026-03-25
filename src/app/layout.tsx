import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ServiceMaster Clean - Free Office Cleaning Consultation",
  description: "Get a free office cleaning consultation from ServiceMaster Clean. A higher standard of clean for your commercial facility.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
