import React from 'react'
import './Navbar.css'

const Navbar = (props) => {
  return (
    <div className="navbar">
       <div className="logo">
         <h1>Pr<span>i</span>nce</h1>
       </div>
       <ul className="navBtns">
        <li onClick={() => props.scrollToSection(props.home)}>Home</li>
        <li onClick={() => props.scrollToSection(props.about)}>About</li>
        <li onClick={() => props.scrollToSection(props.contact)}>Contact</li>
        <span 
         style={{
            left: `${props.spanPosition}vw`,
          }}
          ></span>
       </ul>
    </div>
  )
}

export default Navbar
