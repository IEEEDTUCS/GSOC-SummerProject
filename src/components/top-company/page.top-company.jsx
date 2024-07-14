// isme mostly chije paste karne wali hai isliye isse algi meet ke rakh lete hai

import React from "react";
import Arrow from "./images/top-companies-arrow.png";
// import "style-top-company.css" ;
// import { NavLink } from "react-router-dom";

export default function TopCompany(){
    return(
        <div>
            <div className="flex flex-col items-center justify-cente ">
                <h1 className="text-[64px] font-semibold  inline-block text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200   to-slate-600">Top Companies</h1>


                
                <button className="w-[150px] h-[54px] border-[#282D45] border-2 rounded-[46px] flex justify-center items-center bg-gradient-to-r from-slate-600 via-transparent   to-slate-600 bg-[length:400%_400%] bg-center  hover:bg-[#ffffff] hover:transition-all hover:duration-300 mt-5">
                    <p className="text-[#47507A] font-semibold text-xl flex mr-2">Sort by</p>
                    <img src={Arrow} className="" />
                </button>
            </div>
        </div>
    );
}

// to-slate-200