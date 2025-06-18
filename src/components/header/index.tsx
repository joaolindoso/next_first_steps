import Link from "next/link";

export function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Header do projeto</div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/dashboard">
              Dashboard
            </Link> 
          </li>
          <li>
            <Link href="/posts">
              Posts
            </Link> 
          </li>
          <li>
            <Link href="/contatos">
              Contatos
            </Link> 
          </li>
        </ul>
      </nav>
    </header>
  );
}