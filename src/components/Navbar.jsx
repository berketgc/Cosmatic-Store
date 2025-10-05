
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
     <div className='h-20 bg-[#A376A2] w-full flex justify-around items-center  text-white '>
            <Link className='border-r-2 border-white inline-block   w-28' to="/" >Home</Link>
            <Link className='border-r-2 border-white inline-block   w-28' to="/products" >Products</Link>
            <Link className='border-r-2 border-white inline-block   w-28' to="/contact" >Contact</Link>
            <Link className='border-2 border-white flex justify-center items-center w-16 h-16 rounded-full hover:scale-110 hover:bg-pink-500 ' to="/login" >Login</Link>

        </div>
  )
}

export default Navbar