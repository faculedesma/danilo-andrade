import React, { useEffect, useState } from 'react';
import { PrimaryCTAButton } from '../buttons/PrimaryCTAButton';
import { mainWorks, allWorks } from '@/data/Works';
import { Card } from './Card';
import { Row } from './Row';
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

  const handleViewAll = () => {
    setShowAll(true);
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
            <h2>Movies / TV</h2>
            <div className="work-all--movies">
              {allWorks
                .filter(
                  (work, index) => work.type === 'movies'
                )
                .map((filtered, index) => (
                  <Row work={filtered} />
                ))}
            </div>
            <h2>Theatre</h2>
            <div className="work-all--theatre">
              {allWorks
                .filter(
                  (work, index) => work.type === 'theatre'
                )
                .map((filtered, index) => (
                  <Row work={filtered} />
                ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Work;
