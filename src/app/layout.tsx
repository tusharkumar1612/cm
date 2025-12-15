import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/ui/FloatingElements";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://codemasheen.in"),
  title: {
    default: "KozioMasheen | Full-Stack Digital Agency | UI/UX, Web, Mobile, Cloud & DevOps",
    template: "%s | KozioMasheen",
  },
  description:
    "Transform your ideas into digital reality with KozioMasheen. We specialize in UI/UX design, frontend & backend development, mobile apps, cloud solutions, GPU computing, and DevOps. Trusted by 100+ clients worldwide.",
  keywords: [
    "web development",
    "mobile app development",
    "UI/UX design",
    "frontend development",
    "backend development",
    "React",
    "Next.js",
    "Node.js",
    "cloud solutions",
    "AWS",
    "DevOps",
    "digital agency",
    "software development",
    "Bangalore",
    "India",
  ],
  authors: [{ name: "CodeMasheen" }],
  creator: "CodeMasheen",
  publisher: "CodeMasheen",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codemasheen.in",
    siteName: "CodeMasheen",
    title: "CodeMasheen | Full-Stack Digital Agency",
    description:
      "Transform your ideas into digital reality. UI/UX, Web, Mobile, Cloud & DevOps solutions for modern businesses.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CodeMasheen - Full-Stack Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeMasheen | Full-Stack Digital Agency",
    description:
      "Transform your ideas into digital reality. UI/UX, Web, Mobile, Cloud & DevOps solutions for modern businesses.",
    images: ["/og-image.jpg"],
    creator: "@codemasheen",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://codemasheen.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {/* Noise overlay for texture */}
        <div className="noise-overlay" />
        
        {/* Navigation */}
        <Navbar />
        
        {/* Main content */}
        <main>{children}</main>
        
        {/* Footer */}
        <Footer />

        {/* Floating elements */}
        <FloatingCTA />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CodeMasheen",
              url: "https://codemasheen.in",
              logo: "https://codemasheen.in/logo.png",
              description:
                "Full-stack digital agency specializing in UI/UX, web development, mobile apps, cloud solutions, and DevOps.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bangalore",
                addressRegion: "Karnataka",
                addressCountry: "India",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-98765-43210",
                contactType: "customer service",
                email: "hello@codemasheen.in",
              },
              sameAs: [
                "https://twitter.com/codemasheen",
                "https://linkedin.com/company/codemasheen",
                "https://github.com/codemasheen",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
