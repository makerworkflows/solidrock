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
  description: "Bilingual Lean Six Sigma consulting & operational excellence firm for the RGV and Mexico. We turn process friction into quantifiable ROI.",
  openGraph: {
    title: "Solid Rock Lean Six Sigma",
    description: "Bilingual Lean Six Sigma consulting & operational excellence firm for the RGV and Mexico.",
    url: "https://makerworkflows.github.io/solidrock/",
    siteName: "Solid Rock",
    images: [
      {
        url: "https://makerworkflows.github.io/solidrock/logo.png",
        width: 1200,
        height: 630,
        alt: "Solid Rock Lean Six Sigma Logo",
      }
    ],
    locale: "en_US",
    type: "website",
  },
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
