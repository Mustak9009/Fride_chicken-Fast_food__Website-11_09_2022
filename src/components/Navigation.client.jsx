import { Link } from '@shopify/hydrogen'
import React from 'react'

export default function Navigation({pages}) {
  return (
   <nav className='hidden lg:block'>
      <ul className='flex justify-center items-center'>
         {pages.map((page)=>(
          <li key={page.id} className='mx-4'>
            <Link to={page.handle!=='home' ? `/pages/${page.handle}`:'/'} className='hover:opacity-80'>{page.title}</Link>
          </li>
         ))}
        <button className='bg-green-400 px-3.5 py-1 rounded cursor-pointer'>Order</button>
      </ul>
   </nav>
  )
}
