import React from "react";
import CompanyCard from "@components/CompanyCard/CompanyCard";

import GOT_Characters from "../GOT_Characters";
console.log(GOT_Characters);
// Main Component
export default function Search(){
  
  return (
    <div className="mt-10">
      <div className="flex items-center justify-center gap-2 py-8">
        <input
          type="text"
          placeholder="Search..."
          className="px-6 border-2 border-[#282D45] h-12 w-1/2 rounded-l-3xl bg-transparent bg-gradient-to-r from-slate-600 via-transparent   to-slate-600 bg-[length:400%_400%] bg-center    text-white"
        />
        <button
          type="button"
          className="bg-purple-600 px-4 py-2 h-12 text-white rounded-r-3xl"
        >
          Search
        </button>
        <button
          type="button"
          className="bg-purple-600 px-4 py-2 h-12 text-white rounded-3xl"
        >
          Filter
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mb-20">
        {GOT_Characters.map((character, index) => (
          <CompanyCard
            key={index}
            image={character.image}
            heading={character.heading.name}
            description={character.description}
            qualities={character.qualities}
            faction={character.faction}
          />
        ))}
      </div>
    </div>
  );
};
