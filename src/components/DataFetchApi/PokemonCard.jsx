import React from 'react'

const PokemonCard = ({currData}) => {  
  return (
    <div className=''>
        <div className="cursor-pointer group relative flex flex-col bg-white border border-slate-200 rounded-lg  w-72 transform transition-all hover:scale-105 shadow-xl hover:shadow-blue-800 duration-300">
        <div className="relative h-36 m-2.5 overflow-hidden text-white rounded-md flex justify-center items-center">
          <img
            className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110 size-32"
            src={currData.sprites.other.dream_world.front_default}
            alt={currData.name}
          />
        </div>
        <div className="bg-gradient-to-t from-blue-400 ">
         <div className="flex flex-col justify-center">
        <h1 className="text-center text-3xl font-semibold">
          {currData.name}
          </h1>
       <span className='flex justify-center'>
       <h2 className="text-center text-lg font-semibold border-2 pr-4 pl-4 h-10 mt-2  rounded-full bg-green-500 text-white">
            {currData.types.map((currType)=> currType.type.name).join(", ")}
          </h2>
       </span>
        </div>

        <div className=" text-sm flex gap-2 justify-between items-center mt-2 p-4">
        <p className="text-blue-700 leading-normal font-bold">
            Height: <span className="text-black leading-normal text-sm font-bold"> {currData.height} </span> 
          </p>
        <p className="text-blue-700 leading-normal font-bold">
            Weight: <span className="text-black leading-normal text-sm  font-bold">{currData.weight}</span>
          </p>
        <p className="text-blue-700 leading-normal font-bold">
            Speed: <span className="text-black leading-normal text-sm font-bold">{currData.stats[5].base_stat}</span>
          </p>
        </div>
        <div className="text-sm flex gap-2 justify-between mt-2 pr-4 pl-4">
        <p className="text-black leading-normal font-bold text-sm">
            {currData.base_experience} 
          </p>
        <p className="text-black leading-normal font-bold text-sm ml-5 pl-6">
            {currData.stats[4].base_stat} 
          </p>
        <p className="text-black leading-normal font-bold text-sm">
        {currData.abilities.map((currType)=> currType.ability.name).slice(0,1).join(", ")}
          </p>
        </div>
        <div className=" flex gap-2 justify-between pr-4 pl-4 mb-6">
        <p className="text-blue-700 leading-normal font-bold text-sm">
            Experience 
          </p>
        <p className="text-blue-700 leading-normal font-bold text-sm">
            Attack 
          </p>
        <p className="text-blue-700 leading-normal font-bold text-sm">
            Ability 
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonCard
