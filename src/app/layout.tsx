import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import PWAInstallPrompt from "@/components/PWAInstallPrompt";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeKeys - Interactive Code Typing Mastery",
  description: "Master programming languages through immersive typing practice. Flow through JavaScript, Python, and C++ lessons with real-time feedback, progress analytics, and skill-building exercises.",
  keywords: ["codekeys", "coding", "typing", "practice", "programming", "javascript", "python", "cpp", "learn to code", "typing mastery"],
  authors: [{ name: "CodeKeys" }],
  manifest: "/manifest.json",
  icons: {
    icon: "/image.png",
    apple: "/image.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f97316",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
          <PWAInstallPrompt />
        </ThemeProvider>
      </body>
    </html>
  );
}
