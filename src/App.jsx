import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Hero from './components/Hero/Hero.jsx';
import Home from './components/Home/Home.jsx';
import Thirdp from './components/Thirdp/Thirdp.jsx';
import Page4 from './components/Page4/Page4.jsx';
import About from './components/About/About.jsx';
import WaitlistPage from './components/WaitList/WaitlistPage.jsx';

// Layout component to conditionally show Navbar and Footer
const Layout = ({ children }) => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/waitlist';

  return (
    <>
      {!hideHeaderFooter && <Navbar />}

      <main className="flex-grow">{children}</main>

      {!hideHeaderFooter && (
        <div id="contact">
          <Footer />
        </div>
      )}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Route for homepage */}
          <Route
            path="/"
            element={
              <>
                <div id="home">
                  <Home />
                </div>
                <div id="about">
                  <About />
                </div>
                <div id="features">
                  <Thirdp />
                </div>
                {/* <Page4 /> */}
                <div>
                  <Hero />
                </div>
              </>
            }
          />

          {/* Route for waitlist page */}
          <Route path="/waitlist" element={<WaitlistPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
