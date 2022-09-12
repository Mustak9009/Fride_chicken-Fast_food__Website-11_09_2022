import React from 'react'

export default function Footer() {
  return (
    <div className='text-center bg-gray-50 py-4 px-4 md:px-6'>
      <p>Copyright <span className='text-green-500'>@</span> {new Date().getFullYear()} Mustak sk</p>
    </div> 
  );
}
