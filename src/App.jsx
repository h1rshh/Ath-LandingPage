import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Hero from './components/Hero/Hero.jsx';
import Home from './components/Home/Home.jsx';
import Thirdp from './components/Thirdp/Thirdp.jsx';
import Page4 from './components/Page4/Page4.jsx';
import About from './components/About/About.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Thirdp />
      <Page4 />
      <Hero />
      <Footer />

    </>
  )
}

export default App