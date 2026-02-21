import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${nunito.variable} font-sans antialiased bg-white text-slate-900 selection:bg-[#B6D4FF]`}
      >
        {children}
      </body>
    </html>
  );
}
