import Link from 'next/link';
import React from 'react';
import { BsChatLeftHeartFill } from "react-icons/bs";

export default function Header() {
  return (
    <div className='shadow-sm border-b sticky top-0 bg-blue-50 z-30 p-3'>
      <div className='flex justify-between items-center max-w-6xl mx-auto'>
        {/* Your content for the header goes here */}
        <Link href={"/"} className=''>
        <h1 className='text-2xl font-bold p-2 font-serif' style={{ color: '#102C57' }}>VoxAura</h1>
        </Link>
        <Link href={"/"}>
            <BsChatLeftHeartFill />
        </Link>
      </div>
    </div>
  );
}
