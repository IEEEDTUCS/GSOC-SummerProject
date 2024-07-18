// isme comapny card wala component aayega 
// use props for company name, desc, and other features, sath me isse clickable banana hai  jo ki  redirect kare dashboard pe

import React from "react";
import dummy_image from "./images/dummyImage.jpg";
// import Arrow from "./images/top-companies-arrow.png";

export default function CompanyBox(){
    return(
        

<div class="max-w-sm  border border-[#282D45] rounded-lg shadow bg-[#0E1330] dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg p-5" src={dummy_image} alt="" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Jon Snow the bastard Targaeryan</h5>
        </a>
        <p class=" font-normal text-[#8F9BB7] dark:text-gray-400">Man of royalty in the fictional world and beyond the fourth wall.</p>
        <hr class="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        
        <div className="flex gap-3 w-auto">
                <button className="text-[#41E88D] px-1 rounded-3xl bg-gradient-to-r from-[rgba(183,255,196,0.2)]  to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center">2016</button>
                <button className="text-[#41E88D] px-1 rounded-3xl bg-gradient-to-r from-[rgba(183,255,196,0.2)]  to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center">Swordsman</button>
                <button className="text-[#41E88D] px-1 rounded-3xl bg-gradient-to-r from-[rgba(183,255,196,0.2)]  to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center">Night'sWatch</button>
                <button className="text-[#41E88D] px-1 rounded-3xl bg-gradient-to-r from-[rgba(183,255,196,0.2)]  to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center">Stark</button>
        </div>

        <div className="flex justify-between items-center">
            <p className="text-[#8F9BB7]">Bastards</p>
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
}

// to-slate-200