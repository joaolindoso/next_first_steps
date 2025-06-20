import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Next JS',
  description: 'Next JS do zero...',
  openGraph: {
    title: 'Next JS',
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

export default function Home() {
  return (
    <div>
      <h1>Página Home - Next JS</h1>
    </div>
  )
}