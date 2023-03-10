import React from 'react';
import { StarEmpty } from '@/assets/svgs/StarEmpty';
import { StarFilled } from '@/assets/svgs/StarFilled';

const languages = [
  {
    id: 'one',
    name: 'Portuguese',
    stars: {
      fill: 5,
      empty: 0
    }
  },
  {
    id: 'two',
    name: 'English',
    stars: {
      fill: 4,
      empty: 1
    }
  },
  {
    id: 'three',
    name: 'Spanish',
    stars: {
      fill: 4,
      empty: 1
    }
  },
  {
    id: 'four',
    name: 'French',
    stars: {
      fill: 3,
      empty: 2
    }
  },
  {
    id: 'five',
    name: 'German',
    stars: {
      fill: 2,
      empty: 3
    }
  }
];

export const Languages = () => {
  return (
    <div className="studies-languages">
      <div className="studies-languages--title">
        <h2>Languages</h2>
      </div>
      <div className="studies-languages--list">
        {languages.map((language) => {
          return (
            <div className="studies-languages--list-row">
              <div className="studies-languages--list-row-stars">
                {Array(language.stars.empty)
                  .fill(null)
                  .map((star) => {
                    return <StarEmpty />;
                  })}
                {Array(language.stars.fill)
                  .fill(null)
                  .map((star) => {
                    return <StarFilled />;
                  })}
              </div>
              <div className="studies-languages--list-row-name">
                <p>{language.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
