"use client";
import Image from "next/image";
import imageRNM from "./../img/rick-morty.png";
import { useState } from "react";
import Characters from "../components/Characters";

export default function App() {

  const [characters, setCharacters] = useState(null);

  // API request
  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();
    setCharacters(characterApi.results);
  }

  console.log(characters);

  // Return
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">API Rick and Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}></Characters>
        ) : (
          <>
            <Image src={imageRNM} alt="Rick and Morty" className="img-home" />
            <button onClick={reqApi} className="btn-search rounded-lg">Buscar personajes</button>
          </>
        )
        }
      </header>
    </div>
  );
}
