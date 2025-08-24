import React, { useContext } from 'react'
// import { createContext } from 'react'
import { DataContext } from '../Context API/UserContext'

const Footer = () => {
  const data = useContext(DataContext)
  return (
    <div>Hello I am Footer {data.name} and I am {data.age} years old</div>
  )
}

export default Footer