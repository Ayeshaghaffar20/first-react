import React from 'react'
import './style.css'
import logo_light from '../../assets/images/logo-black.png'
import logo_dark from '../../assets/images/logo-white.png'
import search_icon_light from '../../assets/images/search-w.png'
import search_icon_dark from '../../assets/images/search-b.png'
import toggle_light from '../../assets/images/night.png'
import toggle_dark from '../../assets/images/day.png'

import {
BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from '../../pages/Home'
import Products from '../../pages/Products'
import Features from '../../pages/Features'
import About from '../../pages/About'

const Navbar = () => {
  return (
    <Router>
    <div className='CustomNavbar'>
        <img src={logo_light} alt="" className='logo' />


        <ul>
            <Link to="/">Home</Link>
             <Link to="/products">Producs</Link>
              <Link to="/features">Features</Link>
               <Link to="/about">About</Link>
        </ul>

        <div className='searchBox'>
            <input type="text" placeholder='Search' />
            <img src={search_icon_light} alt="" />

        </div>

        <img src={toggle_light} alt="" className='toggleIcon' />

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element={<About />} />
           <Route path="/features" element={<Features />} />
            

          <Route path="/products" element={<Products />} />
          <Route path="/" element={<Home />} />
        </Routes>

        
      
    </div>
    </Router>
  )
}

export default Navbar
