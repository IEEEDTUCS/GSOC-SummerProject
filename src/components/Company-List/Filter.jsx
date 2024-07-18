// cross ya submit ko click karne pe  visiblity scroll jo bhi kah lo wo hatani hai  
//  give some animation but agar ye monday se phle complete ho gya to
// visibity ka props ke through milega wahi initial value hogi 
//  this will cover the whole page 

// means saara piche ka blur hoga and uske upar me filter component so that none of the componey will be clickableq

import React from "react";
import {NavLink} from "react-dom";
import cross from "./images/company-list-filter-cross.png";

function Filter() {
  return (
  <div className="w-[100vw] z-20 h-[100vh] bg-[rgba(0,0,0,0.4)] ">

    <div className="lg:w-5/12 md:w-6/12 sm:w-2/4 xs:w-11/12 h-[100vh] right-0 bg-[#060B27] absolute  border-l-[1px] border-white blur-sm"></div>
    <div className="lg:w-5/12 md:w-6/12 sm:w-2/4 xs:w-11/12 h-[100vh] right-0 absolute  overflow-y-scroll no-scrollbar px-8 pt-12 ">


        {/* Heading */}
        <div className="flex justify-between ">
            <p className="text-white text-4xl font-semibold">Filters</p>
            <button><img src={cross} alt="" /></button>
        </div>

        {/* rest of the content */}
        <div className="mt-10">

            {/* search bar and heading */}
            <div className="flex flex-col justify-center items-center gap-y-8">
                <input className="bg-transparent border-2 border-[#282D45] w-full p-2 px-5 rounded-3xl bg-gradient-to-r from-slate-600 via-transparent to-slate-600 bg-[length:600%_600%] bg-center text-white" type="text" placeholder="Search Shortcuts" />

                <div className="bg-gradient-to-r from-[rgba(183,255,196,0.2)] via-[rgba(183,255,196,0.19)] to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center w-2/4 rounded-3xl px-4 ">
                    <p className="text-[#7214FF] flex justify-center items-center text-center p-2">First Time Organization</p>
                </div>
            </div>


            {/* Years */}
            <div className="flex flex-col justify-center items-center mt-10" >
                <p className="text-white text-lg pb-2 mb-3">Years</p>

                <input className="bg-transparent border-2 border-[#282D45] w-full p-2 px-5 rounded-3xl bg-gradient-to-r from-slate-600 via-transparent to-slate-600 bg-[length:600%_600%] bg-center text-white mb-8" type="text" placeholder="Search Years" />

                <div className="grid grid-cols-5 gap-x-10 gap-y-5  ">
                  <button className="bg-gradient-to-r from-[rgba(183,255,196,0.2)] to-[rgba(183,255,196,0.2)] bg-[length:100%_100%] bg-center p-[22px] rounded-3xl h-3 flex justify-center items-center text-[#7214FF]">2015</button>
                  <button className="text-[#7214FF] bg-gradient-to-r from-[rgba(183,255,196,0.2)]  to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center p-[22px] rounded-3xl h-3 flex justify-center items-center">2016</button>
                  <button className="text-[#7214FF] bg-gradient-to-r from-[rgba(183,255,196,0.2)]  to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center p-[22px] rounded-3xl h-3 flex justify-center items-center">2017</button>
                  <button className="text-[#7214FF] bg-gradient-to-r from-[rgba(183,255,196,0.2)]  to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center p-[22px] rounded-3xl h-3 flex justify-center items-center">2018</button>
                  <button className="text-[#41E88D] bg-gradient-to-r from-[rgba(183,255,196,0.2)]  to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center p-[22px] rounded-3xl h-3 flex justify-center items-center">2019</button>
                  <button className="text-[#41E88D] bg-gradient-to-r from-[rgba(183,255,196,0.2)]  to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center p-[22px] rounded-3xl h-3 flex justify-center items-center">2020</button>
                  <button className="text-[#7214FF] bg-gradient-to-r from-[rgba(183,255,196,0.2)]  to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center p-[22px] rounded-3xl h-3 flex justify-center items-center">2021</button>
                  <button className="text-[#41E88D] bg-gradient-to-r from-[rgba(183,255,196,0.2)]  to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center p-[22px] rounded-3xl h-3 flex justify-center items-center">2022</button>
                  <button className="text-[#7214FF] bg-gradient-to-r from-[rgba(183,255,196,0.2)] to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center  p-[22px] rounded-3xl h-3 flex justify-center items-center">2023</button>
                  <button className="text-[#41E88D] bg-gradient-to-r from-[rgba(183,255,196,0.2)] to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center  p-[22px] rounded-3xl h-3 flex justify-center items-center">2024</button>
                </div>
                


            </div>  

            {/* Categories */}
            <div className="flex flex-col justify-center items-center mt-10">
                <p className="text-white text-lg pb-2 mb-3">Categories</p>

                <input className="bg-transparent border-2 border-[#282D45] w-full p-2 px-5 rounded-3xl bg-gradient-to-r from-slate-600 via-transparent to-slate-600 bg-[length:600%_600%] bg-center text-white mb-8" type="text" placeholder="Search Categories" />

                <div className="w-full flex gap-4 flex-wrap">

                        <button className=" text-[#7214FF] bg-gradient-to-r from-[rgba(183,255,196,0.2)] to-[rgba(183,255,196,0.2)] bg-[length:100%_100%] bg-center p-[13px] rounded-3xl h-3 flex justify-center items-center ">Data</button>
                        <button className="text-[#7214FF] bg-gradient-to-r from-[rgba(183,255,196,0.2)]  to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center p-[13px] rounded-3xl h-3 flex justify-center items-center">Development</button>
                        <button className="text-[#7214FF] bg-gradient-to-r from-[rgba(183,255,196,0.2)]  to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center p-[13px] rounded-3xl h-3 flex justify-center items-center">End User Application</button>
                  
                        <button className="text-[#41E88D] bg-gradient-to-r from-[rgba(183,255,196,0.2)]  to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center p-[13px] rounded-3xl h-3 flex justify-center items-center">Infrastructure</button>
                        <button className="text-[#7214FF] bg-gradient-to-r from-[rgba(183,255,196,0.2)]  to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center p-[13px] rounded-3xl h-3 flex justify-center items-center">Cloud</button>
                        <button className="text-[#7214FF] bg-gradient-to-r from-[rgba(183,255,196,0.2)]  to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center p-[13px] rounded-3xl h-3 flex justify-center items-center">Media</button>
                        
                        <button className="text-[#7214FF] bg-gradient-to-r from-[rgba(183,255,196,0.2)]  to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center p-[13px] rounded-3xl h-3 flex justify-center items-center">Operating Systems</button>

                        <button className="text-[#41E88D] underline">See more...</button>
                  
                  
                </div>

                <div>
                    
                </div>

                
            
            </div>


            {/* Technologies */}
            <div className="flex flex-col justify-center items-center mt-10">
                <p className="text-white text-lg pb-2 mb-3">Technologies</p>

                <input className="bg-transparent border-2 border-[#282D45] w-full p-2 px-5 rounded-3xl bg-gradient-to-r from-slate-600 via-transparent to-slate-600 bg-[length:600%_600%] bg-center text-white mb-8" type="text" placeholder="Search Technlogies" />

                <div className="w-full flex gap-4 flex-wrap">

                        <button className=" text-[#7214FF] bg-gradient-to-r from-[rgba(183,255,196,0.2)] to-[rgba(183,255,196,0.2)] bg-[length:100%_100%] bg-center p-[13px] rounded-3xl h-3 flex justify-center items-center ">Python</button>
                        <button className="text-[#7214FF] bg-gradient-to-r from-[rgba(183,255,196,0.2)]  to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center p-[13px] rounded-3xl h-3 flex justify-center items-center">Javascript</button>
                        <button className="text-[#7214FF] bg-gradient-to-r from-[rgba(183,255,196,0.2)]  to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center p-[13px] rounded-3xl h-3 flex justify-center items-center">C</button>
                  
                        <button className="text-[#41E88D] bg-gradient-to-r from-[rgba(183,255,196,0.2)]  to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center p-[13px] rounded-3xl h-3 flex justify-center items-center">C++</button>
                        <button className="text-[#7214FF] bg-gradient-to-r from-[rgba(183,255,196,0.2)]  to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center p-[13px] rounded-3xl h-3 flex justify-center items-center">Java</button>
                        <button className="text-[#7214FF] bg-gradient-to-r from-[rgba(183,255,196,0.2)]  to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center p-[13px] rounded-3xl h-3 flex justify-center items-center">Ruby</button>
                        
                        <button className="text-[#7214FF] bg-gradient-to-r from-[rgba(183,255,196,0.2)]  to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center p-[13px] rounded-3xl h-3 flex justify-center items-center">HTML</button>
                        
                        <button className="text-[#7214FF] bg-gradient-to-r from-[rgba(183,255,196,0.2)]  to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center p-[13px] rounded-3xl h-3 flex justify-center items-center">CSS</button>

                        
                        <button className="text-[#7214FF] bg-gradient-to-r from-[rgba(183,255,196,0.2)]  to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center p-[13px] rounded-3xl h-3 flex justify-center items-center">React.js</button>

                        
                        <button className="text-[#7214FF] bg-gradient-to-r from-[rgba(183,255,196,0.2)]  to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center p-[13px] rounded-3xl h-3 flex justify-center items-center">Next.js</button>

                        
                        <button className="text-[#7214FF] bg-gradient-to-r from-[rgba(183,255,196,0.2)]  to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center p-[13px] rounded-3xl h-3 flex justify-center items-center">Express.js</button>

                        
                        <button className="text-[#7214FF] bg-gradient-to-r from-[rgba(183,255,196,0.2)]  to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center p-[13px] rounded-3xl h-3 flex justify-center items-center">Node.js</button>

                        
                        <button className="text-[#7214FF] bg-gradient-to-r from-[rgba(183,255,196,0.2)]  to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center p-[13px] rounded-3xl h-3 flex justify-center items-center">TailwindCSS  </button>

                        <button className="text-[#41E88D] underline">See more...</button>
                  
                  
                </div>

                <div>
                    
                </div>

                
            
            </div>

            {/* Topics */}
            <div className="flex flex-col justify-center items-center mt-10">
                <p className="text-white text-lg pb-2 mb-3">Topics</p>

                <input className="bg-transparent border-2 border-[#282D45] w-full p-2 px-5 rounded-3xl bg-gradient-to-r from-slate-600 via-transparent to-slate-600 bg-[length:600%_600%] bg-center text-white mb-8" type="text" placeholder="Search Topics" />

                <div className="w-full flex gap-4 flex-wrap">

                        <button className=" text-[#7214FF] bg-gradient-to-r from-[rgba(183,255,196,0.2)] to-[rgba(183,255,196,0.2)] bg-[length:100%_100%] bg-center p-[13px] rounded-3xl h-3 flex justify-center items-center ">Web</button>
                        <button className="text-[#7214FF] bg-gradient-to-r from-[rgba(183,255,196,0.2)]  to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center p-[13px] rounded-3xl h-3 flex justify-center items-center">Machine Learning</button>
                        <button className="text-[#7214FF] bg-gradient-to-r from-[rgba(183,255,196,0.2)]  to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center p-[13px] rounded-3xl h-3 flex justify-center items-center">Cloud</button>
                  
                        <button className="text-[#41E88D] bg-gradient-to-r from-[rgba(183,255,196,0.2)]  to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center p-[13px] rounded-3xl h-3 flex justify-center items-center">Graphics</button>
                        <button className="text-[#7214FF] bg-gradient-to-r from-[rgba(183,255,196,0.2)]  to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center p-[13px] rounded-3xl h-3 flex justify-center items-center">Education</button>
                        <button className="text-[#7214FF] bg-gradient-to-r from-[rgba(183,255,196,0.2)]  to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center p-[13px] rounded-3xl h-3 flex justify-center items-center">Data Science</button>
                        
                        <button className="text-[#7214FF] bg-gradient-to-r from-[rgba(183,255,196,0.2)]  to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center p-[13px] rounded-3xl h-3 flex justify-center items-center">Web Development</button>
                        
                        <button className="text-[#7214FF] bg-gradient-to-r from-[rgba(183,255,196,0.2)]  to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center p-[13px] rounded-3xl h-3 flex justify-center items-center">Android</button>

                        
                        <button className="text-[#7214FF] bg-gradient-to-r from-[rgba(183,255,196,0.2)]  to-[rgba(183,255,196,0.2)] bg-[length:300%_300%] bg-center p-[13px] rounded-3xl h-3 flex justify-center items-center">Software</button>
                        <button className="text-[#41E88D] underline">See more...</button>
                </div>


                {/* Apply/Clear Filters */}
                <div className="flex justify-between mt-5 w-full mb-10">
                    
                    <button className=" bg-[#41E88D]  w-1/3 p-4 rounded-full">Apply Filters</button>
                    
                    <button className="bg-gradient-to-r from-slate-600 via-transparent to-slate-600 bg-[length:600%_600%] bg-center  w-1/3 border-2 border-[#282D45] p-4 rounded-full text-[#47507A]" >Clear Filters</button>
                </div>

                
            
            </div>
        </div>
        
    </div>
    
  </div>
  );
}

export default Filter;
