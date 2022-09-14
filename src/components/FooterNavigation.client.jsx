import {Link} from '@shopify/hydrogen';
import React from 'react';
import {FaFacebookSquare} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';
import {IoLogoYoutube} from 'react-icons/io';
export default function FooterNavigation({pages}) {
  return (
    <nav>
      <ul className="space-y-1">
        {pages.map((page) => (
          <li key={page.id} className="hover:opacity-75 cursor-pointer">
            <Link to={page.handle !== 'home' ? `/pages/${page.handle}` : '/'}>
              {page.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export function QuickLinks() {
  return (
    <>
      <h2 className="text-2xl font-semibold  mb-2 font-Roboto">Contact info</h2>
      <ul className="space-y-1">
        <li>
          <Link to='https://www.facebook.com/' className='flex items-center justify-between hover:underline'>Facebook <FaFacebookSquare className='text-[#4267B2] text-2xl'/> </Link>
        </li>
        <li>
          <Link to='https://www.instagram.com/' className='flex items-center justify-between hover:underline'>Instagram <AiFillInstagram className='text-[#E1306C] text-2xl'/></Link>
        </li>
        <li>
          <Link to='https://www.youtube.com' className='flex items-center justify-between hover:underline'>youTube <IoLogoYoutube className='text-[#FF0000] text-2xl'/></Link>
        </li>
      </ul>
    </>
  );
}
