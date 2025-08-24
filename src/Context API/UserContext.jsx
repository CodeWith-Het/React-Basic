import React from 'react'
import './style.css'
import { createContext } from 'react'

export const DataContext = createContext()

const UserContext = ({children}) => {

  const obj = {
    name:'Patel het',
    age:21,
    city:"Mahesana"
  }

  return (
    <div className='text-white'>
        <DataContext.Provider value={obj}>
          {children}
        </DataContext.Provider>
    </div>
  )
}

export default UserContext