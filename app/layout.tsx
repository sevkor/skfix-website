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
  metadataBase: new URL("https://skfix.co.uk"),

  title: {
    default: "SKFIX | Handyman & Smart Home Solutions",
    template: "%s | SKFIX",
  },

  description:
    "Professional handyman, CCTV installation, TV wall mounting, electrical, plumbing, decorating and property maintenance services across Brighton & Hove.",

  keywords: [
    "Handyman Brighton",
    "Handyman Hove",
    "CCTV Installation",
    "TV Wall Mounting",
    "Electrical Services",
    "Plumbing",
    "Painting & Decorating",
    "Property Maintenance",
    "Smart Home Installation",
    "Home Networking",
    "SKFIX",
  ],

  authors: [
    {
      name: "Sergii Korotetskyi",
    },
  ],

  creator: "Sergii Korotetskyi",

  publisher: "SKFIX",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "SKFIX | Handyman & Smart Home Solutions",

    description:
      "Reliable handyman, CCTV, TV mounting, electrical, plumbing and decorating services across Brighton & Hove.",

    url: "https://skfix.co.uk",

    siteName: "SKFIX",

    locale: "en_GB",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "SKFIX",

    description:
      "Professional Handyman & Smart Home Solutions in Brighton & Hove.",
  },

  manifest: "/site.webmanifest",

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],

    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
