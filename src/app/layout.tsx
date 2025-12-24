import { Toaster } from "react-hot-toast";
import "./globals.css";
import Link from "next/link";
import { Header } from "@/components/Header";
import { MusicPlayer } from "./(public)/(home)/components/musicPlayer/MusicPlayer";
import {
  appDescription,
  appLongTitle,
  appName,
  domainUrl,
} from "@global/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: `%s | ${appName}`,
    default: `${appLongTitle}`,
  },
  description: `${appDescription}`,
  keywords: [
    "estudio de grabación costa rica",
    "estudio de música costa rica",
    "producción musical costa rica",
    "mezcla y mastering",
    "beats originales",
    "grabación profesional",
    "siquirres",
    "limon",
    "costa rica",
  ],
  openGraph: {
    title: `${appLongTitle}`,
    description: `${appDescription}`,
    url: `https://${domainUrl}`,
    siteName: `${appName}`,
    images: [
      {
        url: "/leo_estudio_dibujo.jpg",
        width: 1024,
        height: 1024,
        alt: `${appName} - Estudio de Grabación`,
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
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: appName,
  image: `https://${domainUrl}/leo_estudio_dibujo.jpg`,
  "@id": `https://${domainUrl}`,
  url: `https://${domainUrl}`,
  telephone: "+50663017707",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Herediana",
    addressLocality: "Siquirres",
    addressRegion: "Limón",
    addressCountry: "CR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 10.131148626326205,
    longitude: -83.55804507982572,
  },
  hasMap: "https://www.google.com/maps?cid=6281775006869716819",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "09:00",
    closes: "21:00",
  },
  sameAs: [
    "https://www.instagram.com/flproductions",
    "https://www.facebook.com/FLProductionscr/",
    "https://www.youtube.com/channel/UCAVKw7wP-yKPGSbCd1BJ7mw",
    "https://www.google.com/maps?cid=6281775006869716819",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white">
        <Toaster />
        <main className="w-full">
          <Header />
          {children}
          <MusicPlayer />
          {/* Footer */}
          <footer className="container mx-auto flex flex-col md:flex-row items-center justify-between text-sm mt-10 mb-6 px-10">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a
                href="https://www.google.com/maps?cid=6281775006869716819"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition"
              >
                Ver en Google Maps
              </a>
            </div>
            <p className="text-gray-500">
              © 2013 - {currentYear}{" "}
              <span className=" font-bold">FLProductions</span> by LeotheProdu
            </p>
          </footer>
        </main>
      </body>
    </html>
  );
}
