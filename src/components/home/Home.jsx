import React from 'react';
import Header from '@/components/header/Header';
import { Hero } from '@/components/hero/Hero';
import './home.scss';

const Home = () => {
  return (
    <div id="home" className="home">
      <Header />
      <Hero />
    </div>
  );
};

export default Home;
