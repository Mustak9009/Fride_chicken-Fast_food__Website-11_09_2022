import React from 'react';
import Dish3 from '../assets/images/dish-3.png';
import {Image} from '@shopify/hydrogen';
import {AiFillEye, AiFillHeart} from 'react-icons/ai';
import {RiStarSLine, RiStarSFill} from 'react-icons/ri';
export default function DishesClient() {
  return (
    <div className="w-full">
      <div className="text-center flex justify-center flex-col">
        <p className="text-green-600 text-xl font-semibold">Oue Dishes</p>
        <h2 className="text-3xl mt-1 font-Roboto">POPULAR DISHES</h2>
      </div>
      <div className="mx-6 flex justify-center items-center mt-12 ">
        <div className="shadow-lg p-4 border-2 rounded bg-white group">
          <div className="w-64 relative">
            <div className="absolute flex justify-between w-full">
              <div className="p-2 bg-gray-300 rounded-full text-2xl  hidden group-hover:block">
                <AiFillEye
                  className="hover:text-green-500 hover:cursor-pointer"
                />
              </div>
              <div className="p-2 bg-gray-300 rounded-full text-2xl  hidden group-hover:block">
                <AiFillHeart className="hover:text-green-500 hover:cursor-pointer" />
              </div>
            </div>
            <Image src={Dish3} alt="Chicken" width={500} height={500} />
          </div>
          <div className="px-5 py-3 text-center">
            <h3 className="text-2xl font-Nunito">Fride Chicken</h3>
            <div className="flex justify-center items-center mt-3 text-xl">
              <RiStarSFill className="text-green-500" />
              <RiStarSFill className="text-green-500" />
              <RiStarSFill className="text-green-500" />
              <RiStarSLine />
              <RiStarSLine />
            </div>
            <div className="flex justify-between mt-4">
              <p className="text-green-500  text-xl font-Nunito">$56.00</p>
              <button className="bg-[#152b53] text-white px-3 py-1 rounded">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
