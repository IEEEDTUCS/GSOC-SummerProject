// same as header bus bottom me daalna hai isse
// component name: Footer Caps ka dyan rakhna

import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col justify-between items-center '>
      <div className=' text-white w-[85%]   flex justify-between items-center border-box py-4   border-t-[1px] border-gray-800'>
        <div className='text-gray-500'>Copyright ©IEEEDTU | Designed and Developed by <span className='text-white'>IEEE DTU Students with 💖</span> </div>
        <div className='flex gap-4'>
          <img src="src/assets/facebook.svg" alt="" />
          <img src="src/assets/twitter.svg" alt="" />
          <img src="src/assets/linkedin.svg" alt="" />
          <img src="src/assets/instagram.svg" alt="" />
        </div>
    </div>
    </div>
    
  )
}

export default Footer