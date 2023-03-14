import React, { useEffect, useRef } from 'react';
import './tooltip.scss';

export const Tooltip = ({ open, close, content }) => {
  const tooltipRef = useRef();

  useEffect(() => {
    if (tooltipRef.current && open) {
      tooltipRef.current.classList.remove('hide-tooltip');
      tooltipRef.current.classList.add('show-tooltip');
      setTimeout(() => {
        if (
          tooltipRef.current.classList.contains(
            'show-tooltip'
          )
        ) {
          tooltipRef.current.classList.remove(
            'show-tooltip'
          );
          tooltipRef.current.classList.add('hide-tooltip');
          close();
        }
      }, 2500);
    }
  }, [open]);

  return (
    <div ref={tooltipRef} className="tooltip">
      <p>{content}</p>
    </div>
  );
};
