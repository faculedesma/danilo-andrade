import React, { useState, useEffect, useRef } from 'react';
import Home from '@/components/home/Home';
import Loader from '@/components/loader/Loader';
import { useMouseFollow } from '@/components/common/hooks/useMouseFollow';
import './app.scss';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [percentage, setPercentage] = useState(0);

  const mounted = useRef(false);
  const appRef = useRef(null);

  useMouseFollow('mouse-follow');

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

  return (
    <div id="app" ref={appRef} className="app">
      <Home isLoading={isLoading} />
      <Loader
        isLoading={isLoading}
        percentage={percentage}
      />
    </div>
  );
};

export default App;
