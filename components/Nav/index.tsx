import Link from "next/link";

export function Nav() {
  return (
    <nav className="bg-gradient-to-r from-blue-100 to-purple-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center space-x-2 text-purple-600 hover:text-blue-700"
        >
          <span className="font-semibold text-lg">JJ 🖤</span>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-blue-600 hover:text-purple-700">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/Cartinhas"
              className="text-purple-600 hover:text-blue-700"
            >
              Cartinhas
            </Link>
          </li>
          <li>
            <Link
              href="/Elogios"
              className="text-blue-600 hover:text-purple-700"
            >
              Elogios
            </Link>
          </li>
          <li>
            <Link
              href="/Musicas"
              className="text-blue-600 hover:text-purple-700"
            >
              Nossas músicas
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
