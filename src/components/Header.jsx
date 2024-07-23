import Link from 'next/link';
import React from 'react';
import { BsChatLeftHeartFill } from "react-icons/bs";

export default function Header() {
  return (
    <div className='shadow-sm border-b sticky top-0 bg-blue-50 z-30 p-3'>
      <div className='flex justify-between items-center max-w-6xl mx-auto'>
        {/* Your content for the header goes here */}
        <Link href={"/"} className='hidden lg:inline-flex'>
        <h1 className='text-2xl font-bold p-2 font-serif' style={{ color: '#102C57' }}>VoxAura</h1>
        </Link>
        <Link href={"/"} className='lg:hidden'>
            <BsChatLeftHeartFill className='w-12 h-12 text-blue-900'/>
        </Link>
        {/*search*/}
        <input type='text' placeholder='Search...' className='bg-blue-50 border border-blue-900 rounded text-sm w-full py-2 px-4 max-w-[300px] lg:max-w-[400px]'/>

        
      </div>
    </div>
  );
}
