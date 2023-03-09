import React, { useState, useEffect, useRef } from 'react';
import Home from '@/components/home/Home';
import Loader from '@/components/loader/Loader';
import { MouseFollow } from '@/components/mouse-follow/MouseFollow';
import { useMouseFollow } from '@/components/common/hooks/useMouseFollow';
import './app.scss';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [percentage, setPercentage] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    window.innerWidth
  );

  const mounted = useRef(false);
  const appRef = useRef(null);

  useMouseFollow('mouse-follow-border');
  useMouseFollow('mouse-follow-point', 0, 0);

  const handleStartPercentege = () => {
    setInterval(() => {
      const random = Math.floor(Math.random() * 10) + 1;
      setPercentage((prevPercentage) =>
        random + prevPercentage > 80
          ? 80
          : prevPercentage + random
      );
    }, 100);
  };

  const updateWindowWidth = () =>
    setWindowWidth(window.innerWidth);

  const handleIsLoaded = () => {
    setPercentage(100);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    mounted.current = true;
    handleStartPercentege();
    window.addEventListener('resize', updateWindowWidth);
    window.addEventListener('load', handleIsLoaded);

    return () => {
      window.removeEventListener(
        'resize',
        updateWindowWidth
      );
      window.removeEventListener('load', handleIsLoaded);
      mounted.current = false;
    };
  }, []);

  // useEffect(() => {
  //   if (!isLoading) {
  //     setPercentage(100);
  //   }
  // }, [isLoading]);

  const isMobile = windowWidth < 720;

  return (
    <div id="app" ref={appRef} className="app">
      <Home isLoading={isLoading} />
      <Loader
        isLoading={isLoading && percentage === 100}
        percentage={percentage}
      />
      {!isMobile ? <MouseFollow /> : null}
    </div>
  );
};

export default App;
