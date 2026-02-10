import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Note from './Note'
import Footer from './Footer' ;// Capital F if your file is Footer.jsx and idk why it's not capitaling
import Image from './Image';
// const food = "candy and popcorn"

function App() {

  // To render your h1 at the top of the screen, use absolute positioning with CSS.
  // This will require a CSS class. Let's add it inline for demonstration.
  // You can move this CSS to App.css if you want to keep styles separate.
// var numb = 1
// const personOne = "John"
// const personTwo = "Jane"
// const myName = "Jess"
// const MyLastName = "Doe"
// const currentdate = new Date(2026, 1, 6)
// const year = currentdate.getFullYear()


  return (
    <div>
      <Header />
      <Note/>
      <Image/>
      <Footer/>
    </div>
     
  )
}

export default App;
