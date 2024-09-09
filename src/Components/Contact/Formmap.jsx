import React from 'react'

export default function Formmap() {
  return (
    <div className='flex flex-col flex-shrink md:flex-row justify-evenly  flex-wrap bg-[#05171D]'>
        <div className='m-4'>
            <form action="">
                <div className='mt-4'>
                    <label for="email" className='block mb-2 text-xl font-bold text-[#FFFFFF] '>Your Email</label>
                    <input type='email' id='email' placeholder='name@flowbite.com' className=' p-2  bg-gray-50 border-2  focus:outline-none text-lg font-semibold rounded-lg w-[700px] h-[40px]'></input>
                </div>
                <div className='mt-4'>
                <label for="subject" className='block mb-2 text-xl font-bold text-[#FFFFFF]'>Subject</label>
                <input type='message' id='email' placeholder='Let us know hoe we can help you '  className=' p-2 shadow-sm bg-gray-50 border  border-gray-300 focus:outline-none text-lg font-semibold rounded-lg w-[700px] h-[40px] '></input>
                </div>
                <div className='mt-4'>
                <label for="message" className='block mb-2 text-xl font-bold text-[#FFFFFF]'>Your Message</label>
                <textarea id='mesage' rows="4" placeholder='Leave a comment....' className=' p-2 shadow-sm bg-gray-50 border border-gray-300 focus:outline-none text-lg font-semibold rounded-lg w-full'></textarea>
                </div>
            </form>

        </div>






        <div className='m-4 '>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d352.6651342954535!2d78.79319978663297!3d10.10211131060144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1725618945706!5m2!1sen!2sin"  className='h-[400px] w-[600px] border rounded-xl'></iframe>
        </div>
      
    </div>
  )
}
