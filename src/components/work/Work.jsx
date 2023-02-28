import React, { useEffect, useState } from 'react';
import { Card } from './Card';
import { PrimaryCTAButton } from '../buttons/PrimaryCTAButton';
import { works } from '@/data/Works';
import './work.scss';

const Work = () => {
  const [selected, setSelected] = useState([]);

  const showMoreButton = selected.length !== works.length;

  useEffect(() => {
    const promoted = works.filter(
      (work, index) => index <= 2
    );
    setSelected(promoted);
  }, []);

  const handleViewMore = () => {
    const updated = works.filter(
      (work, index) => index <= selected.length + 2
    );
    setSelected(updated);
  };

  useEffect(() => {
    window.scrollBy({
      top: 200,
      left: 0,
      behavior: 'smooth'
    });
  }, [selected.length]);

  return (
    <div id="work" className="container">
      <div className="work">
        <div className="work-title">
          <h2>Work</h2>
        </div>
        <div className="work-cards">
          {selected.map((work) => {
            return <Card key={work.id} work={work} />;
          })}
        </div>
        {showMoreButton ? (
          <div className="work-more">
            <div className="work-more--line"></div>
            <PrimaryCTAButton
              label="view more"
              onClick={handleViewMore}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Work;
