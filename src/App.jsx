import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Hero from './components/Hero/Hero.jsx';
import Home from './components/Home/Home.jsx';
import Thirdp from './components/Thirdp/Thirdp.jsx';
import Page4 from './components/Page4/Page4.jsx';
import About from './components/About/About.jsx';
import WaitlistPage from './components/WaitList/WaitlistPage.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />

      <main className="flex-grow">
        <Routes>
          {/* Route for homepage */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Thirdp />
                <Page4 />
                <Hero />
              </>
            }
          />

          {/* Route for waitlist page */}
          <Route path="/waitlist" element={<WaitlistPage />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
