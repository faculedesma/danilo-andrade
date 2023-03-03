import React, { useEffect, useRef } from 'react';
import { useIntersection } from '@/components/common/hooks/useIntersection';
import { allWorks } from '@/data/Works';
import { Row } from './Row';

export const Movies = () => {
  const moviesRef = useRef();

  const isInViewport = useIntersection(moviesRef, '150px');

  useEffect(() => {
    if (isInViewport) {
      moviesRef.current.classList.add('show-movies');
    }
  }, [isInViewport]);

  return (
    <div ref={moviesRef} className="work-all--movies">
      <div className="work-all--movies-title">
        <h2>Movies / TV</h2>
      </div>
      <div className="work-all--movies-list">
        {allWorks
          .filter((work, index) => work.type === 'movies')
          .map((filtered, index) => (
            <Row work={filtered} />
          ))}
      </div>
    </div>
  );
};
