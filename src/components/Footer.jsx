import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Footer() {
    const navigate = useNavigate();
  return (
    <div className='w-full bg-black text-white flex justify-around text-2xl h-96 items-center content-center static bottom-0'>
        <div>
            <p className='text-3xl font-bold'>Abstract</p>
            <p className='hover:underline cursor-pointer'>Start Trial</p>
            <p className='hover:underline cursor-pointer'>Pricing</p>
            <p className='hover:underline cursor-pointer'>Download</p>
        </div>

        <div>
            <p className='text-3xl font-bold'>Resource</p>
            <p className='hover:underline cursor-pointer'>Blog</p>
            <p className='hover:underline cursor-pointer'>Help Center</p>
            <p className='hover:underline cursor-pointer'>Status</p>
        </div>

        <div>
            <p className='text-3xl font-bold'>Community</p>
            <p className='hover:underline cursor-pointer'>Twitter</p>
            <p className='hover:underline cursor-pointer'>Linkedln</p>
            <p className='hover:underline cursor-pointer'>Facebook</p>
            <p className='hover:underline cursor-pointer'>Dribbble</p>
            <p className='hover:underline cursor-pointer'>Podcast</p>
        </div>

        <div>
            <p className='text-3xl font-bold'>Company</p>
            <p className='hover:underline cursor-pointer'>About Us</p>
            <p className='hover:underline cursor-pointer'>Careers</p>
            <p className='hover:underline cursor-pointer'>Legal</p>
        </div>

        <div>
            <p className='text-3xl font-bold'>Contact Us</p>
            <p className='hover:underline cursor-pointer'>info@abstract.com</p>

        </div>    
    </div>
  )
}
