import React, { useState, useEffect, useRef } from 'react';
import Home from '@/components/home/Home';
import Loader from '@/components/loader/Loader';
import { MouseFollow } from '@/components/mouse-follow/MouseFollow';
import { useMouseFollow } from '@/components/common/hooks/useMouseFollow';
import './app.scss';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    window.innerWidth
  );

  const mounted = useRef(false);
  const appRef = useRef(null);

  useMouseFollow('mouse-follow-border');
  useMouseFollow('mouse-follow-point', 0, 0);

  useEffect(() => {
    window.addEventListener('resize', (e) => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    mounted.current = true;

    setInterval(() => {
      const random = Math.floor(Math.random() * 10) + 1;
      setPercentage((prevPercentage) =>
        random + prevPercentage > 100
          ? 100
          : prevPercentage + random
      );
    }, 200);

    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (percentage >= 100) {
      handleIsLoaded();
    }
  }, [percentage]);

  const handleIsLoaded = () => setIsLoading(false);

  const isMobile = windowWidth < 720;

  return (
    <div id="app" ref={appRef} className="app">
      <Home isLoading={isLoading} />
      <Loader
        isLoading={isLoading}
        percentage={percentage}
      />
      {!isMobile ? <MouseFollow /> : null}
    </div>
  );
};

export default App;
