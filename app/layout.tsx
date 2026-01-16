import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Beehive",
  description: "Bee-themed Full-Stack Task/Project Management SaaS",
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
        <nav className="bg-amber-600 p-4 shadow-md">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/" className="text-white font-bold text-xl">Beehive 🐝</Link>
            <div className="space-x-4">
              <Link href="/projects" className="text-white hover:text-amber-200 transition-colors">Projects</Link>
              <Link href="/instruments" className="text-white hover:text-amber-200 transition-colors">Instruments</Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
