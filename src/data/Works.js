import OsLadosCover from '@/assets/images/os-lados-cover.png';
import OsLadosGuy from '@/assets/images/os-lados-guy.png';
import OsLadosVideo from '@/assets/videos/os-lados-trailer.mp4';
import OitaVentosCover from '@/assets/images/oita-ventos-cover.png';
import OitaVentosGuy from '@/assets/images/oita-ventos-guy.png';
import OitaVentosVideo from '@/assets/videos/oita-ventos.mp4';

export const mainWorks = [
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

export const allWorks = [
  {
    id: 'margeado',
    name: 'Margeado',
    type: 'movies',
    part: {
      main: 'Actor',
      extended: 'Main role, playing as the son mother.'
    },
    description:
      'This is a movie about something that happened with someone in some place in space and time is always relevant you know, but what can we do? Nothing or everything. Live free.',
    year: '2023',
    awards: null
  },
  {
    id: 'oito-ventos',
    name: 'Oito Ventos',
    type: 'movies',
    part: {
      main: 'Actor',
      extended: `Playing Aliado Jota, the mother's son.`
    },
    description:
      'This is a movie about something that happened with someone in some place in space and time is always relevant you know, but what can we do? Nothing or everything. Live free.',
    year: '2014',
    awards: null
  },
  {
    id: 'ceia-da-arvore',
    name: 'Ceia da Árvore',
    type: 'movies',
    part: {
      main: 'Actor',
      extended: `Playing 'Guy'.`
    },
    description:
      'This is a movie about something that happened with someone in some place in space and time is always relevant you know, but what can we do? Nothing or everything. Live free.',
    year: '2013',
    awards: null
  },
  {
    id: 'nego',
    name: 'Nego',
    type: 'movies',
    part: {
      main: 'Actor',
      extended: 'Playing the policeman role.'
    },
    description:
      'This is a movie about something that happened with someone in some place in space and time is always relevant you know, but what can we do? Nothing or everything. Live free.',
    year: '2013',
    awards: [
      'Best  Movie 7º Fest Aruanda/PB 2011',
      'Best Movie 1º Festival de Cinema de Sta Cruz do Sul'
    ]
  },
  {
    id: 'os-lados-da-rua',
    name: 'Os Lados Da Rua',
    type: 'movies',
    part: {
      main: 'Actor',
      extended:
        'Playing Carrão, the main character of the film.'
    },
    description:
      'This is a movie about something that happened with someone in some place in space and time is always relevant you know, but what can we do? Nothing or everything. Live free.',
    year: '2012',
    awards: ['Best movie 22º Cine Ceará']
  },

  {
    id: 'inspiracao',
    name: '(Ins)piração',
    type: 'movies',
    part: {
      main: 'Writter',
      extended: 'Writter of the movie script.'
    },
    description:
      'This is a movie about something that happened with someone in some place in space and time is always relevant you know, but what can we do? Nothing or everything. Live free.',
    year: '2011',
    awards: [
      'Best National Micro Film Festival 5th ArtDeco de Cinema/SP 2012'
    ]
  },
  {
    id: 'bandidos',
    name: 'Bandidos',
    type: 'movies',
    part: {
      main: 'Actor',
      extended: 'Playing “Zóio” character.'
    },
    description:
      'This is a movie about something that happened with someone in some place in space and time is always relevant you know, but what can we do? Nothing or everything. Live free.',
    year: '2010',
    awards: null
  },
  {
    id: 'putanesca',
    name: 'A Putanesca',
    type: 'movies',
    part: {
      main: 'Actor',
      extended: 'Playing “Gustavo” character.'
    },
    description:
      'This is a movie about something that happened with someone in some place in space and time is always relevant you know, but what can we do? Nothing or everything. Live free.',
    year: '2010',
    awards: null
  },
  {
    id: 'a-prova-de-ko',
    name: 'A Prova de K O',
    type: 'movies',
    part: {
      main: 'Actor',
      extended: 'Playing “Gilberto” character.'
    },
    description:
      'This is a movie about something that happened with someone in some place in space and time is always relevant you know, but what can we do? Nothing or everything. Live free.',
    year: '2010',
    awards: null
  },
  {
    id: 'nostalgia',
    name: 'Nostalgia',
    type: 'movies',
    part: {
      main: 'Actor',
      extended: 'Playing “Pedro” character.'
    },
    description:
      'This is a movie about something that happened with someone in some place in space and time is always relevant you know, but what can we do? Nothing or everything. Live free.',
    year: '2010',
    awards: null
  },
  {
    id: 'nao-e-voce-esta-pasando',
    name: 'Não é o que você está pensando',
    type: 'movies',
    part: {
      main: 'Actor',
      extended: 'Playing “Policial” character.'
    },
    description:
      'This is a movie about something that happened with someone in some place in space and time is always relevant you know, but what can we do? Nothing or everything. Live free.',
    year: '2010',
    awards: null
  },
  {
    id: 'agravantes',
    name: 'Agravantes',
    type: 'movies',
    part: {
      main: 'Actor',
      extended: 'Playing “Alex” character.'
    },
    description:
      'This is a movie about something that happened with someone in some place in space and time is always relevant you know, but what can we do? Nothing or everything. Live free.',
    year: '2010',
    awards: null
  },
  {
    id: '9-milimetros',
    name: '9 milímetros SP - O Calibre da Justiça',
    type: 'movies',
    part: {
      main: 'Actor',
      extended: 'Playing “Adriano” character.'
    },
    description:
      'This is a movie about something that happened with someone in some place in space and time is always relevant you know, but what can we do? Nothing or everything. Live free.',
    year: '2008',
    awards: null
  },
  {
    id: 'universitade-sao-judas',
    name: 'Universidade São Judas Tadeu',
    type: 'movies',
    part: {
      main: 'Actor',
      extended: 'Playing “Student” character.'
    },
    description:
      'This is a movie about something that happened with someone in some place in space and time is always relevant you know, but what can we do? Nothing or everything. Live free.',
    year: '2008',
    awards: null
  },
  {
    id: 'seis-en-busca-autor',
    name: 'Seis Personagens em Busca de um Autor',
    type: 'theatre',
    part: {
      main: 'Actor',
      extended:
        'Playing “Marco Vinicius The Director” character.'
    },
    description:
      'This is a movie about something that happened with someone in some place in space and time is always relevant you know, but what can we do? Nothing or everything. Live free.',
    year: '2013',
    awards: null
  },
  {
    id: 'o-vermelho-eo-negro',
    name: 'O Vermelho e o Negro',
    type: 'theatre',
    part: {
      main: 'Actor',
      extended: 'Playing “Dimitri” character.'
    },
    description:
      'This is a movie about something that happened with someone in some place in space and time is always relevant you know, but what can we do? Nothing or everything. Live free.',
    year: '2010',
    awards: null
  },
  {
    id: 'bonitinha-mas-ordinaria',
    name: 'Bonitinha mas Ordinária',
    type: 'theatre',
    part: {
      main: 'Actor',
      extended: 'Playing “Peixoto” character.'
    },
    description:
      'This is a movie about something that happened with someone in some place in space and time is always relevant you know, but what can we do? Nothing or everything. Live free.',
    year: '2009',
    awards: null
  },
  {
    id: 'um-jogo-de-seduca',
    name: 'Um Jogo de Seduçã',
    type: 'theatre',
    part: {
      main: 'Actor',
      extended: 'Playing “Lino” character.'
    },
    description:
      'This is a movie about something that happened with someone in some place in space and time is always relevant you know, but what can we do? Nothing or everything. Live free.',
    year: '2008',
    awards: null
  }
];