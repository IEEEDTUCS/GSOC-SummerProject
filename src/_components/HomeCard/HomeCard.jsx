import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar"
import { Button } from "@components/ui/button"


const HomeCard = () => {
  return (
    <div className="flex w-[806px] h-[444px] border-2 rounded-lg flex-col overflow-hidden items-center justify-center" style={{ borderColor: '#282D45', backgroundColor: '#0e1330' }}>
      <div className="flex w-full h-[29px] items-center" style={{ backgroundColor: '#282D45' }}>
        <div className="flex space-x-2" style={{ marginLeft: '15px' }}>
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#0e1330' }}></div>
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#0e1330' }}></div>
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#0e1330' }}></div>
        </div>
      </div>
      <div className='flex w-[808px] h-[437px] justify-center items-center'>

      <HomeGraph/>

      </div>
    </div>
  );
}

const HomeGraph = () => {
  return (
    <div className='flex w-full h-full mx-10'>
      <div className='flex w-full my-9'>
        <div id='Avatar_bar' className='flex w-full h-12'>
          <Avatar className='h-12 w-12'>
            <AvatarImage src="https://github.com/tarushs.png" />
            <AvatarFallback>TS</AvatarFallback>
          </Avatar>
          <div className='h-12 w-96 flex flex-col items-start ml-4'>
            <text className='font-semibold' style={{ fontFamily: 'satoshi', color: '#ffffff', fontSize: '20px'}}>Company Name</text>
            <text className='font-normal' style={{ color: '#8F9BB7', fontSize: '14px'}}>The 3D Toolkit provides algorithms and methods..</text>
          </div>
          <div className='ml-auto self-center '><Button className='border-gray-600 border-2 rounded text-white' variant="outline" >Visit Site</Button></div>
        </div>
      </div>
    </div>
  )
}

export default HomeCard;
