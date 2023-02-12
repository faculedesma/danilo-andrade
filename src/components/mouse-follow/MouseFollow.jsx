import React from 'react';
import './mouse-follow.scss';

export const MouseFollow = () => {
  return (
    <div
      id="mouse-follow"
      className={`mouse-follow${false ? '--video' : ''}`}
    >
      <div className="mouse-follow--play"></div>
    </div>
  );
};
