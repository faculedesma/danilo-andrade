import React from 'react';
import { Arrow } from '@/assets/svgs/Arrow';
import './buttons.scss';

export const PrimaryCTAButton = ({
  label = 'Button',
  onClick = undefined
}) => {
  return (
    <button
      className="button button-cta--primary"
      onClick={onClick}
    >
      <div className="round-container">
        <label>{label}</label>
        <Arrow />
      </div>
    </button>
  );
};
