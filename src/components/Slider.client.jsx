import {Image} from '@shopify/hydrogen';
import React,{useState} from 'react';

export default function Slider({products}) {
  const [sliderClick,setSliderClick] = useState(0);
  let productImg = [];
  products.map((product) => {
    product.images.edges.map((img) => {
      productImg.push(img.node); //when ever we don't get->array-> we don't apply -> map function
    });
  });
  return (
    <>
      {products.map((product,index) => (
        <div className={`w-full  -translate-x-[${sliderClick + '%'}]`} key={index}>
          <div className="m-4 flex md:justify-between md:items-center flex-wrap md:px-16 w-screen flex-col-reverse lg:flex-row ">
            <div className="lg:w-1/2 w-full px-2">
              <div className="md:pl-11 p-2">
                <p className="text-green-600 font-sans text-xl mb-3">
                  Our Special Dish
                </p>
                <h1 className="text-5xl font-Nunito mb-3">{product.title}</h1>
                <p className="text-gray-500">{product.description}</p>
                <button className="bg-[#152b53] text-white px-4 py-1 rounded mt-4">
                  Order Now
                </button>
              </div>
            </div>
            <div>
              <div>
                {productImg.map((img) => {
                  if (product.title === img.altText) {
                    //image render depends on -> product/title and img/altText
                    return <Image data={img} alt="Chicken leg pice" className=''/>;
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      ))}
        <div className="flex justify-center items-center w-full bottom-0 md:bottom-20 absolute ">
          <span className="w-3 h-3 bg-gray-300 rounded-full block m-3 cursor-pointer hover:border-2 hover:border-green-500" onClick={() => setSliderClick(0)}></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full block m-3 cursor-pointer hover:border-2 hover:border-green-500" onClick={() => setSliderClick(102)} ></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full block m-3 cursor-pointer hover:border-2 hover:border-green-500" onClick={() => setSliderClick(202)} ></span>
        </div>
    </>
  );
}
