import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonComponentClass from './components/classComponent/button'
import ButtonComponent from './components/button/button'
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from './components/heading/heading'
import { ListItems, ListParnt, UnList } from './components/list/listP'
import { Image } from './components/image/image'
import { Card } from './components/cards/card'
import Table from './components/tables/Table'
import Bootstrap from './components/Bootstrap/Bootstrap'
import ImageCompunt from './components/imageComponent/imageCom'
import { fakeData } from './components/javascript/fakeData'
import TodoComponent from './components/classComponent/todo/Todo'


function App() {


  return (
    <>
      <div className='app'>
        {/* <Image />
        <ButtonComponent />
        < Heading1 />
        <Heading2 />
        <Heading3 />
        <Heading4/>
        <Heading5 />
        <Heading6 />
        <ListParnt />
        <UnList /> */}
        {/* <Card /> */}
        {/* <ListItems />
        <Table /> */}
        {/* <Bootstrap /> */}
        {/* <ImageCompunt src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg" name = "rishi" age = "15" /> passing props */}
        {/* <ImageCompunt src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg" />        passing props in same component */}
        {
          // fakeData.map((eachProduct) =>{
          //   return(
          //     <>
          //     <img src={eachProduct.image} alt="img" width={100} height={100}/>
          //     <h3>{eachProduct.title}</h3>
          //     <h1>{eachProduct.price}</h1>
          //     </>
          //   )
          // })
        }

      <TodoComponent />

      {/* <ButtonComponentClass /> */}
      </div>
      
    </>
  )
}

export default App
