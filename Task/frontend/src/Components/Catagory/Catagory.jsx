import React from 'react'
import Header from '../Header/Header'
import fruitsAndVeggies from "../../assets/fruits-and-veggies.png"
import dairyAndEggs from "../../assets/dairy-and-eggs.png"
import meatAndSeaFood from "../../assets/meat-and-seafood.png"
import Button from '../Button/Button'

const Catagory = () => {
  const renderCategory = category.map((card)=>{
    return(
      <>
        <div key={card.id} className=' flex-1 basis-[300px] mb-60'>
          {/* img */}
          <div className='flex justify-center relative -mb-10'>
            <img src={card.image} alt="category"  className='w-full min-h-[25vh] absolute bottom-0'/>
          </div>
          {/* content category */}
          <div className='bg-amber-50 pt-17 p-8 rounded-4xl'>
            <h1 className='text-3xl font-bold'>{card.title}</h1>
            <p className='text-zinc-600 mb-9'>{card.description}</p>
            <Button value="See All"/>
          </div>
        </div>
      </>
    )
  })
  return (
    <>
      <div className=' max-w-[1400px] mx-auto md:py-20 py-0 px-10 '>
        <Header hightlights = "Shop" category="by category" />
      
      {/* category */}
      <div className='flex gap-10 md:mt-70 mt-70 flex-wrap ' >{renderCategory}</div>
    </div>
    </>
  )
}

export default Catagory


const category = [
  {
    id:1,
    title:"Fruits & Veggies",
    description:"Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    image: fruitsAndVeggies
  },
  {
    id:2,
    title:"Dairy & Eggs",
    description:"Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
    image: dairyAndEggs
  },
  {
    id:3,
    title:"Meat & SeaFood",
    description:"High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
    image: meatAndSeaFood
  }
]