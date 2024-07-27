
// on clicking the button call a function which will trigger the toggledrawer button and the drawer will close
import React from "react";


const years = [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024]
const categories = ["Data","Development","EndUserApplication","Infrastructure","Cloud","Media","OperatingSystems","Hacking","Design"]
const technologies = ["Python","C++","C","Javascript","React.js","Vue.js","TailwindCSS","HTML","CSS","Node.js"]
const topics = ["Machine Learning","Web Development","Cloud","Software","Android","IOS","Linux"]


function ListingFunction(argument){

}


function Filter({onClose}) {
  return (
  <div className="w-[100%]   h-[100%]">

    <div className="lg:w-12/12   h-[100vh]   absolute border-l-[1px] border-white blur-sm "></div>
    <div className="lg:w-12/12   h-[100vh]  absolute  overflow-y-scroll no-scrollbar  p-10 ">


        {/* Heading */}
        <div className="flex justify-between ">
            <p className="text-white text-4xl font-semibold">Filters</p>
            <button onClick={onClose}>
            <img src="src/assets/company-list-filter-cross.png" alt="Close" />
          </button>
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

                <input id="yearBox" className="bg-transparent border-2 border-[#282D45] w-full p-2 px-5 rounded-3xl bg-gradient-to-r from-slate-600 via-transparent to-slate-600 bg-[length:600%_600%] bg-center text-white mb-8" type="text" placeholder="Search Years" />
                
                <div className="grid grid-cols-5 gap-x-10 gap-y-5">
                    {years.map((year,index) => (
                      <button key={year}  className={`bg-gradient-to-r from-[rgba(183,255,196,0.2)] to-[rgba(183,255,196,0.2)] bg-[length:100%_100%] bg-center p-[22px] rounded-3xl h-3 flex justify-center items-center ${index % 3 === 0 ? 'text-[#41E88D]' : 'text-[#7214FF]'} `}>
                        {year}
                      </button>))}
            
                </div>

            </div>  



            {/* Categories */}
            <div className="flex flex-col justify-center items-center mt-10">
                <p className="text-white text-lg pb-2 mb-3">Categories</p>

                <input className="bg-transparent border-2 border-[#282D45] w-full p-2 px-5 rounded-3xl bg-gradient-to-r from-slate-600 via-transparent to-slate-600 bg-[length:600%_600%] bg-center text-white mb-8" type="text" placeholder="Search Categories" />

                
                <div className="w-full flex gap-4 flex-wrap">
                    {categories.map((category,index) => (
                      <button key={category} className={`bg-gradient-to-r from-[rgba(183,255,196,0.2)] to-[rgba(183,255,196,0.2)] bg-[length:100%_100%] bg-center p-[12px] rounded-3xl h-3 flex justify-center items-center ${index % 3 === 0 ? 'text-[#41E88D]' : 'text-[#7214FF]'} `}>
                        {category}
                      </button>))}
                    
                    <button className="text-[#41E88D] underline" >See more...</button>
                </div>                
            
            </div>


            {/* Technologies */}
            <div className="flex flex-col justify-center items-center mt-10">
                <p className="text-white text-lg pb-2 mb-3">Technologies</p>

                <input className="bg-transparent border-2 border-[#282D45] w-full p-2 px-5 rounded-3xl bg-gradient-to-r from-slate-600 via-transparent to-slate-600 bg-[length:600%_600%] bg-center text-white mb-8" type="text" placeholder="Search Technlogies" />

                <div className="w-full flex gap-4 flex-wrap">
                    {technologies.map((technology,index) => (
                      <button key={technology} className={`bg-gradient-to-r from-[rgba(183,255,196,0.2)] to-[rgba(183,255,196,0.2)] bg-[length:100%_100%] bg-center p-[12px] rounded-3xl h-3 flex justify-center items-center ${index % 3 === 0 ? 'text-[#41E88D]' : 'text-[#7214FF]'} `}>
                        {technology}
                      </button>))}
                      <button className="text-[#41E88D] underline" >See more...</button>

                </div>  
                
                
            
            </div>

            {/* Topics */}
            <div className="flex flex-col justify-center items-center mt-10">
                <p className="text-white text-lg pb-2 mb-3">Topics</p>

                <input className="bg-transparent border-2 border-[#282D45] w-full p-2 px-5 rounded-3xl bg-gradient-to-r from-slate-600 via-transparent to-slate-600 bg-[length:600%_600%] bg-center text-white mb-8" type="text" placeholder="Search Topics" />

                <div className="w-full flex gap-4 flex-wrap">
                    {topics.map((topic,index) => (
                      <button key={topic} className={`bg-gradient-to-r from-[rgba(183,255,196,0.2)] to-[rgba(183,255,196,0.2)] bg-[length:100%_100%] bg-center p-[12px] rounded-3xl h-3 flex justify-center items-center ${index % 3 === 0 ? 'text-[#41E88D]' : 'text-[#7214FF]'} `}>
                        {topic}
                      </button>))}
                      <button className="text-[#41E88D] underline" >See more...</button>

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
