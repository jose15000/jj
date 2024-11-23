"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Modal } from "@/components/ui/modal/modal";
import { loveLetters } from "@/utils/letters/letters";
import { Nav } from "@/components/Nav";

export default function LoveLetters() {
  const [selectedLetter, setSelectedLetter] = useState<
    (typeof loveLetters)[0] | null
  >(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-blue-200 pt-8">
      <Nav />
      <div className="container mx-auto px-4 py-8 md:py-16">
        <h1 className="text-2xl md:text-3xl font-bold text-purple-600 mb-6 md:mb-8 text-center">
          Cartinhas de Amor
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {loveLetters.map((letter) => (
            <Card
              key={letter.id}
              className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedLetter(letter)}
            >
              <CardHeader>
                <CardTitle className="text-blue-600 text-lg md:text-xl">
                  {letter.date}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-700 text-sm md:text-base">
                  {letter.content.substring(0, 100) + "..."}
                </p>
                <div className="text-center text-gray-500 text-sm mt-4">
                  Ler mais
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Modal isOpen={!!selectedLetter} onClose={() => setSelectedLetter(null)}>
        {selectedLetter && (
          <div className="text-left">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">
              {selectedLetter.date}
            </h2>
            <div className="text-blue-700 whitespace-pre-wrap">
              {selectedLetter.content}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
