import React from 'react';
import './work.scss';

export const Card = ({ work }) => {
  return (
    <div id={work.id} className="work-card show-card">
      <div className="work-card--left">
        <div className="work-card--left-top">
          <h1>{work.title}</h1>
          <p className="work-card--left-top--award">
            {work.award}
          </p>
          <div className="work-card--left-top--underline"></div>
        </div>
        <p className="work-card--left-description">
          {work.description}
        </p>
      </div>
      <div className="work-card--right">
        <div className="work-card--right-cover">
          <img
            src={work.images.cover.src}
            alt={work.images.cover.alt}
          />
        </div>
        <div className="work-card--right-guy">
          <img
            src={work.images.guy.src}
            alt={work.images.guy.alt}
          />
          <div className="work-card--right-order">
            <h1>{work.order}</h1>
          </div>
        </div>
      </div>
      <div className="work-card--separator"></div>
    </div>
  );
};
