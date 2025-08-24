import React, { useContext } from 'react'
// import { createContext } from 'react'
import { DataContext } from '../Context API/UserContext'

const Header = () => {
  const data = useContext(DataContext)
  return (
    <div>Hello I am Header {data.name}</div>
  )
}

export default Header