import React, { useEffect, useRef } from 'react';
import { useIntersection } from '@/components/common/hooks/useIntersection';
import { allWorks } from '@/data/Works';
import { Row } from './Row';

export const Theatre = () => {
  const theatreRef = useRef();

  const isInViewport = useIntersection(theatreRef, '150px');

  useEffect(() => {
    if (isInViewport) {
      theatreRef.current.classList.add('show-theatre');
    }
  }, [isInViewport]);

  return (
    <div ref={theatreRef} className="work-all--theatre">
      <div className="work-all--theatre-title">
        <h2>Theatre</h2>
      </div>
      <div className="work-all--theatre-list">
        {allWorks
          .filter((work, index) => work.type === 'theatre')
          .map((filtered, index) => (
            <Row work={filtered} />
          ))}
      </div>
    </div>
  );
};
