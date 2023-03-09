import React, { useEffect } from 'react';
import './loader.scss';

const preventScroll = (e) => {
  e.preventDefault();
  e.stopPropagation();
  return false;
};

const Loader = ({ isLoading, percentage }) => {
  useEffect(() => {
    window.addEventListener('wheel', preventScroll, {
      passive: false
    });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      window.removeEventListener('wheel', preventScroll);
    }
  }, [isLoading]);

  return (
    <div
      className={`loader ${
        isLoading ? 'loader-show' : 'loader-hide'
      }`}
    >
      <div className="loader-left">
        <p>Here</p>
      </div>
      <div className="loader-center">
        <div className="loader-center--circle">
          <div className="loader-center--circle-inside">
            <p>&</p>
          </div>
        </div>
      </div>
      <div className="loader-right">
        <p>Now</p>
      </div>
    </div>
  );
};

export default Loader;
