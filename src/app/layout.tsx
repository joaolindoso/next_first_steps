import "./globals.css";

import { Header } from "@/components/header";
/* ou ... from "../components/header"; */
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Aula Next JS do zero',
  description: 'Next JS do zero...',
  openGraph: {
    title: 'Aula Next JS do zero',
    description: 'Next JS do zero...',
    images: [
      'https://sujeitoprogramador.com/steve.png'
    ]
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    }
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
