import React from 'react'
import xeni from "../../Assets/xeni.png"
import emed from "../../Assets/emed.logo.webp"
import melbeez from "../../Assets/melbeez logo.webp"

export default function Section4() {
  return (
    <div className='text-center flex flex-col' style={{background: 'radial-gradient(circle, rgba(13,62,64,1) 0%, rgba(9,42,43,1) 50%, rgba(7,31,31,1) 100%)'}}>

      <h3 className='text-sm text-[#D8B08C] gap-2 m-5 font-bold'>P  A  R  T  N  E  R  S</h3>
      <h1 className='text-2xl m-4 font-bold'>Lorem, ipsum dolor.</h1>
      <p className='text-2xl '>Lorem ipsum dolor sit amet consectetur,<br /> adipisicing elit.</p>  
     

      <div className='flex flex-col items-center md:flex-row justify-evenly ' >
        <img src={emed} alt="" className='mb-10 mt-10' />
        <img src={xeni}alt=""  className='mb-10 mt-10'/>
        <img src={melbeez}alt=""  className='mb-10 mt-10'/>
      </div>
    </div>
  )
}
