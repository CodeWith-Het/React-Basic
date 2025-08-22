import React from 'react'
import FormHandlingProject from './form-handling-project'
import TwoWay from './TwoWayBlindingMiniProject'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import IntegratingAPI from './API-Call/IntegratingAPI'

const App = () => {
  return (
    <>
    <FormHandlingProject/>
    <TwoWay/>
      <Navbar/>
      <Hero/>
      <IntegratingAPI />
    </>
  )
}

export default App
