import React from 'react'
import whir from '../../Assets/color.png'

export default function Tab2() {
  return (
    <div className='bg-[#05171D] flex flex-col-reverse  md:flex-row justify-around items-center'>
      <div className='ml-10'>
        <h1 className='text-3xl mt-5'>Changing the World through personlized<br />digital experiences.</h1>
        <p className='mt-5 text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil facilis nobis dolor rerum ullam <br/>reiciendis officia nisi, laborum ipsum omnis! Commodi eveniet labore debitis rerum, accusamus <br/>sit delectus velit omnis placeat iure itaque voluptatum esse ducimus quis.<br/> Omnis quos vitae iure obcaecati, doloremque modi sequi commodi cum ex fugit inventore?</p>
      </div>



      <div className=' mr-11' >
        <img src={whir} alt="img" className='h-[350px] w-[600px] m-5'  />
      </div>

    </div>
  )
}
