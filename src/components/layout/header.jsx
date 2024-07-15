// header banana hai as a component and then make it position fixed  on top
// comopent name - <Header> 
import React from 'react'

const Header = () => {
  return (
    <div className='fixed top-0 left-0 right-0 text-white flex justify-around items-center py-4 border-box border-b-[1px] border-gray-800'>
        <div>
            <img src="src/assets/logo.svg" alt="logo" />
        </div>
        <div className='flex justify-between gap-8 text-gray-400'>
            <div className='text-white'>Home</div>
            <div>Contributors</div>
            <div>Top Companies</div>
            <div>Contact Us</div>
            <div>Our Team</div>
        </div>
        <div className='bg-violet-600 py-2 px-4 rounded-full'>Dashboard</div>
    </div>
  )
}

export default Header