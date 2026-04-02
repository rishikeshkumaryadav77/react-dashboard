import React from 'react'

const Button = ({value}) => {
  return (
    <>
      <button className='bg-gradient-to-b from-orange-200 to-orange-500 px-8 py-3 text-white rounded-full text-center hover:scale-105 md:text-lg text-md hover:to-orange-700 cursor-pointer'>
        {value}
      </button>
    </>
  )
}

export default Button