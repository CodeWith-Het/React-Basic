import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './header.css'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Product from './Product'

const Routing = () => {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to='/Product'>Product</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Product" element={<Product />} />
      </Routes>
    </Router>
  )
}

export default Routing