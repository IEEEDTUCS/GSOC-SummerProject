// isme mostly chije paste karne wali hai isliye isse algi meet ke rakh lete hai

import React from "react";
import Arrow from "./images/top-companies-arrow.png";
// import "style-top-company.css" ;
// import { NavLink } from "react-router-dom";

export default function TopCompany(){
    return(
        <div>
            <div className="flex flex-col items-center justify-cente ">

                <p className="lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl  font-semibold  inline-block text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-600 mt-3">Top Companies</p>


                
                <button className="lg:w-[150px] lg:h-[54px] md:w-[120px] md:h-[43px] sm:w-[100px] sm:h-[37px] xs:w-[100px] sm:h-[37px] border-[#282D45] border-2 rounded-[46px] flex justify-center items-center bg-gradient-to-r from-slate-600 via-transparent   to-slate-600 bg-[length:400%_400%] bg-center  hover:bg-[#ffffff] hover:transition-all hover:duration-300 mt-5 p-2">
                    <p className="text-[#47507A] font-semibold lg:text-xl md:text-base sm:text-sm xs:text-xs flex mr-2 ">Sort by</p>
                    <img src={Arrow} className="lg:w-1/5 md:w-1/6 sm:w-[14%] xs:w-[12.5%]" />
                </button>
            </div>
        </div>
    );
}

// to-slate-200