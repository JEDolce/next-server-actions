"use server"
// Todo lo que se ejecute debajo de esta directiva 
// se ejecutará como una acción en el servidor

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

const MAX_LIMIT = 8;

// Esta funcion va a llamar a la API para obtener la data
export async function fetchAnime(page: number) {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=${MAX_LIMIT}&order=popularity`
  );

  const data = await response.json();

  return data.map((anime: AnimeProp, index: number) => (
    <AnimeCard key={anime.id} anime={anime} index={index} />
  ));
}
