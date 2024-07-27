import React from "react";
import CompanyCard from "@components/CompanyCard/CompanyCard";
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import GOT_Characters from "../GOT_Characters";
import Filter from "@components/PopupFilter/Filter";

export default function Search() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className="mt-20">
      <div className="flex items-center justify-center gap-2 py-8">
        <input
          type="text"
          placeholder="Search..."
          className="px-6 border-2 border-[#282D45] h-12 w-1/2 rounded-l-3xl bg-transparent bg-gradient-to-r from-slate-600 via-transparent to-slate-600 bg-[length:400%_400%] bg-center text-white"
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
          onClick={toggleDrawer}
        >
          Filter
        </button>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className=""
        style={{ backgroundColor: '#060B27',
          width: '100vw', 
          maxWidth: '400px', 
          minWidth: '300px', 
          height: "100vh",
        }}
      >
        <Filter className="p-4 md:p-10" onClose={toggleDrawer} />
      </Drawer>
      <div className="flex flex-wrap justify-center  gap-8 mb-10 xs:px-6">
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
}
