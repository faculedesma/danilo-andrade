import React from 'react';
import Header from '@/components/header/Header';
import Hero from '@/components/hero/Hero';
import Work from '@/components/work/Work';
import Footer from '@/components/footer/Footer';
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
      <Footer />
    </div>
  );
};

export default Home;
