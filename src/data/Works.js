import NegoCover from '@/assets/images/nego-cover.png';
import NegoGuy from '@/assets/images/nego-guy.png';
import NegoVideo from '@/assets/videos/nego-video.mp4';
import BandidosCover from '@/assets/images/bandidos-cover.png';
import BandidosGuy from '@/assets/images/bandidos-guy.png';
import BandidosVideo from '@/assets/videos/bandidos-video.mp4';
import OsLadosCover from '@/assets/images/os-lados-cover.png';
import OsLadosGuy from '@/assets/images/os-lados-guy.png';
import OsLadosVideo from '@/assets/videos/os-lados-trailer.mp4';
import OitoVentosCover from '@/assets/images/oito-ventos-cover.png';
import OitoVentosGuy from '@/assets/images/oito-ventos-guy.png';
import OitoVentosVideo from '@/assets/videos/oito-ventos-video.mp4';

export const mainWorks = [
  {
    id: 'work-one',
    title: 'os Lados Da Rua',
    awards: [
      'Best Movie  22º Cine Ceará',
      'Best Actor 3º Festival de Cinema Curta Amazônia',
      'Best Actor 3º Festival Nacional de Cinema de Petrópolis',
      'Best Actor Festival Cine São Gonçalo',
      'Best Actor IV Festival de Jericoacoara Cinema Digital'
    ],
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
    title: 'Nego',
    awards: [
      'Best Movie 1º Festival de Cinema de Sta Cruz do Sul'
    ],
    year: '2013',
    description:
      'Small, black and skinny, another street boy obeying the crook known as Parana, even unprotected and alone, he walks for hours in the dangerous streets of a nightly Sao Paulo, to deliver a mysterious package. As he goes in his journey suffering cold, distresses, loneliness and fear, Nego takes refuge into his thoughts, pictures of his life.',
    images: {
      cover: {
        src: NegoCover,
        alt: 'nego-cover'
      },
      guy: { src: NegoGuy, alt: 'nego-guy' }
    },
    video: {
      id: 'nego-video',
      src: NegoVideo
    },
    order: '02'
  },
  {
    id: 'work-three',
    title: 'Oito Ventos',
    awards: null,
    description:
      'Oito Ventos tells real stories of conflicts and fear caused by the greatest love in the world: the love of a mother, which is also responsible for the most beautiful stories of reconciliation.',
    year: '2014',
    images: {
      cover: {
        src: OitoVentosCover,
        alt: 'oita-ventos-cover'
      },
      guy: {
        src: OitoVentosGuy,
        alt: 'oita-ventos-guy'
      }
    },
    video: {
      id: 'oito-ventos',
      src: OitoVentosVideo
    },
    order: '03'
  },
  {
    id: 'work-four',
    title: 'Bandidos',
    awards: null,
    year: '2010',
    description: `Four criminals commit a robbery, but only three manage to reach the hideout. They have a backpack full of money. It's time to share the profits.`,
    images: {
      cover: {
        src: BandidosCover,
        alt: 'bandidos-cover'
      },
      guy: { src: BandidosGuy, alt: 'bandidos' }
    },
    video: {
      id: 'bandidos-video',
      src: BandidosVideo
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
      'Feature film from the director Diego Zon, produced by the De Repente o Rio, filmed in Espirito Santo during August and September 2022 (currently in post-production).',
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
      'Oito Ventos tells real stories of conflicts and fear caused by the greatest love in the world: the love of a mother, which is also responsible for the most beautiful stories of reconciliation.',
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
      'National Christmas publicity for the brand Sadia.',
    year: '2013',
    awards: null
  },
  {
    id: 'nego',
    name: 'Nego',
    type: 'movies',
    part: {
      main: 'Actor',
      extended: 'Participation in the role of policeman.'
    },
    description:
      'Small, black and skinny, another street boy obeying the crook known as Parana unprotected and alone walks in the dangerous streets of a nightly Sao Paulo, to deliver a mysterious package. As he goes in his journey suffering cold, distresses, loneliness and fear, Nego takes refuge into his thoughts, pictures of his life.',
    year: '2013',
    awards:
      'Best  Movie 7º Fest Aruanda/PB 2011, Best Movie 1º Festival de Cinema de Sta Cruz do Sul'
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
    description: `Carrao (Big Car) is a young boy who, despite his eccentric behavior, lives freely at the pace of life in a typical small Brazilian city. After being caught off-guard by an event that threatens to disrupt his whole world, he will need to find a way to set himself free again.`,
    year: '2012',
    awards:
      'Best movie  22º Cine Ceará, Best actor - 3 º Festival de Cinema Curta Amazônia – 2012, Best Actor - 3 º Festival Nacional de Cinema de Petrópolis – 2012, Best Actor - FestCine São Gonçalo  – 2013, Best Actor - IV Festival de Jericoacoara Cinema Digital  – 2014'
  },
  {
    id: 'inspiracao',
    name: '(Ins)piração',
    type: 'movies',
    part: {
      main: 'Writter',
      extended: 'Writter of the movie script.'
    },
    description: `What's inside people's heads? Desires, positive or negative thoughts, the craziest imagination, everyday (in)spirations... sometimes it's not safe to find out`,
    year: '2011',
    awards:
      'Best National Micro Film Festival 5th ArtDeco de Cinema/SP 2012'
  },
  {
    id: 'bandidos',
    name: 'Bandidos',
    type: 'movies',
    part: {
      main: 'Actor',
      extended: 'Playing “Zóio” character.'
    },
    description: `Four criminals commit a robbery, but only three manage to reach the hideout. They have a backpack full of money. It's time to share the profits.`,
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
      'Prepare the apartment in such a way as to make you comfortable. After the bell rings, add a dash of curiosity and mix the loving couples. Add a little surprise and cook over low heat for 5 minutes, until the broth thickens. Serve with wine and grated cheese.',
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
      'Being stuck in a bathroom brings truths to the surface during an eye-to-eye conversation.',
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
      'A mini-series that chronicles the professional and private lives of a group of Brazilian homicide detectives.',
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
    description: `National publicity for the University “ São Judas Tadeu”`,
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
      'The rehearsal is invaded by six characters who, rejected by their creator, try to convince the company director to stage their lives.',
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
      'Five characters in an asylum who believe they are iconic human beings from different eras live peacefully in their nut until a mysterious case involving two spirits gladiating with each other brings a visit from an unusual detective.',
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
      'Adaptation of the famous Brazilian play by Nelson Rodrigues about an industrialist who offers money to one of his employees to marry his 17-year-old daughter, victim of a rape. The boy, undecided between easy enrichment and fidelity to his feelings for a young woman of his social class, who will be involved in the unscrupulous world of the rich, unmasks the naivety of the offered girl.',
    year: '2009',
    awards: null
  },
  {
    id: 'um-jogo-de-seducao',
    name: 'Um Jogo de Sedução',
    type: 'theatre',
    part: {
      main: 'Actor',
      extended: 'Playing “Lino” character.'
    },
    description:
      'A murder in the Casino brings tension and suspicion for the ones there at the day of the crime. In this game of love and hate, the truth does not enter.',
    year: '2008',
    awards: null
  }
];
