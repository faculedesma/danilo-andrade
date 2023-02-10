import React from 'react';
import { Card } from './Card';
import { LineHorizontal } from '@/components/common/Seperators';
import OsLadosCover from '@/assets/images/os-lados-cover.png';
import OsLadosGuy from '@/assets/images/os-lados-guy.png';
import './work.scss';

const works = [
  {
    id: 'os-lados-da-rua',
    title: 'os Lados Da Rua',
    award:
      'Winner of the 22º Cine Ceará for Best ShortFilm',
    description:
      'A thriliing movie about someone who probablymeets someone, outiside or inside. Must see if you like suspense and mystery.',
    images: {
      cover: {
        src: OsLadosCover,
        alt: 'os-lados-da-rua-cover'
      },
      guy: { src: OsLadosGuy, alt: 'os-lados-da-rua-guy' }
    },
    order: '01'
  },
  {
    id: 'os-lados-da-rua',
    title: 'os Lados Da Rua',
    award:
      'Winner of the 22º Cine Ceará for Best ShortFilm',
    description:
      'A thriliing movie about someone who probablymeets someone, outiside or inside. Must see if you like suspense and mystery.',
    images: {
      cover: {
        src: OsLadosCover,
        alt: 'os-lados-da-rua-cover'
      },
      guy: { src: OsLadosGuy, alt: 'os-lados-da-rua-guy' }
    },
    order: '02'
  },
  {
    id: 'os-lados-da-rua',
    title: 'os Lados Da Rua',
    award:
      'Winner of the 22º Cine Ceará for Best ShortFilm',
    description:
      'A thriliing movie about someone who probablymeets someone, outiside or inside. Must see if you like suspense and mystery.',
    images: {
      cover: {
        src: OsLadosCover,
        alt: 'os-lados-da-rua-cover'
      },
      guy: { src: OsLadosGuy, alt: 'os-lados-da-rua-guy' }
    },
    order: '03'
  }
];

const Work = () => {
  return (
    <div id="work" className="container">
      <LineHorizontal />
      <div className="work">
        <div className="work-title">
          <h1>Work</h1>
          <div className="work-title--underline"></div>
        </div>
        <div className="work-cards">
          {works.map((work) => {
            return <Card work={work} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
