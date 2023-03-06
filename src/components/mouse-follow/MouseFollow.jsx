import React from 'react';
import './mouse-follow.scss';

export const MouseFollow = () => {
  return (
    <>
      <div
        id="mouse-follow-border"
        className="mouse-follow--border"
      ></div>
      <div
        id="mouse-follow-point"
        className="mouse-follow--point"
      ></div>
    </>
  );
};
