import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Counter , setcounter] =useState(15)
//  let counter = 15
 const increaseValue =( ) =>{
  
   setcounter(Counter+1)
   console.log("value added" , Counter);
  //Counter=Counter+1;
 }
  const decreaseValue =( ) =>{
     setcounter(Counter-1)
 }
 
  return (
    <>
      
      <h1>hooks class</h1>
      <h2>Counter value{Counter}</h2>

      <button onClick={increaseValue}>Increase  value</button>
      <br />
      <button onClick={decreaseValue}> decrease value</button>
     
      
    </>
  )
}

export default App
