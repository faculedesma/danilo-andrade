import React, { useEffect, useState } from 'react';
import { PrimaryCTAButton } from '../buttons/PrimaryCTAButton';
import { mainWorks } from '@/data/Works';
import { Theatre } from './Theatre';
import { Movies } from './Movies';
import { Card } from './Card';
import './work.scss';

const Work = () => {
  const [selected, setSelected] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const showMoreButton =
    selected.length !== mainWorks.length;

  useEffect(() => {
    const promoted = mainWorks.filter(
      (work, index) => index <= 2
    );
    setSelected(promoted);
  }, []);

  const handleViewMore = () => {
    const updated = mainWorks.filter(
      (work, index) => index <= selected.length + 2
    );
    setSelected(updated);
  };

  const handleViewAll = () => setShowAll(true);

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
        {!showMoreButton && !showAll ? (
          <div className="work-more">
            <div className="work-more--line"></div>
            <PrimaryCTAButton
              label="view all"
              onClick={handleViewAll}
            />
          </div>
        ) : null}
        {showAll ? (
          <div className="work-all">
            <Movies />
            <Theatre />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Work;
