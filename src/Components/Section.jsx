import React, { useContext } from 'react'
// import { createContext } from 'react'
import { DataContext } from '../Context API/UserContext'

const Section = () => {
  const data = useContext(DataContext)
  return (
    <div>hello I am Section {data.name} from {data.city}</div>
  )
}

export default Section