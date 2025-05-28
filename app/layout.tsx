import type { Metadata } from "next";
import { Geist, Geist_Mono, Coiny } from "next/font/google";
import "./globals.css";
import { AuthProvider } from '../context/AuthContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const coiny = Coiny({
  weight: "400",
  variable: "--font-coiny",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rest",
  description: "For det som er i skapet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${coiny.variable} antialiased`}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
