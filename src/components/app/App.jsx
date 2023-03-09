import React, { useState, useEffect, useRef } from 'react';
import Home from '@/components/home/Home';
import Loader from '@/components/loader/Loader';
import { MouseFollow } from '@/components/mouse-follow/MouseFollow';
import { useMouseFollow } from '@/components/common/hooks/useMouseFollow';
import './app.scss';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const mounted = useRef(false);
  const appRef = useRef(null);

  useMouseFollow('mouse-follow-border');
  useMouseFollow('mouse-follow-point', 0, 0);

  const handleIsLoaded = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    mounted.current = true;
    window.addEventListener('load', handleIsLoaded);

    return () => {
      window.removeEventListener('load', handleIsLoaded);
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    // for mobile
    if (document.readyState === 'complete') {
      handleIsLoaded();
    }
  }, [document.readyState]);

  return (
    <div id="app" ref={appRef} className="app">
      <Home isLoading={isLoading} />
      <Loader isLoading={isLoading} />
      <MouseFollow />
    </div>
  );
};

export default App;
