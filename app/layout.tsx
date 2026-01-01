import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import SmoothScroll from "./components/SmoothScroll";
import { SmoothCursor } from "./components/animated/SmoothCursor";
import Script from "next/script";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yash Chaudhari | Full Stack Developer",
  description:
    "Portfolio of Yash Chaudhari, Full Stack Developer specializing in React, Next.js, and React Native.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "React Native",
    "Portfolio",
  ],
  authors: [{ name: "Yash Chaudhari" }],
  viewport: "width=device-width, initial-scale=1.0",
  icons: {
    icon: "/favicon.png", // place your favicon in public folder
  },
  openGraph: {
    title: "Yash Chaudhari | Full Stack Developer",
    description:
      "Portfolio of Yash Chaudhari, Full Stack Developer specializing in React, Next.js, and React Native.",
    url: "https://your-portfolio-domain.com",
    siteName: "Yash Chaudhari Portfolio",
    images: [
      {
        url: "/og-image.png", // optional: social sharing image
        width: 1200,
        height: 630,
        alt: "Yash Chaudhari Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Chaudhari | Full Stack Developer",
    description:
      "Portfolio of Yash Chaudhari, Full Stack Developer specializing in React, Next.js, and React Native.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Fallback favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NYPDBF2PY7"
          strategy="afterInteractive"
        />

        <Script id="ga-init" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-NYPDBF2PY7', {
      page_path: window.location.pathname,
    });
  `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll />
        <SmoothCursor />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
