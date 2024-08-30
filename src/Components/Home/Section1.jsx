import React from 'react'
import sec1 from "../../Assets/sec1.jpg"
export default function Section1() {
    return (
        <div className=' bg-[#5569AF] h-[650px]  md:h-fit p-16 flex flex-col-reverse md:flex-row' >
            <div className=' bg-[#5569af] mt-9 md:mt-0 text-white '>
                <h3 className='text-2xl p-2'>WELCOME</h3>
                <h1  className=' text-4xl font-bold p-2'>Lorem ipsum dolor sit amet.</h1>
                <p className='p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, non blanditiis repellat, ipsum ratione deleniti quas hic amet vero explicabo odio laborum soluta! Alias facilis ipsam, perspiciatis ipsum nisi possimus!</p>
                <button className=' m-2 w-32 h-8  bg-amber-500 text-black'>Explore</button>
            </div>

                <img src={sec1} alt="human" className='border-solid rounded-lg mt-9 md:mt-0 h-50 w-[450px] md:h-80 md:w-[500px]' />
          
        </div>
    )
}
