import React from "react";
import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from "@/components/google-analytics";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://big7technologies.com"),

  title: "Big7 Technologies — Engineering the Future from Africa | Systems Research Lab",

  description:
    "Big7 Technologies is a technology research and systems lab founded by Victor Bodude. We build foundational infrastructure, sovereign system layers, and distributed protocols for the next decade of digital growth.",

  keywords: [
    "Big7 Technologies",
    "Victor Bodude",
    "systems lab",
    "technology research Africa",
    "distributed systems",
    "AI infrastructure",
    "applied computing",
    "cloud computing",
    "blockchain research",
    "sovereign infrastructure",
    "African engineering",
    "distributed protocols",
    "high-performance systems",
    "foundational tech Africa"
  ],

  authors: [{ name: "Victor Bodude", url: "https://big7technologies.com" }],
  creator: "Victor Bodude",
  publisher: "Big7 Technologies",

  openGraph: {
    title: "Big7 Technologies — Engineering the Future from Africa",
    description:
      "A systems research lab focused on building sovereign foundational layers for the next decade of global infrastructure.",
    url: "https://big7technologies.com",
    siteName: "Big7 Technologies",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Big7 Technologies - Engineering the Future",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Big7 Technologies — Systems Research & Engineering Lab",
    description:
      "Engineering the future from Africa. We build the foundational layers that power modern distributed systems and AI.",
    images: ["/og-image.png"],
    creator: "@big7technologies",
  },

  alternates: {
    canonical: "https://big7technologies.com",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerList = await headers();
  const nonce = headerList.get("x-nonce") ?? undefined;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* MAIN STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Big7 Technologies",
                url: "https://big7technologies.com",
                logo: "https://big7technologies.com/logo.png",
                description:
                  "Big7 Technologies is a technology research and systems lab focused on building core layers behind large-scale distributed systems, AI, and sovereign infrastructure.",
                sameAs: [
                  "https://x.com/big7technologies",
                  "https://www.linkedin.com/company/big7technologies",
                  "https://github.com/big7technologies"
                ],
                founder: {
                  "@type": "Person",
                  name: "Victor Bodude",
                  url: "https://big7technologies.com"
                },
                foundingDate: "2024",
                areaServed: "Global"
              },

              {
                "@context": "https://schema.org",
                "@type": "ResearchProject",
                name: "Big7 Research Lab",
                parentOrganization: "Big7 Technologies",
                description:
                  "Research and development of distributed systems, AI infrastructure, and foundational computing models.",
              }
            ]),
          }}
        />

        {/* HIDDEN SEO*/}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <meta name="geo.region" content="Global" />
      </head>

      <body
        className={`${quicksand.variable} font-sans antialiased dark:bg-background dark:text-foreground overflow-x-hidden`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        <GoogleAnalytics nonce={nonce} />
      </body>
    </html>
  );
}