// sabse phle search bar bana do sath me filter wala option and niche me 
// ek dummy array ke through CompanyCard me daala ke bna do which will me in a flex box/ grid jo mann me aaye
// on click the filter button pass make filter component visibile


import React from "react";
import {NavLink} from "react-dom";

export default function CompanyList(){
    return(
        <>
        <div className="flex items-center  justify-center gap-[10px]  py-8 ">
            <input
                type="text"
                placeholder="Search..."
                className="p-5 border-2 border-[#282D45] h-[46px] w-[50%] rounded-l-3xl
                bg-transparent text-white
                 bg-gradient-to-r from-slate-600 via-transparent to-slate-600 bg-[length:900%_900%] bg-center "/>

            <button
                type="submit"
                className="bg-[#7214FF] px-4 py-2 h-[46px] w-[103px]  text-white rounded-r-3xl "
            > Search </button>

            <button
                type="button"
                className="bg-[#7214FF] px-4 py-2 h-[46px] w-[103px] text-white rounded-3xl"> Filter </button>
        </div>
        </>
    );
}