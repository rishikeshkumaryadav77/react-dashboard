import React from 'react'

const Header = ({hightlights, category}) => {
  return (
    <div className='mx-auto w-fit'>
          <h1 className='md:text-5xl text-2xl font-bold'> 
            <span className='text-orange-500'>{hightlights}</span>  {category}
          </h1>
          <div className='md:w-35 w-25 h-1 md:mt-6 mt-3 ml-auto bg-orange-500'></div>
      </div>
  )
}

export default Header