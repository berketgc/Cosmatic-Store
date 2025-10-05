import React from 'react'

const Contact = () => {
  return (
    <div className='h-screen flex justify-center items-center bg-gray-200' >
        <div className='border-2 h-96  w-96 flex flex-col justify-center  items-center gap-4     p-4 shadow-[#A376A2] shadow-2xl rounded-2xl bg-pink-400 text-white text-2xl'>
          <h2> Contact with  Us</h2>
          <p>Email: Bussines@gmail.com </p>
          <p>Phone number: 555-44-555-44 </p>
          <button className='bg-[#A376A2] p-2 rounded-2xl'>Send Mail</button>
           <button className='bg-[#A376A2] p-2 rounded-2xl'>Call</button>
         </div>


    </div>
  )
}

export default Contact