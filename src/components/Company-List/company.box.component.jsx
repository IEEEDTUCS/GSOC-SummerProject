// isme comapny card wala component aayega 
// use props for company name, desc, and other features, sath me isse clickable banana hai  jo ki  redirect kare dashboard pe

import React from "react";
// import Arrow from "./images/top-companies-arrow.png";

export default function CompanyBox(){
    return(
        <div class="text-white bg-purple-500 flex justify-between px-7 py-7">
        <div class="logo">
            CodeWithHiten
        </div>
        <ul class="flex list-none gap-7">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
        </div>
    );
}

// to-slate-200