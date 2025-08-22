import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import IntegratingAPI from './API-Call/IntegratingAPI'
import TwoWay from './TwoWayBlindingMiniProject'
import FormHandlingProject from './form-handling-project'
import API from './Direct API Call/API'
import Routing from './React Router Dom/Routing';

const App = () => {
  return (
    <>
    <FormHandlingProject/>
    <TwoWay/>
      <Navbar/>
      <Hero/>
      <IntegratingAPI />
      <API />
      <Routing />
    </>
  )
}

export default App