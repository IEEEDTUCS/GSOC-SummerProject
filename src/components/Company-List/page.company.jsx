import React, { useState, useEffect } from "react";

import GOT_Characters from "./GOT_Characters.json";
import Filter from "./Filter";
// CompanyCard Component
const CompanyCard = ({ character }) => (
  <div className="max-w-sm flex flex-wrap border border-[#282D45] rounded-lg shadow bg-[#0E1330] dark:border-gray-700 ml-16">
    
    <img src={character.image} alt={character.heading.name} className="rounded-t-lg w-full h-40 object-cover " />

    <div className="p-3">
    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{character.heading.name}</h2>
    <h3 className="text-sm italic text-gray-400">{character.heading.title}</h3>

    <p className="font-normal text-[#8F9BB7] dark:text-gray-400">{character.description}</p>
    <hr class="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        
    <ul className="flex gap-3 w-auto">
      {character.qualities.map((quality, index) => (
        <li className="text-[#41E88D] px-1 rounded-3xl bg-gradient-to-r from-[rgba(183,255,196,0.2)]  to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center" key={index}>{quality}</li>
      ))}
    </ul>
    <div className="flex justify-between items-center">
    <p className="text-[#8F9BB7]">{character.faction}</p>
    <a href="#" class="inline-flex items-center px-3 py-2 text-xl text-center text-white ">
                Analysis
                 <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
    </div>
    </div>
    
    
  </div>
);

// Main Component
const CompanyList = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterVisible, setFilterVisible] = useState(false);

  useEffect(() => {
    // Fetch data from JSON file
    setCharacters(GOT_Characters);
  }, []);

  const handleSearch = () => {
    // Implement search functionality
    const filteredCharacters = GOT_Characters.filter(character =>
      character.heading.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCharacters(filteredCharacters);
  };

  const handleFilterToggle = () => {
    setFilterVisible(!filterVisible);
  };

  return (
    <div >
      <div className="flex items-center justify-center gap-2 py-8">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-6 border-2 border-[#282D45] h-12 w-1/2 rounded-l-3xl bg-transparent bg-gradient-to-r from-slate-600 via-transparent   to-slate-600 bg-[length:400%_400%] bg-center    text-white"
        />
        <button
          type="button"
          onClick={handleSearch}
          className="bg-purple-600 px-4 py-2 h-12 text-white rounded-r-3xl"
        >
          Search
        </button>
        <button
          type="button"
          onClick={handleFilterToggle}
          className="bg-purple-600 px-4 py-2 h-12 text-white rounded-3xl"
        >
          Filter
        </button>
      </div>
      
      {filterVisible && <div><Filter /></div>}
    
    <div className="flex items-cente">
      <div className="flex flex-wrap gap-12">
        {characters.map((character, index) => (
          <CompanyCard key={index} character={character} />
        ))}
      </div>
    </div>
      
    </div>
  );
};

export default CompanyList;
