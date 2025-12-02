import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../Components/Navbar";
export const metadata: Metadata = {
  title: "Mohammadhossein Zamani – Portfolio",
  description:
    "Pixel-perfect frontend developer specializing in editorial UI and luxury branding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-black text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
