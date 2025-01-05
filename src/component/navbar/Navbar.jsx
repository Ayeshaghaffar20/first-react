import React from 'react'
import './style.css'
import logo_light from '../../assets/images/logo-black.png'
import logo_dark from '../../assets/images/logo-white.png'
import search_icon_light from '../../assets/images/search-w.png'
import search_icon_dark from '../../assets/images/search-b.png'
import toggle_light from '../../assets/images/night.png'
import toggle_dark from '../../assets/images/day.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo_light} alt="" className='logo' />

        <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Features</li>
            <li>About</li>
        </ul>

        <div className='searchBox'>
            <input type="text" placeholder='Search' />
            <img src={search_icon_light} alt="" />

        </div>

        <img src={toggle_light} alt="" className='toggleIcon' />
      
    </div>
  )
}

export default Navbar
