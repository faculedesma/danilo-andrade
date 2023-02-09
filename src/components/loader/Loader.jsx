import React from 'react';
import './loader.scss';

const Loader = ({ isLoading, percentage }) => {
  return (
    <div
      className={`loader ${
        isLoading ? 'loader-show' : 'loader-hide'
      }`}
    >
      <div className="loader-text">
        <p>Here</p>
        <div className="loader-text--circle">
          <div className="loader-text--circle-inside">
            <p>&</p>
          </div>
        </div>
        <p>Now</p>
      </div>
      <div className="loader-percentage">
        <p>{percentage}%</p>
      </div>
    </div>
  );
};

export default Loader;
