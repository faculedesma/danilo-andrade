import React from 'react';

export const Row = ({ work }) => {
  return (
    <div
      key={`${work.id}-row`}
      className={`work-all--${work.type}-row`}
    >
      <div className={`work-all--${work.type}-row--name`}>
        {work.name}
      </div>
      <div className={`work-all--${work.type}-row--year`}>
        {work.year}
      </div>
      <div className={`work-all--${work.type}-row--more`}>
        <div
          className={`work-all--${work.type}-row--more-lines`}
        >
          <div></div>
          <div></div>
        </div>
        <div
          className={`work-all--${work.type}-row--more-expand`}
        >
          <div
            className={`work-all--${work.type}-row--more-expand--part`}
          >
            <b>Part:</b> <p>{work.part.extended}</p>
          </div>
          <div
            className={`work-all--${work.type}-row--more-expand--description`}
          >
            <p>{work.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
