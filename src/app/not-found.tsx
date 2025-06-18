import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="font-bold text-6xl">Página Não Encontrada - 404</h1>
      <p>Desculpe, a página que você está procurando não existe.</p>
      <Link href="/" className="mt-3 text-blue-500 hover:underline">
        Voltar para a Home
      </Link>
    </div>
  )
}