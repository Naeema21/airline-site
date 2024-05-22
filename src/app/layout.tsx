import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google'


import CookieCard from "./layout/cookieCard";
import Footer from "./layout/footer";
import Header from "./layout/header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ReservationKart",
  keywords: "Bookings, cheap flight agency, airoplane reservation, airoplan ticket booking, Cheap flight ticket, traveller agency, Airoplane, cheap flights, airline tickets, plane tickets, cheap airline tickets, flight ticket, cheap flight tickets, flight booking, cheap plane tickets, air tickets, cheap air, cheap air tickets, airline flights, air ticket booking, fly tickets, air line tickets, multi city flights, cheap international flights, book flights online, cheap airline flights",
  description: 'Your dream travel just a phone call away!'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <GoogleTagManager gtmId='GTM-M26V4CTJ' />
        <link rel="canonical" href="https://reservationkart.com/" key='canonical' />
        <meta name="robots" content="all" />
        <meta name="googlebot" content="noindex,nofollow" />
        <meta charSet="UTF-8" />
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M26V4CTJ"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}>
          </iframe>
        </noscript>
        <Header />
        {children}
        <CookieCard />
        <Footer />
      </body>
    </html>
  );
}
