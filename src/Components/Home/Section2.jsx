import React from 'react'
import sec2 from "../../Assets/sec2.png"

export default function Section2() {
  return (
    <>
      < div className=' p-5 md:flex flex-row items-center justify-between' style={{ background: 'radial-gradient(circle, rgba(13,62,64,1) 0%, rgba(9,42,43,1) 50%, rgba(7,31,31,1) 100%)' }} >
        <div className=''>
          <img src={sec2} alt="human" className='border-solid rounded-lg md:w-lvw ' />
        </div>
        <div className=''>

          <h1 className=' text-4xl font-bold p-2 m-2'>Lorem ipsum dolor sit amet.</h1>
          <p className='p-2 m-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, non blanditiis repellat, ipsum ratione deleniti quas hic amet vero explicabo odio laborum soluta! Alias facilis ipsam, perspiciatis ipsum nisi possimus!</p>
          <button className=' m-4 mt-6 w-32 h-8 font-medium'>E X P L O R E</button>
        </div>
      </div>
    </>

  )
}
