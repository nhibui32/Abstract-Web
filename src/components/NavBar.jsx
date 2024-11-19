import React from 'react'
import documentIcon from "../assets/images/document.svg"
import verticalLine from '../assets/images/verticalLine.png'
import searchIcon from '../assets/images/searchIcon.svg'
import bar3 from '../assets/images/bar3.svg'

export default function NavBar() {
  return (
    <div className='text-2xl bg-slate-500 text-white h-24 w-full content-center'>
      <div className='flex justify-between pl-32'>
        <div className='flex items-center'>
            <img src={documentIcon} alt="Document Icon" className='w-9 h-9 rounded-xl'/>
            <p className='pl-3 hover:text-gray-200'>Abstract</p>
            <img src={verticalLine} alt="Vertical Line" className='w-9 h-9'/>
            <p className='hover:underline'>Help Center</p>
        </div>

        <div className='flex items-center gap-2 tablet:hidden'>
          <img src={searchIcon} alt="Search Icon" className='w-9 h-9'/>
          <img src={bar3} alt="Bars-3" className='w-9 h-9'/>
        </div>

        <div className='hidden tablet:flex pr-40'>
          <button className='bg-black text-white border border-white px-10 py-3 rounded-2xl'>Submit a request</button>
          <button className='bg-indigo-600 ml-3 px-10 py-3 rounded-2xl hover:bg-white hover:text-black transition duration-500 ease-in-out '>Sign in</button>
        </div>
      </div>

      <div>

      </div>
    </div>
  )
}


