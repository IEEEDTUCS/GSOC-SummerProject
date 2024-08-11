import React from "react";
import { RxInstagramLogo } from "react-icons/rx";
import { PiGithubLogoLight } from "react-icons/pi";
import { PiLinkedinLogoLight } from "react-icons/pi";
import { IoMailUnreadOutline } from "react-icons/io5";

function MemberCard({
  name,
  image,
  insta,
  linkedin,
  github,
  mail,
}) {
  return (
    <div
      className="w-[160px] h-[185px] rounded-[10px] pb-2.5 border-2 border-[#7214FF]
                    sm:w-[263.5px] sm:h-[285px] sm:border-2 sm:border-[#7214FF] sm:rounded-[17px] sm:pb-4"
    >
      <div className="relative w-[155px] h-[115px] sm:w-[225px] sm:h-[190px] sm:m-auto">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt="cardimage"
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div
        className="font-poppins text-[15px] font-semibold leading-custom text-center 
                      text-[#7214FF] sm:text-[20px] sm:font-semibold sm:mt-[0px] sm:py-[5px]"
      >
        {name}
      </div>
      <div
        className="gap-[8px] grid grid-cols-4 px-2 pt-2 sm:pt-0  sm:mt-[5px]
                      sm:gap-[15px] sm:flex sm:justify-center sm:items-center"
      >
       <div>
          <a href={insta} target={insta} rel="noopener noreferrer">
            <button>
              <div className="flex items-center justify-center h-7 w-7 sm:h-9 sm:w-9 bg-[#7214FF] rounded-full">
                <RxInstagramLogo className="w-5 h-5 sm:w-7 sm:h-7" />
              </div>
            </button>
          </a>
        </div>

        <div >
          <a href={github} target={github} rel="noopener noreferrer">
              <button>
            
              <div className="flex items-center justify-center h-7 w-7 sm:h-9 sm:w-9 bg-[#7214FF] rounded-full">
              <PiGithubLogoLight className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>
          </button>
          </a>
        </div>
        <div>
          <a href={linkedin} target={linkedin} rel="noopener noreferrer">
                <button>
              
                <div className="flex items-center justify-center h-7 w-7 sm:h-9 sm:w-9 bg-[#7214FF] rounded-full">
                <PiLinkedinLogoLight className="w-5 h-5 sm:w-7 sm:h-7" />
              </div>
            </button>
          </a>
        </div>
        <div>
          <a href={mail} target={mail} rel="noopener noreferrer">
            <button>
          
            <div className="flex items-center justify-center h-7 w-7 sm:h-9 sm:w-9 bg-[#7214FF] rounded-full">
            <IoMailUnreadOutline className="w-5 h-5 sm:w-7 sm:h-7" />
          </div>
        </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
