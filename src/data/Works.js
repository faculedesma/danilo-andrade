import OsLadosCover from '@/assets/images/os-lados-cover.png';
import OsLadosGuy from '@/assets/images/os-lados-guy.png';
import OsLadosVideo from '@/assets/videos/os-lados-trailer.mp4';
import OitaVentosCover from '@/assets/images/oita-ventos-cover.png';
import OitaVentosGuy from '@/assets/images/oita-ventos-guy.png';
import OitaVentosVideo from '@/assets/videos/oita-ventos.mp4';

export const works = [
  {
    id: 'work-one',
    title: 'os Lados Da Rua',
    award:
      'Winner of the 22º Cine Ceará for Best ShortFilm',
    description:
      'Carrao (Big Car) is a young boy who, despite his eccentric behavior, lives freely at the pace of life in a typical small Brazilian city. After being caught off-guard by an event that threatens to disrupt his whole world, he will need to find a way to set himself free again.',
    year: '2012',
    images: {
      cover: {
        src: OsLadosCover,
        alt: 'os-lados-da-rua-cover'
      },
      guy: { src: OsLadosGuy, alt: 'os-lados-da-rua-guy' }
    },
    video: {
      id: 'os-lados-video',
      src: OsLadosVideo
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
    year: '2014',
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
    video: {
      id: 'oita-ventos',
      src: OitaVentosVideo
    },
    order: '02'
  },
  {
    id: 'work-three',
    title: 'Nego',
    award:
      'Winner of the 22º Cine Ceará for Best ShortFilm',
    year: '2011',
    description:
      'A thriliing movie about someone who probablymeets someone, outiside or inside. Must see if you like suspense and mystery.',
    images: {
      cover: {
        src: OsLadosCover,
        alt: 'os-lados-da-rua-cover'
      },
      guy: { src: OsLadosGuy, alt: 'os-lados-da-rua-guy' }
    },
    video: {
      id: 'bandidos-video',
      src: OsLadosVideo
    },
    order: '03'
  },
  {
    id: 'work-four',
    title: 'BANDIDOS',
    award:
      'Winner of the 22º Cine Ceará for Best ShortFilm',
    year: '2013',
    description:
      'A thriliing movie about someone who probablymeets someone, outiside or inside. Must see if you like suspense and mystery.',
    images: {
      cover: {
        src: OsLadosCover,
        alt: 'os-lados-da-rua-cover'
      },
      guy: { src: OsLadosGuy, alt: 'os-lados-da-rua-guy' }
    },
    video: {
      id: 'bandidos-video',
      src: OsLadosVideo
    },
    order: '04'
  }
];
