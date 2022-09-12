import React from 'react';
import {ImSpoonKnife} from 'react-icons/im';
import NavIcons from './NavIcons.client';
import Navigation from './Navigation.client';
import MobilNavigation from './MobileNavigation.client';
import {useNavigate} from '@shopify/hydrogen';
export default function Header({shopName, pages}) {
  const navigate = useNavigate();
  return (
    <header>
      <div className="border-2  w-full flex justify-between  items-center h-16">
        <div className="flex items-center md:pl-24  sm:pl-11 pl-5">
          <ImSpoonKnife className="text-2xl text-green-700 mr-1" />
          <h1 className="font-bold text-2xl custom_color_heading cursor-pointer" onClick={()=>navigate('/')}>
            {shopName}
          </h1>
          <MobilNavigation pages={pages}/>
        </div>
        <div>
          <Navigation pages={pages} />
        </div>
        <NavIcons/>
      </div>
    </header>
  );
}
