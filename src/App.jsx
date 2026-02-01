import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'

const food = "candy and popcorn"

function App() {

  // To render your h1 at the top of the screen, use absolute positioning with CSS.
  // This will require a CSS class. Let's add it inline for demonstration.
  // You can move this CSS to App.css if you want to keep styles separate.
var numb = 1
const personOne = "John"
const personTwo = "Jane"
const myName = "Jess"
const MyLastName = "Doe"

  return (
    <div>
      <Header />
      <h1>Vite Practice {numb}; {Math.random()} ~ created by: {myName} {MyLastName}</h1>
      <p>String literals: {personOne} and {personTwo}</p>
      <ul>
        <li>Practice React</li>
        <li>Practice JS</li>
        

    
      </ul>
      
      <p>I will start by rendering food: {food}</p> 
      
      </div>
  )
}

export default App;
