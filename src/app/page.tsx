"use client";
import Image from "next/image";
import imageRNM from "./../img/rick-morty.png";

export default function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <Image src={imageRNM} alt="Rick and Morty" className="mb-4" />
        <h1 className="text-4xl font-bold mb-4">Rick and Morty</h1>
        <p className="text-lg text-gray-600 mb-8">
          The Rick and Morty API is a RESTful and GraphQL API based on the television show Rick and Morty.
        </p>
      </div>
    </>
  );
}
