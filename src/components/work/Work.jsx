import React from 'react';
import { Card } from './Card';
import { LineHorizontal } from '@/components/common/Seperators';
import OsLadosCover from '@/assets/images/os-lados-cover.png';
import OsLadosGuy from '@/assets/images/os-lados-guy.png';
import OitaVentosCover from '@/assets/images/oita-ventos-cover.png';
import OitaVentosGuy from '@/assets/images/oita-ventos-guy.png';
import './work.scss';

const works = [
  {
    id: 'work-one',
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
    id: 'work-two',
    title: 'Oita Ventos',
    award:
      'Winner of the 22º Cine Ceará for Best ShortFilm',
    description:
      'A thriliing movie about someone who probablymeets someone, outiside or inside. Must see if you like suspense and mystery.',
    images: {
      cover: {
        src: OitaVentosCover,
        alt: 'oita-ventos-cover'
      },
      guy: {
        src: OitaVentosGuy,
        alt: 'oita-ventos-guy'
      }
    },
    order: '02'
  },
  {
    id: 'work-three',
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
            return <Card key={work.id} work={work} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
