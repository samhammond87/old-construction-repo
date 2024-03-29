import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';

import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from '../components/InfoSection/Data';
import ContactUs from '../components/Contact';
import { Spring } from 'react-spring/renderprops';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 2 }}
        config={{ delay: 9000, duration: 2000 }}
      >
        {(props) => (
          <div style={props}>
            <InfoSection {...homeObjThree} />
          </div>
        )}
      </Spring>
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
