import React, { useEffect, useRef, useState } from 'react';
import { Languages } from './Languages';
import './studies.scss';

const years = [
  '2023',
  '2022',
  '2021',
  '2020',
  '2019',
  '2018',
  '2016',
  '2013',
  '2012',
  '2011',
  '2010',
  '2009',
  '2008'
];

const studies = [
  {
    id: 'studie-one',
    name: 'Roth Coaching  Introduction to the technique and role preparation (Samira Calder)',
    place: 'Berlin',
    year: ['2022']
  },
  {
    id: 'studie-two',
    name: 'Get in a Flow  - Meisner Technique classes (Peter Geisberg)',
    place: 'Berlin',
    year: ['2020', '2023']
  },
  {
    id: 'studie-three',
    name: 'On Camera Acting level 1 & 2  with Eric Reis (Schott Acting Studio)',
    place: 'Berlin',
    year: ['2020', '2021']
  },
  {
    id: 'studie-four',
    name: 'Meisner Technique Course (Momentum Acting Studio)',
    place: 'Dublin',
    year: ['2019']
  },
  {
    id: 'studie-five',
    name: 'David Scott Actors - Wednesdays Scene & Monologues Workshop',
    place: 'Dublin',
    year: ['2018']
  },
  {
    id: 'studie-six',
    name: 'Acting for Camera (Gaiety School of Acting )',
    place: 'Dublin',
    year: ['2016']
  },
  {
    id: 'studie-seven',
    name: 'Acting and Directing for cinema, Theater and TV (Latin American Film Institute)',
    place: 'São Paulo',
    year: ['2010', '2011', '2012', '2013']
  },
  {
    id: 'studie-eigth',
    name: '1st International Fest Stanislavsky (Institute of Dramatic Arts)',
    place: 'São Paulo',
    year: ['2012']
  },
  {
    id: 'studie-nine',
    name: 'Workshop “The Actor’s Key” (Natalia Lazarus)',
    place: 'São Paulo',
    year: ['2011']
  },
  {
    id: 'studie-ten',
    name: 'Professional Acting Course (Braapa Produções Artísticas)',
    place: 'São Paulo',
    year: ['2008', '2009', '2010']
  },
  {
    id: 'studie-eleven',
    name: 'Communication Studies Radio and TV (Universidade São Judas Tadeu)',
    place: 'São Paulo',
    year: ['2008']
  }
];

const Studies = () => {
  const [selected, setSelected] = useState('');
  const [filtered, setFiltered] = useState([]);

  const listRef = useRef();

  useEffect(() => {
    const filteredStudies = filterByYears('2023');
    setFiltered(filteredStudies);
    setSelected('2023');
  }, []);

  const filterByYears = (activeYear) => {
    const filteredStudies = studies.filter((studie) => {
      return studie.year.includes(activeYear);
    });
    return filteredStudies;
  };

  const handleClickYear = (year) => {
    listRef.current.classList.remove('show-list');
    listRef.current.classList.add('hide-list');
    setSelected(year);
    setTimeout(() => {
      listRef.current.classList.remove('hide-list');
      setFiltered(filterByYears(year));
      listRef.current.classList.add('show-list');
    }, 200);
  };

  return (
    <div className="container">
      <div className="studies">
        <div className="studies-title">
          <h2>Studies</h2>
        </div>
        <div className="studies-filters">
          {years.map((year) => {
            return (
              <div
                key={year}
                onClick={() => handleClickYear(year)}
                className={`studies-filters--item ${
                  selected === year ? 'active' : ''
                }`}
              >
                <p>{year}</p>
              </div>
            );
          })}
        </div>
        <div ref={listRef} className="studies-list">
          {filtered.map((studie) => {
            return (
              <div
                key={studie.id}
                className="studies-list--row"
              >
                <div className="studies-list--row-name">
                  <p>{studie.name}</p>
                </div>
                <div className="studies-list--row-place">
                  <div className="studies-list--row-place--circle"></div>
                  <div className="studies-list--row-place--text">
                    <p>{studie.place}</p>
                  </div>
                  <div className="studies-list--row-place--circle"></div>
                </div>
              </div>
            );
          })}
        </div>
        <Languages />
      </div>
    </div>
  );
};

export default Studies;
