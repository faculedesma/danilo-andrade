import React from 'react';
import Header from '@/components/header/Header';
import { Hero } from '@/components/hero/Hero';
import './home.scss';

const Home = ({ isLoading }) => {
  return (
    <div
      id="home"
      className={`home ${!isLoading ? 'home-loaded' : ''}`}
    >
      <Header />
      <Hero />
    </div>
  );
};

export default Home;
