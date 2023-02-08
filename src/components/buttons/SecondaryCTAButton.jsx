import React from 'react';
import { Arrow } from '@/assets/svgs/Arrow';
import './buttons.scss';

export const SecondaryCTAButton = ({
  label = 'Button',
  onClick = undefined
}) => {
  return (
    <button
      className="button button-cta--secondary"
      onClick={onClick}
    >
      {label}
      <Arrow />
    </button>
  );
};
