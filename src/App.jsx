import React from 'react'
// import Navbar from './Components/Navbar'
// import Hero from './Components/Hero'
import IntegratingAPI from './API-Call/IntegratingAPI'
import TwoWay from './TwoWayBlindingMiniProject'
import FormHandlingProject from './form-handling-project'

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