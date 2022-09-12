import React from 'react';
import {RiSearchLine} from 'react-icons/ri';
import {AiFillHeart} from 'react-icons/ai';
import {BsCartFill} from 'react-icons/bs';
export default function NavIcons() {
  return (
    <div className="hidden md:block">
      <div className="flex justify-between pr-24">
        <div className="mx-2  bg-gray-300 rounded-full p-1">
          <RiSearchLine className="m-1 text-xl cursor-pointer hover:text-green-500" />
        </div>
        <div className="mx-2  bg-gray-300 rounded-full p-1">
          <AiFillHeart className="m-1 text-xl cursor-pointer hover:text-green-500" />
        </div>
        <div className="mx-2  bg-gray-300 rounded-full p-1">
          <BsCartFill className="m-1 text-xl cursor-pointer hover:text-green-500" />
        </div>
      </div>
    </div>
  );
}
