import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="w-full bg-gray-800 text-white p-4">
          <ul className="flex space-x-4">
            <li className="font-bold hover:text-amber-500">
              <a href="/">Home</a>
            </li>
            <li className="font-bold hover:text-amber-500">
              <a href="/about">About</a>
            </li>
            <li className="font-bold hover:text-amber-500">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
