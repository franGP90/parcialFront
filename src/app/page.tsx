"use client"
import { api } from "@/lib/axios";
import { useEffect, useState } from "react";
import type { CocktailType } from "@/types/cocktail";
import Cocktail from "./components/cocktail";
import './page.css'

export default function Home() {
    const [loading, setLoading] = useState<boolean>(true)
    const [cocktails, setCocktails] = useState<CocktailType[]>([])
    const [error, setError] = useState<string>()

    const fetchCocktailsByName = async () => {
    setLoading(true);
    await api
      .get<CocktailType[]>('search.php?s=margarita')
      .then((e) => {
        setCocktails([...e.data]);
      })
      .catch((e) => {
        setError(`Error al obtener los datos: ${e}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() =>{
    fetchCocktailsByName();
  },[])
  return (
   <div className="page">
    {loading && <h1>Loading...</h1>}
    {!loading && cocktails.map((c) => (<Cocktail cocktailImg={c.strImageSource} cocktailName={c.strDrink}></Cocktail>))}
    {error && <h1>{error}</h1>}
   </div>
  );
}
