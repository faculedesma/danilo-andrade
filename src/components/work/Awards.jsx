import React, { useEffect, useState, useRef } from 'react';
import { useIntersection } from '@/components/common/hooks/useIntersection';

const Awards = ({ awards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const awardRef = useRef();
  const awardsSize = awards.length;

  const isAwardOnViewport = useIntersection(
    awardRef,
    '0px'
  );

  useEffect(() => {
    if (awardsSize > 1 && isAwardOnViewport) {
      const interval = setInterval(() => {
        awardRef.current.classList.add('hide-award');
        awardRef.current.classList.remove('show-award');
        setTimeout(() => {
          if (currentIndex === awardsSize - 1) {
            setCurrentIndex(0);
          } else {
            setCurrentIndex((prevIndex) => prevIndex + 1);
          }
          awardRef.current.classList.add('show-award');
          awardRef.current.classList.remove('hide-award');
        }, 500);
      }, 3200);

      return () => clearInterval(interval);
    }
  }, [currentIndex, isAwardOnViewport]);

  return <p ref={awardRef}>{awards[currentIndex]}</p>;
};

export default Awards;
