import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" });

export const metadata: Metadata = {
  title: "Prerna Reddy Ganga | Data Engineering & AI Portfolio",
  description: "Graduate Student in Data Science and Applications. Projects, publications, and certifications.",
  openGraph: {
    title: "Prerna Reddy Ganga",
    description: "Data Engineering • AI/ML • Analytics",
    url: "https://your-portfolio.vercel.app",
    siteName: "Portfolio",
    images: ["/og-image.png"],
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
      <body className="bg-slate-900 text-slate-100 font-sans antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-cyan-500 text-slate-900 px-4 py-2 rounded">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
