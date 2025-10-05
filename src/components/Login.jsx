import React from 'react'

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className='flex flex-col justify-between items-center gap-3 p-7 border-2 rounded-2xl w-72 bg-pink-500 hover:scale-110'>
        <input className='border-2 px-2 py-1 rounded-md bg-gray-100' type="email" placeholder='e-mail...' />
        <input className='border-2 px-2 py-1 rounded-md  bg-gray-100' type="password" placeholder='password...' />
        <button className='p-2 w-28 bg-green-500 rounded-2xl text-white font-semibold hover:bg-green-600 transition mt-3'>
          Login
        </button>
        <button className='p-2 w-28 bg-sky-500 rounded-2xl text-white font-semibold hover:bg-sky-600 transition'>
          Register
        </button>
      </div>
    </div>
  )
}

export default Login
