import React from 'react'
import ProductItems from './ProductItems'

const Products = () => {
  return (
    <div className='bg-gray-100'>
      <div className=' flex justify-center items-center '>
        <h2 className='bg-pink-500 text-white text-4xl rounded-b-2xl p-6 border-4 border-[#A376A2]'> All Products</h2>
      </div>

      <div className='m-20 shadow-2xl p-8 flex flex-wrap justify-center items-center  gap-12 relative'>
        <ProductItems
          img="cosmatic1.jpg"
          title="lorem"
        />

        <ProductItems
          img="cosmatic2.jpg"
          title="lorem"
        />

        <ProductItems
          img="cosmatic3.jpg"
          title="lorem"
        />

        <ProductItems
          img="cosmatic4.jpg"
          title="lorem"
        />

        <ProductItems
          img="cosmatic5.jpg"
          title="lorem"
        />

        <ProductItems
          img="cosmatic6.jpg"
          title="lorem"
        />

        <ProductItems
          img="cosmatic7.jpg"
          title="lorem"
        />

        <ProductItems
          img="cosmatic8.jpg"
          title="lorem"
        />

        <ProductItems
          img="cosmatic9.jpg"
          title="lorem"
        />

        <ProductItems
          img="cosmatic10.jpg"
          title="lorem"
        />

        <ProductItems
          img="cosmatic11.jpg"
          title="lorem"
        />

        <ProductItems
          img="cosmatic12.jpg"
          title="lorem"
        />

         <ProductItems
          img="cosmatic13.jpg"
          title="lorem"
        />

        <ProductItems
          img="cosmatic14.jpg"
          title="lorem"
        />

        <ProductItems
          img="cosmatic15.jpg"
          title="lorem"
        />

        <ProductItems
          img="cosmatic16.jpg"
          title="lorem"
        />


        <div className='absolute bottom-1 right-2'>
          <a className='text-sm' href="#">for more <span className='text-blue-600'>click</span> </a>
        </div>


      </div>



    </div>
  )
}

export default Products