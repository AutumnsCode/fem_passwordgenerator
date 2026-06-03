import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'

const jetBrainsMono = localFont({
  src: [
    {
      path: "./assets/fonts/jetbrains-mono-v24-latin-regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "./assets/fonts/jetbrains-mono-v24-latin-700.woff2",
      weight: "700",
      style: "normal"
    }
  ],
  variable: "--font-jetbrains-mono"
})

export const metadata: Metadata = {
  title: "Frontend Mentor | Password generator app",
  description: "Password generator",
  icons: "/favicon-32x32.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetBrainsMono.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col items-center justify-center bg-gray-950 text-preset-4 text-gray-600 p-4 ">
      
          {children}
        
      </body>
    </html>
  );
}
