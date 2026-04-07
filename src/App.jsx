import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import './App.css'
import Header from './Header'
import Note from './Note'
import Footer from './Footer' ;// Capital F if your file is Footer.jsx and idk why it's not capitaling
import Image from './Image';
import Card from './Card';
import contacts from '../contacts'
// const food = "candy and popcorn"

function App() {


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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  
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
