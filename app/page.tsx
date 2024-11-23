import { Nav } from "@/components/Nav";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-blue-200 pt-8">
      <Nav />
      <div className="container mx-auto px-4 py-8 md:py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-600 mb-4">
          Bem vinda, amor da minha vida
        </h1>
        <p className="text-lg md:text-xl text-blue-700 mb-8">
          Neste site, eu eternizo meu amor por você, amor da minha vida
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button
            asChild
            className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto"
          >
            <Link href="/Cartinhas">Ler cartinhas</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="text-blue-600 border-blue-600 hover:bg-blue-100 w-full sm:w-auto"
          >
            <Link href="/Musicas">Nossas Músicas</Link>
          </Button>
          <Button
            asChild
            className="bg-pink-500 hover:bg-pink-600 w-full sm:w-auto"
          >
            <Link href="/Elogios">Elogios</Link>
          </Button>
          <Button
            asChild
            className="bg-red-500 hover:bg-red-600 w-full sm:w-auto"
          >
            <Link href="/Pergunta">Pergunta especial 🫣</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
