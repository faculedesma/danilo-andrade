import React, {
  useState,
  useEffect,
  useRef,
  useCallback
} from 'react';
import Home from '@/components/home/Home';
import Loader from '@/components/loader/Loader';
import { MouseFollow } from '@/components/mouse-follow/MouseFollow';
import gsap from 'gsap';
import './app.scss';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const mounted = useRef(false);
  const appRef = useRef(null);

  const handleIsLoaded = () => setIsLoading(false);

  const followCallback = useCallback((e, mouseFollow) => {
    gsap.to(mouseFollow, {
      duration: 0.5,
      overwrite: 'auto',
      x: e.clientX,
      y: e.clientY,
      stagger: 0.15,
      ease: 'none'
    });

    let tl = gsap.timeline({
      defaults: { duration: 0.5, ease: 'none' }
    });
    tl.to(mouseFollow, {
      scale: 1,
      overwrite: 'auto',
      stagger: {
        amount: 0.15,
        from: 'start',
        ease: 'none'
      }
    });
    // tl.to(
    //   mouseFollow,
    //   {
    //     overwrite: 'auto',
    //     scale: 0,
    //     stagger: {
    //       amount: 0.15,
    //       from: 'end',
    //       ease: 'none'
    //     }
    //   },
    //   '<+=2.5'
    // );
  }, []);

  useEffect(() => {
    const mouseFollow =
      document.getElementById('mouse-follow');
    gsap.set(mouseFollow, {
      xPercent: -50,
      yPercent: -50,
      scale: 0
    });

    window.addEventListener('mousemove', (e) =>
      followCallback(e, mouseFollow)
    );
    window.addEventListener('scroll', (e) =>
      followCallback(e, mouseFollow)
    );
  }),
    [];

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

  return (
    <div id="app" ref={appRef} className="app">
      <Home isLoading={isLoading} />
      <Loader
        isLoading={isLoading}
        percentage={percentage}
      />
      <MouseFollow />
    </div>
  );
};

export default App;
