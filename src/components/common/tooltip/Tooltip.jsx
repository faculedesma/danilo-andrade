import React from 'react';
import './tooltip.scss';

export const Tooltip = ({ tooltipRef, content }) => {
  return (
    <div ref={tooltipRef} className="tooltip">
      <p>{content}</p>
    </div>
  );
};
