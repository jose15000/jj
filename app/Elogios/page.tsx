"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Nav } from "@/components/Nav";

type Compliment = {
  id: number;
  text: string;
  color: string;
};

const initialCompliments: Compliment[] = [
  {
    id: 1,
    text: "Você é a perfeição em 1,65 de altura",
    color: "bg-yellow-200",
  },
  {
    id: 2,
    text: "Seu sorriso me derrete igual um picolézinho",
    color: "bg-green-200",
  },
  {
    id: 3,
    text: "Quando você fala, o mundo parece ficar em câmera lenta",
    color: "bg-pink-200",
  },
  {
    id: 4,
    text: "Quando Deus te criou, colocou toda a beleza do mundo em ti",
    color: "bg-blue-200",
  },
  {
    id: 5,
    text: "Acordar com o seu bom dia é a minha maior motivação para levantar da cama",
    color: "bg-purple-200",
  },
  { id: 6, text: "Você é a elegância em pessoa", color: "bg-yellow-200" },
];

export default function Elogios() {
  const [compliments] = useState<Compliment[]>(initialCompliments);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-blue-200 pt-8">
      <Nav />
      <div className="container mx-auto px-4 py-8 md:py-16">
        <h1 className="text-2xl md:text-3xl font-bold text-purple-600 mb-6 md:mb-8 text-center">
          Elogios para a menina mais linda do mundo
        </h1>
        <p className="flex text-center text-sm mb-10 text-purple-600">
          Decidi colocar essa parte no site pra você sempre lembrar do quão
          linda e incrível você é
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {compliments.map((compliment) => (
            <Card
              key={compliment.id}
              className={`${compliment.color} post-it transform rotate-1 hover:rotate-0 transition-transform duration-200 shadow-md hover:shadow-lg aspect-square flex items-center justify-center p-2`}
            >
              <CardContent className="p-0 w-full h-full flex items-center justify-center">
                <p className="text-gray-800 font-medium text-center text-sm sm:text-base overflow-hidden">
                  {compliment.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
