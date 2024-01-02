"use server"
// Todo lo que se ejecute debajo de esta directiva 
// se ejecutará como una acción en el servidor

// Esta funcion va a llamar a la API para obtener la data
export const fetchAnime = async (page: number) => {
    const res = await fetch(`https://shikimori.one/api/animes?page${page}&limit=8&order=popularity`);

    const data = await res.json();
    return data;
};
