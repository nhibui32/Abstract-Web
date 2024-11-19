import React from 'react'
import NavBar from '../components/NavBar'
import arrowRight from '../assets/images/arrow-right.svg'
import Footer from '../components/Footer'
import Body from '../components/Body'
export default function HomePage() {
  return (
    <div className='h-full'>
      <NavBar/>
      <div className='h-96 bg-customLightBlue items-center justify-center flex flex-col'>
        <p className='text-7xl mb-8'>How can we help?</p>
        <div className="relative w-800">
            <input type="text" placeholder='Search' className='border border-black w-full h-14 pr-10 hover:border-blue-400 pl-4 '/>
            <img src={arrowRight} alt="Arrow Right Icon" className='w-6 h-6 absolute right-4 top-1/2 transform -translate-y-1/2'/>
        </div>
      </div>
      <Body/>
      <Footer/>
    </div>
  )
}
