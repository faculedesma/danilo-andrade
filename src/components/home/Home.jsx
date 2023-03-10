import React from 'react';
import Header from '@/components/header/Header';
import Hero from '@/components/hero/Hero';
import Work from '@/components/work/Work';
import Footer from '@/components/footer/Footer';
import AboutMe from '@/components/about-me/AboutMe';
import Studies from '@/components/studies/Studies';
import './home.scss';

const Home = ({ isLoading }) => {
  return (
    <div
      id="home"
      className={`home ${!isLoading ? 'home-loaded' : ''}`}
    >
      <Header />
      <Hero />
      <Work />
      <Studies />
      <AboutMe />
      <Footer />
    </div>
  );
};

export default Home;
