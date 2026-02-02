import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import BackToTop from "@/components/ui/back-to-top";
import {
  companyName,
  companyTagline,
  companyDescription,
  contactInfo,
  siteUrl,
} from "@/lib/constants";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: `${companyName} - ${companyTagline}`,
    template: `%s | ${companyName}`,
  },
  description: companyDescription,
  keywords: [
    "building maintenance solutions",
    "facade access system",
    "suspended platform",
    "power suspended cradles",
    "monorail suspension systems",
    "permanent access system",
    "glass facade cleaning",
    "facade restoration",
  ],
  authors: [{ name: companyName }],
  creator: companyName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: companyName,
    title: `${companyName} - ${companyTagline}`,
    description: companyDescription,
    images: ["/images/og.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyName} - ${companyTagline}`,
    description: companyDescription,
    images: ["/images/og.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyName,
    url: siteUrl,
    description: companyDescription,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: contactInfo.email,
        telephone: contactInfo.phone,
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <BackToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

