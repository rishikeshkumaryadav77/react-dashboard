import React from 'react'
import grocery from "../../assets/grocery.png"
import Button from '../Button/Button'

const Heros = () => {
  return (
    <>
    <div className=' flex items-center min-h-screen max-w-[1400px] m-auto px-10 md:pt-25 pt-35 md:flex-row flex-col'>
      {/* heros content */}
      <div className='flex-1'>
        <span className='bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full'>Exports Best Quality...</span>
        <h1 className='md:text-7xl text-5xl font-bold my-3'>Tasty Organic <span className='text-orange-500'>Fruits</span>  & <span className='text-orange-500'>Veggies</span> in our City</h1>
        <p className='text-zinc-500 md:text-lg text-md my-5'>Bred for a high content of beneficial substances. Our products are all fresh and healthy.</p>
        <Button value={"Shop Now"}/>
      </div>

      {/* heros image */}
      <div className='flex-1'>
        <img src={grocery} alt="Hero Image" />
      </div>
    </div>
    </>
  )
}

export default Heros