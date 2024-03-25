import React from 'react'
import "./Header.css"
import NavBar from "../Navbar/Navbar"

const Header = () => {
  return (
    <header>
      <div className='wrapper'>
        <NavBar/>
        <div className='cta'>
            <p className='course-name'>Sound Design Masterclass</p>
            <h1>Learn the Art of Sound Design</h1>
            <a href="#" className='demo-btn'>Demo Lesson</a>
        </div>
      </div>
    </header>
  )
}

export default Header