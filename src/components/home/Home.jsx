import React, { useEffect, useState } from 'react';
import Header from '@/components/header/Header';
import Hero from '@/components/hero/Hero';
import Work from '@/components/work/Work';
import Footer from '@/components/footer/Footer';
import AboutMe from '@/components/about-me/AboutMe';
import { MouseFollow } from '@/components/mouse-follow/MouseFollow';
import './home.scss';

const Home = ({ isLoading }) => {
  const [windowWidth, setWindowWidth] = useState(
    window.innerWidth
  );

  useEffect(() => {
    window.addEventListener('resize', (e) => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  const isMobile = windowWidth < 720;

  return (
    <div
      id="home"
      className={`home ${!isLoading ? 'home-loaded' : ''}`}
    >
      <Header />
      <Hero />
      <Work />
      <AboutMe />
      <Footer />
      {!isMobile ? <MouseFollow /> : null}
    </div>
  );
};

export default Home;
