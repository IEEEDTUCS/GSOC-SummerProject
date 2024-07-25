// header banana hai as a component and then make it position fixed  on top
// comopent name - <Header> 
import React, { useState } from 'react'

const Header = () => {
  const [isActive, setIsActive] = useState('Home')

  const handleClick = (element) => {
    setIsActive(element)
  }
  return (
    <div className='fixed top-0 left-0 right-0 text-white flex justify-around bg-[#060B27] items-center py-4 border-box border-b-[1px] border-gray-800'>
      <button>
        <img src="src/assets/logo.svg" alt="logo" />
      </button>
      <div className='flex justify-between gap-8'>
        <button onClick={() => handleClick('Home')} className={isActive === 'Home' ? 'text-white' : 'text-gray-400'}>Home</button>
        <button onClick={() => handleClick('Contributors')} className={isActive === 'Contributors' ? 'text-white' : 'text-gray-400'}>Contributors</button>
        <button onClick={() => handleClick('Top Companies')} className={isActive === 'Top Companies' ? 'text-white' : 'text-gray-400'}>Top Companies</button>
        <button onClick={() => handleClick('Contact Us')} className={isActive === 'Contact Us' ? 'text-white' : 'text-gray-400'}>Contact Us</button>
        <button onClick={() => handleClick('Our Team')} className={isActive === 'Our Team' ? 'text-white' : 'text-gray-400'}>Our Team</button>
      </div>
      <button className='bg-violet-600 py-2 px-4 rounded-full'>Dashboard</button>
    </div>
  )
}

export default Header