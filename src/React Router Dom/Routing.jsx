import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Routing = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to='/Product'>Product</Link>
    </div>
  )
}

export default Routing