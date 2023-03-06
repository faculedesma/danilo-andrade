import { useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';

export const useMouseFollow = (
  id,
  delay = 0.15,
  duration = 0.5
) => {
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
          duration: duration,
          overwrite: 'auto',
          x: e.clientX,
          y: e.clientY,
          stagger: delay,
          ease: 'none'
        });

        let tl = gsap.timeline({
          defaults: { duration: duration, ease: 'none' }
        });
        tl.to(mouseFollow, {
          scale: 1,
          overwrite: 'auto',
          stagger: {
            amount: delay,
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
