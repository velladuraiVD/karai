import React from 'react'
import logo from "../Assets/logo.jpg"
export default function Nav() {

  return (
    <div className='bg-[#05171D] sticky top-0 border-[#094941] border-b-[1.5px] shadow-sm shadow-[#FCF1D6]'>
      <nav className=' flex items-center justify-between h-14'>
        <img src={logo} alt="logo" className='w-48 text-[#0EE4B6] ' />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 flex text-white mr-4 md:hidden">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>


        <ul className=' text-[#D8B08C] gap-5 hidden md:flex mr-5 font-semibold'>
          <a href='/' className='hover:cursor-pointer  transition ease-in-out delay-0 hover:-translate-y-1 hover:scale- duration-150 hover:text-green-400 '>HOME</a>
          <a href='/about' className='hover:cursor-pointer  transition ease-in-out delay-75 hover:-translate-y-1 hover:scale- duration-150  hover:text-green-400'>ABOUT</a>
          <a href='/service' className='hover:cursor-pointer  transition ease-in-out delay-75 hover:-translate-y-1 hover:scale- duration-150  hover:text-green-400'>SERVICE</a>
          <a href='/contact' className=' hover:cursor-pointer  transition ease-in-out delay-75 hover:-translate-y-1 hover:scale- duration-150  hover:text-green-400'>CONTACT</a>
        </ul>

      </nav>

{/* 
      <section className='fixed z-20 top-0 transition-all duration-1000' style={{width:'50%' height='100'right='-50%'}}>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </div>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/service">Service</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </section> */}
    </div>



  )
}
