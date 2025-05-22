import { Toaster } from "react-hot-toast";
import "./globals.css";
import Link from "next/link";
import { MusicPlayer } from "./(public)/(home)/components/musicPlayer/MusicPlayer";
import { appDescription, appName, domainUrl } from "@global/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: `%s | ${appName}`,
    default: `${appName}`,
  },
  description: `${appDescription}`,
  keywords: [
    "beats",
    "trap",
    "dancehall",
    "afrobeat",
    "Costa Rica",
    "reggaeton",
    "urbano",
  ],
  openGraph: {
    title: `${appName}`,
    description: `${appDescription}`,
    url: `${domainUrl}`,
    siteName: `${appName}`,
    images: [
      {
        url: "/logo_ackee.png",
        width: 1024,
        height: 1024,
        alt: "ackee beats logo",
      },
    ],
    locale: "es_CR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();
  return (
    <html lang="es">
      <body className="bg-white">
        <Toaster />
        <main className=" container mx-auto px-8 py-2">
          <header className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center space-x-2 logoFLP text-2xl font-bold text-primario"
            >
              FLProductions
            </Link>
            <nav className="space-x-4 text-sm font-medium">
              <Link className="hover:text-primario transition" href="#songs">
                Música
              </Link>
              <Link
                target="_blank"
                className="hover:text-primario transition"
                href="https://www.ackeebeats.xyz/"
              >
                Ackee Beats
              </Link>
              <Link className="hover:text-primario transition" href="#about">
                Nosotros
              </Link>
              <Link className="hover:text-primario transition" href="#contact">
                Contacto
              </Link>
            </nav>
          </header>
          {children}
          <MusicPlayer />
          {/* Footer */}
          <footer className="text-right text-sm mt-2">
            <p className="">
              © 2013 - {currentYear}{" "}
              <span className=" font-bold">FLProductions</span> by LeotheProdu
            </p>
          </footer>
        </main>
      </body>
    </html>
  );
}
