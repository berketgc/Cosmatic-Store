import React from 'react'

const ProductItems = ({img,title}) => {
  return (
    

          <div className='bg-[#A376A2] w-52 h-80 flex flex-col justify-center items-center p-4 gap-4 text-white rounded-2xl transition duration-500 transform hover:scale-110' >
            <img className='border-2 size-36' src={`/images/${img}`} alt="" />
            <h2>{title}</h2>
            <button className='bg-pink-500  w-[60px] h-[60px] rounded-full p-2 hover:border-4 hover:border-white '>Buy</button>
          </div>
  

    
  )
}

export default ProductItems