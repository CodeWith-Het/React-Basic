import React, { useContext } from 'react'
import UserContext, { DataContext } from './Context API/UserContext'
// import FormHandlingProject from './form-handling-project'
// import TwoWay from './TwoWayBlindingMiniProject'
// import Navbar from './Components/Navbar'
// import Hero from './Components/Hero'
// import IntegratingAPI from './API-Call/IntegratingAPI'
// import API from './Direct API Call/API'
// import Routing from './React Router Dom/Routing';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Section from './Components/Section';

const App = () => {

  const data = useContext(DataContext)
  console.log(data);

  return (
    <>
      {/* <FormHandlingProject/>
      <TwoWay/>
      <Navbar/>
      <Hero/>
      <IntegratingAPI />
      <API />
      <Routing /> */}

      <div>
      <h1>Hello {data.name}</h1>
      <h2>Age: {data.age}</h2>
      <Header />
      <Footer />
      <Section />
      </div>
    </>
  )
}

export default App
