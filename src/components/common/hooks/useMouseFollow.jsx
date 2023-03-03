import { useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';

export const useMouseFollow = (id) => {
  const mounted = useRef(null);

  const handleFollowMouseMove = useCallback(
    (e) => {
      const mouseFollow = document.getElementById(id);
      if (mouseFollow) {
        gsap.set(mouseFollow, {
          xPercent: -50,
          yPercent: -50,
          scale: 0
        });
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
      }
    },
    [id]
  );

  useEffect(() => {
    mounted.current = true;

    if (mounted.current) {
      window.addEventListener('mousemove', (e) =>
        handleFollowMouseMove(e)
      );
      window.addEventListener('scroll', (e) =>
        handleFollowMouseMove(e)
      );
    }

    return () => {
      mounted.current = false;
      window.removeEventListener(
        'mousemove',
        handleFollowMouseMove
      );
      window.removeEventListener(
        'scroll',
        handleFollowMouseMove
      );
    };
  }, [id]);
};
