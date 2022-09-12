import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {Link} from '@shopify/hydrogen';
import {RiSearchLine} from 'react-icons/ri';
import {AiFillHeart} from 'react-icons/ai';
import {BsCartFill} from 'react-icons/bs';
import {MdKeyboardArrowRight} from 'react-icons/md';
export default function MobileNavigation({pages}) {
  const [toggle,setToggle] = React.useState(false);
  return (
    <div className='lg:hidden'>
      <div className="absolute right-11 top-4  mt-1 cursor-pointer">
        <GiHamburgerMenu className="text-3xl" onClick={()=>setToggle(!toggle)}/>
        <div className={`fixed -left-0 top-16 w-full h-screen bg-gray-50 px-4 md:px-12 ${toggle?'block':'hidden'}`}>
          <nav>
            <ul>
              {pages.map((page) => (
                <li key={page.id} className="mx-4 my-4">
                  <Link
                    to={page.handle !== 'home' ? `/pages/${page.handle}` : '/'}
                    className="hover:opacity-80 flex items-center justify-between group"
                  >
                    {page.title}
                    <MdKeyboardArrowRight className="group-hover:block hidden text-2xl" />
                  </Link>
                </li>
              ))}
              <button className="bg-green-400 px-3.5 py-1 rounded cursor-pointer absolute right-5 sm:right-11">
                Order
              </button>
            </ul>
          </nav>
          <div className='block md:hidden'>
            <div className="flex justify-between flex-wrap">
              <div className="flex">
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
          </div>
        </div>
      </div>
    </div>
  );
}
