import {flattenConnection, Image} from '@shopify/hydrogen';
import React from 'react';
export default function Slider({products}) {
  const producntImage = flattenConnection(products.images);

  return (
    <div className="w-full h-screen border-2">
      <div className="m-4 flex justify-between items-center flex-wrap">
        <div className="w-1/2">
          <div className="pl-11 p-2">
            <p className="text-green-600 font-sans text-xl mb-3">
              Our Special Dish
            </p>
            <h1 className="text-5xl font-Nunito mb-3">{products.title}</h1>
            <p className="text-gray-500">{products.description}</p>
            <button className="bg-[#152b53] text-white px-4 py-1 rounded mt-4">
              Order Now
            </button>
          </div>
        </div>
        <div>
          <div>
            {producntImage.map((img) => (
              <Image data={img} alt="Chicken leg pice" />
            ))}
          </div>
        </div>        
          <div className='flex justify-center items-center w-full'>
            <span className="w-3 h-3 bg-gray-300 rounded-full block m-3 cursor-pointer"></span>
            <span className="w-3 h-3 bg-gray-300 rounded-full block m-3 cursor-pointer"></span>
            <span className="w-3 h-3 bg-gray-300 rounded-full block m-3 cursor-pointer"></span>
          </div>
      </div>
    </div>
  );
}
