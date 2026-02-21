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
  title: "Solid Rock Lean Six Sigma | The Cross-Border Operational Excellence Firm",
  description: "Rio Grande Valley & Mexico manufacturing operational excellence, Lean Six Sigma consulting, and continuous improvement by Ricardo D. Luis, Black Belt III.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-50 selection:bg-blue-500/30`}
      >
        {children}
      </body>
    </html>
  );
}
