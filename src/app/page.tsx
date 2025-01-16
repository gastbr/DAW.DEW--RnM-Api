"use client";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export default function App() {
  const [counter, setCounter] = useState(0);

  console.log('App');

  const { data, loading, error } = useFetch("https://rickandmortyapi.com/api/character");

  if (loading) return <h1>Cargando...</h1>;
  if (error) return <><h1>Error al consumir la API</h1><p>{error}</p></>;

  return (
    <>
      <h1 className="title">UseEffect</h1>
      <button onClick={() => setCounter(counter + 1)}>Counter: {counter}</button>
      <ul>
        {data.map((character) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );

}
