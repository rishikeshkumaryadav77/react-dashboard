import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonComponent from './components/button/button'
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from './components/heading/heading'
import { ListParnt, UnList } from './components/list/listP'
import { Image } from './components/image/image'
import { Card } from './components/cards/card'
import Table from './components/tables/Table'


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
        <Table />
      </div>
      
    </>
  )
}

export default App
