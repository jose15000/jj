"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";
import { Nav } from "@/components/Nav";

export default function Proposal() {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showConfetti, setShowConfetti] = useState(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (showConfetti) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [showConfetti]);

  const handleNoClick = () => {
    // Define pequenos deslocamentos para o botão "Não"
    const moveDistance = 20; // Distância que o botão vai se mover
    const newX =
      noButtonPosition.x + (Math.random() > 0.5 ? moveDistance : -moveDistance);
    const newY =
      noButtonPosition.y + (Math.random() > 0.5 ? moveDistance : -moveDistance);

    setNoButtonPosition({ x: newX, y: newY });
  };

  const handleYesClick = () => {
    setShowConfetti(true);
  };

  return (
    <div>
      <Nav />
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-blue-200 flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-600 mb-8 text-center">
          Quer namorar comigo?
        </h1>
        <div className="flex gap-4">
          <Button
            onClick={handleYesClick}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Sim
          </Button>
          <Button
            ref={noButtonRef}
            onClick={handleNoClick}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            style={{
              transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
              transition: "transform 0.2s ease-in-out",
            }}
          >
            Não
          </Button>
        </div>
        {showConfetti && (
          <div className="mt-8 text-2xl font-bold text-purple-600 text-center">
            Eeeeeeee! Eu te amo! ❤️
          </div>
        )}
      </div>
    </div>
  );
}
