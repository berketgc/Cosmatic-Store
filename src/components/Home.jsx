import React from 'react'

const Home = () => {
  return (
    <div className='bg-[#DDC3C3] '>
       
       <div className='w-3/5 h-screen m-auto flex justify-center items-center text-[#A376A2]'>
        <div className='flex flex-col justify-center items-center gap-4 border-t-2 border-b-4 border-pink-500 m-4 p-8  transition duration-700 transform hover:scale-110'> 
            <h1 className='mb-4 hover:underline text-2xl'>Welcome</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, porro officia, facere ullam veritatis tempore atque cupiditate magnam perspiciatis accusantium corporis veniam excepturi. Iste, aspernatur veritatis. Consequuntur quisquam eum natus!
            </p>
            <button className='bg-pink-500 text-3xl p-4 h-40 w-40 rounded-full text-white mt-12 hover:border-20 hover:border-[#A376A2]'>start</button>

          </div>



        </div>
    </div>
  )
}

export default Home