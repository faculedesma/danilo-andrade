import React from 'react';

export const Row = ({ work }) => {
  return (
    <div className={`work-all--${work.type}-list--row`}>
      <div
        className={`work-all--${work.type}-list--row-name`}
      >
        {work.name}
      </div>
      <div
        className={`work-all--${work.type}-list--row-year`}
      >
        {work.year}
      </div>
      <div
        className={`work-all--${work.type}-list--row-more`}
      >
        <div
          className={`work-all--${work.type}-list--row-more-lines`}
        >
          <div></div>
          <div></div>
        </div>
        <div
          className={`work-all--${work.type}-list--row-more-expand`}
        >
          <div
            className={`work-all--${work.type}-list--row-more-expand--part`}
          >
            <b>Part:</b> <p>{work.part.extended}</p>
          </div>
          <div
            className={`work-all--${work.type}-list--row-more-expand--description`}
          >
            <p>{work.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
