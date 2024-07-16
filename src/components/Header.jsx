import Link from 'next/link';
import React from 'react';
import { BsChatLeftHeartFill } from "react-icons/bs";

export default function Header() {
  return (
    <div className=''>
      <div className=''>
        {/* Your content for the header goes here */}
        <Link href={"/"} className=''>
            <h1 className='text-red-500 text-2xl font-bold p-2 font-serif'>VoxAura</h1>
        </Link>
        <Link href={"/"}>
            <BsChatLeftHeartFill />
        </Link>
      </div>
    </div>
  );
}
