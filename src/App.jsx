import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Note from './Note'
import Footer from './Footer' ;// Capital F if your file is Footer.jsx and idk why it's not capitaling
import Image from './Image';
import Card from './Card';
import contacts from '../contacts'
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


// function createCard(contact){
//   return <Card 
//   key={contact.id}
//   name = {contact.name}
//   img = {contact.imgURL}
//   tel = {contact.phone}
//   email ={contact.email}
//   />;
// }

function createCard(contact) {
  return <Card
    key={contact.id}
    name={contact.name}
    img={contact.imgURL}
    tel={contact.phone}
    email={contact.email}
    className="card"  
  />;
}

  return (
    <div>
      <Header />
      <Note/>
      <Image/>
      
      <h1 className ="heading">My Contacts</h1>
      <di classname ="dictionary">
        {contacts.map(contact => (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
      className="card"  
    />
))}

      </di>
      <Footer/>
    </div>
     
  )
}

export default App;
