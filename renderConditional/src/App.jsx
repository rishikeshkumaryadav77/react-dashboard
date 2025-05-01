import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const isLogin = true
  // if else rendering
  // if(isLogin){
  //   return(
  //     <>
  //       <h3>if block</h3>
  //       </>
  //   )
  // }
  // else{
  //   return(
  //     <>
  //     <h3>else block</h3>
  //     </>
  //   )
  // }
  
  // ternary rendering
    // return(
    //   <div>
    //     {  

    //     isLogin ? <h1>hello</h1>  : <h1>hii</h1>
        
    //     }
    //   </div>
    // )

    // logical && operator 
    return(
      <div>
        {  

        isLogin && <h1>hello rishi</h1>  
        
        }
      </div>
    )
  
}

export default App
