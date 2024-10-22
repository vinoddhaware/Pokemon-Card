import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const Pokemon = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')

  document.body.style.backgroundColor = "#659eb5"

  const fetchApi = async () => {
    try {
        //   https://pokeapi.co/api/v2/pokemon?limit=24
        //   https://pokeapi.co/api/v2/pokemon/pikachu
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
      const data = await res.json();
      
      const pokemonDetails = data.results.map( async (currData) => {
        try {
          const res = await fetch(currData.url)
          const data = await res.json()
          return data  
        } catch (error) {
          console.log(error); 
        }    
      })
      const pokemonDetailsResponse = await Promise.all(pokemonDetails)
      setPokemonData(pokemonDetailsResponse);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error)
      
    }
  };
  
  useEffect(() => {
    fetchApi();
  }, []);

  if (loading) return <h1> Loading... </h1>;
  if (error) return <h1> {error.message} </h1>;
  
  const serchPokemon = pokemonData.filter((currPokemon) => currPokemon.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <header className="mt-6">
        <h1 className="text-4xl text-center font-bold"> Lets catch Pikachu </h1>
      </header>
      <div className="serchBar mt-6">
      <div className="bg-white flex px-4 py-3 border-b-4 border-[#333] focus-within:border-yellow-400/90 overflow-hidden max-w-64 mx-auto font-[sans-serif]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="18px" className="fill-gray-600 mr-3">
          <path
            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
          </path>
        </svg>
        <input onChange={(e)=>setSearch(e.target.value)} value={search} type="text" placeholder="Search Pokemon" className="w-full outline-none text-sm" />
      </div>
      </div>
        <ul className=" flex gap-8 flex-wrap justify-center mb-10 mt-8">
          {
            // pokemonData.map((currData) => {
            //   return <PokemonCard key={currData.id} currData = {currData} />
            // })
            serchPokemon.map((currData) => {
              return <PokemonCard key={currData.id} currData = {currData} />
            })
          }
        </ul>

    </div>
  );
};

export default Pokemon;
