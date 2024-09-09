import React from 'react'
import web from '../../Assets/web development.jpg'
import mobile from '../../Assets/mobile web development.jpg'
import devops from '../../Assets/devops.png'

export default function Box() {
  return (
    <div className='flex flex-col items-center bg-[#05171D] flex-wrap md:flex-row justify-around '>

      <div className='m-4  h-[500px] w-[300px] shadow-md shadow-gray-900 flex flex-col items-center  rounded-lg ' style={{background: 'radial-gradient(circle, rgba(13,62,64,1) 0%, rgba(9,42,43,1) 71%, rgba(7,31,31,1) 100%)'}} >

        <div className='w-[250px] h-[180px] mt-8'>
          <img src={web} alt="web" className='rounded-lg' />
        </div>

        <div>
          <p className='mt-2'>Lorem ipsum dolor sit.</p>
          <p className='mt-4'>Lorem ipsum dolor sit.</p>
          <p className='mt-4'>Lorem ipsum dolor sit.</p>
          <p className='mt-4'>Lorem ipsum dolor sit.</p>
          <p className='mt-4'>Lorem ipsum dolor sit.</p>
        </div>

        <div  >
          <button className=' m-4 mt-6 w-32 h-8 font-bold'>Learn More</button>
        </div>

      </div>



      <div className='m-4  h-[500px] w-[300px] shadow-2xl shadow-gray-900  flex flex-col items-center rounded-lg' style={{background: 'radial-gradient(circle, rgba(13,62,64,1) 0%, rgba(9,42,43,1) 71%, rgba(7,31,31,1) 100%)'}}>

        <div className='w-[250px] h-[180px] mt-8'>
          <img src={mobile} alt="mobile" className='rounded-lg' />
        </div>

        <div>
          <p className='mt-2'>Lorem ipsum dolor sit.</p>
          <p className='mt-4'>Lorem ipsum dolor sit.</p>
          <p className='mt-4'>Lorem ipsum dolor sit.</p>
          <p className='mt-4'>Lorem ipsum dolor sit.</p>
          <p className='mt-4'>Lorem ipsum dolor sit.</p>
        </div>

        <div className=''>
          <button className=' m-4 mt-6 w-32 h-8 font-bold'>Learn More</button>
        </div>

      </div>





      <div className='m-4 bg-[#27374d] h-[500px] w-[300px] shadow-2xl shadow-gray-900  flex flex-col items-center rounded-lg' style={{background: 'radial-gradient(circle, rgba(13,62,64,1) 0%, rgba(9,42,43,1) 71%, rgba(7,31,31,1) 100%)'}}>

        <div className='w-[250px] h-[180px] mt-8'>
          <img src={devops} alt="devops" className='rounded-lg' />
        </div>

        <div>
          <p className='mt-2'>Lorem ipsum dolor sit.</p>
          <p className='mt-4'>Lorem ipsum dolor sit.</p>
          <p className='mt-4'>Lorem ipsum dolor sit.</p>
          <p className='mt-4'>Lorem ipsum dolor sit.</p>
          <p className='mt-4'>Lorem ipsum dolor sit.</p>
        </div>

        <div >
          <button className=' m-4 mt-6 w-32 h-8 font-bold '>Learn More</button>
        </div>

      </div>
    </div>
  )
}
