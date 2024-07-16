// same as header bus bottom me daalna hai isse
// component name: Footer Caps ka dyan rakhna

import React from 'react'

const Footer = () => {
  return (
    <div className='fixed bottom-0 left-0 right-0 text-white flex justify-between items-center border-box py-4 mx-28 border-t-[1px] border-gray-800'>
        <div className='text-gray-500'>Copyright ©IEEEDTU | Designed and Developed by <span className='text-white'>IEEE DTU Students with 💖</span> </div>
        <div className='flex gap-4'>
          <img src="src/assets/facebook.svg" alt="" />
          <img src="src/assets/twitter.svg" alt="" />
          <img src="src/assets/linkedin.svg" alt="" />
          <img src="src/assets/instagram.svg" alt="" />
        </div>
    </div>
  )
}

export default Footer