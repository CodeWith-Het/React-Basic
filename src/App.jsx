import React from 'react'
// import Navbar from './Components/Navbar'
// import Hero from './Components/Hero'
import IntegratingAPI from './API-Call/IntegratingAPI'
import TwoWay from './TwoWayBlindingMiniProject'
import FormHandlingProject from './form-handling-project'
import API from './API-Call/API'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './React Router Dom/Home';
import Product from './React Router Dom/Product';
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
      <About />
      <Contact />
      <Home />
      <Product/>
      <Routing />
    </>
  )
}

export default App