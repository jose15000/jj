"use client";

import { Nav } from "@/components/Nav";

export default function Music() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-blue-200 pt-8">
      <Nav />
      <div className="container mx-auto px-4 py-8 md:py-16">
        <h1 className="text-2xl md:text-3xl font-bold text-purple-600 mb-6 md:mb-8 text-center">
          Nossas Músicas
        </h1>
        <div className="flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?list=PL6BSsS2DPoaG2-pI2T009e4YC7hJDskyt"
            title="YouTube Playlist"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
