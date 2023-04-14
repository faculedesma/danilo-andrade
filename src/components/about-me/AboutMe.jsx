import React, { useEffect, useRef } from 'react';
import { PrimaryCTAButton } from '@/components/buttons/PrimaryCTAButton';
import { useIntersection } from '@/components/common/hooks/useIntersection';
import DaniloRed from '@/assets/images/danilo-red.png';
import DaniloGreen from '@/assets/images/danilo-green.png';
import DaniloCold from '@/assets/images/danilo-cold.png';
import DaniloBrown from '@/assets/images/danilo-brown.png';
import DaniloFlowers from '@/assets/images/danilo-flowers.png';
import DaniloBowl from '@/assets/images/danilo-bowl.png';
import DaniloEigthOne from '@/assets/images/danilo-eigth-one.png';
import DaniloEigthTwo from '@/assets/images/danilo-eigth-two.png';
import DaniloEigthThree from '@/assets/images/danilo-eigth-three.png';
import DaniloEigthFour from '@/assets/images/danilo-eigth-four.png';
import DaniloEigthFive from '@/assets/images/danilo-eigth-five.png';
import DaniloEigthSix from '@/assets/images/danilo-eigth-six.png';
import DaniloEigthSeven from '@/assets/images/danilo-eigth-seven.png';
import DaniloEigthEigth from '@/assets/images/danilo-eigth-eigth.png';
import BrazilMap from '@/assets/images/brazil-map.png';
import './about-me.scss';

const images = [
  {
    id: 'one',
    src: DaniloEigthOne,
    text: 'think'
  },
  {
    id: 'two',
    src: DaniloEigthTwo,
    text: 'laugh'
  },
  {
    id: 'three',
    src: DaniloEigthThree,
    text: 'doubt'
  },
  {
    id: 'four',
    src: DaniloEigthFour,
    text: 'wonder'
  },
  {
    id: 'five',
    src: DaniloEigthFive,
    text: 'love'
  },
  {
    id: 'six',
    src: DaniloEigthSix,
    text: 'smile'
  },
  {
    id: 'seven',
    src: DaniloEigthSeven,
    text: 'no'
  },
  {
    id: 'eigth',
    src: DaniloEigthEigth,
    text: 'surprise'
  }
];

const AboutMe = () => {
  const aboutFirstRef = useRef();
  const aboutSecondRef = useRef();
  const aboutThirdRef = useRef();
  const aboutFourRef = useRef();

  const isFirstInViewport = useIntersection(
    aboutFirstRef,
    '-50px'
  );
  const isSecondInViewport = useIntersection(
    aboutSecondRef,
    '-50px'
  );
  const isThirdInViewport = useIntersection(
    aboutThirdRef,
    '0px'
  );
  const isFourInViewport = useIntersection(
    aboutFourRef,
    '0px'
  );

  // useEffect(() => {
  //   if (isFirstInViewport) {
  //     aboutFirstRef.current.classList.add(
  //       'show-first-about'
  //     );
  //   }
  // }, [isFirstInViewport]);

  // useEffect(() => {
  //   if (isSecondInViewport) {
  //     aboutSecondRef.current.classList.add(
  //       'show-second-about'
  //     );
  //   }
  // }, [isSecondInViewport]);

  const handlePrimaryCTAClick = () => {
    const work = document.getElementById('contact');
    work.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container">
      <div id="about-me" className="about-me">
        <div className="about-me--top">
          <h2>About me</h2>
        </div>
        <div className="about-me--first">
          <div className="about-me--first-map">
            <img src={BrazilMap} alt="brazil-map" />
            <div className="about-me--first-map-pin">
              <div className="about-me--first-map-pin-inner"></div>
            </div>
          </div>
          <div className="about-me--first-red">
            <div className="about-me--first-red--image">
              <img src={DaniloRed} alt="danilo-red" />
            </div>
            <div
              ref={aboutFirstRef}
              className="about-me--first-red--text"
            >
              <p>
                Brazilian <b>trained actor</b> born in São
                Paulo, based in Berlín.
              </p>
            </div>
          </div>
          <div className="about-me--first-green">
            <div className="about-me--first-green--text">
              <p>
                I had a very healthy childhood, where we
                were still able to play on the streets. In
                addition to classic childhood games, I
                practiced Judo from the ages of 5 to 12.
              </p>
            </div>
            <img src={DaniloGreen} alt="danilo-green" />
          </div>
        </div>
        <div
          className="about-me--second"
          ref={aboutSecondRef}
        >
          <img src={DaniloCold} alt="danilo-cold" />
          <div className="about-me--second-text">
            <h2>First Steps</h2>
            <p>
              Acting appeared in my life for the first time
              in 2003/04 when I decided to take a vocational
              free course to feel more relaxed about talking
              in public. Some hidden abilities started to
              surface, and I began visiting the MTV show
              audience twice a week while working as an
              extra to be close to movie and publicity sets.
              I also made some friends with similar
              interests, and started shooting videos.
              Together with my cousin, we created a
              mini-series of Brazilian superheroes, which
              ended up as 30-second videos in MTV
              commercials.
            </p>
            <div className="about-me--second-line"></div>
          </div>
        </div>
        <div
          ref={aboutThirdRef}
          className="about-me--third"
        >
          <div className="about-me--third-text">
            <p>
              I studied Communication Studies in Radio and
              TV, planning to work behind the camera until
              one day in my 3rd year, when an actor didn't
              show up for one of our weekly TV show
              productions. Someone pushed me to present the
              program, and months later I was approved for
              the national college publicity and started a
              two-year professional acting course. I
              graduated from college and continued studying
              acting.
            </p>
            <p>“</p>
            <p>
              In 2010, I started a course that changed my
              whole perception. During three years of
              intensive studies and short films, I did scene
              work that forced me to get out of my comfort
              zone and create characters completely
              different from myself.
            </p>
            <div className="about-me--third-line"></div>
          </div>
          <img src={DaniloBrown} alt="danilo-brown" />
        </div>
        <div className="about-me--four">
          <img src={DaniloFlowers} alt="danilo-flower" />
          <div className="about-me--four-text">
            <h2>Inflection point</h2>
            <p>
              While working in a store selling hair
              straighteners, I went to castings and faced
              the most common response from actors: 'No.'
              With the idea of traveling, specifically to
              Machu Picchu, in my mind, I left my country
              for the first time to go backpacking in
              Bolivia and Peru. During my travels, I
              achieved fluency in English, fulfilled a
              dream, learned a lot about myself, and met
              people from all over the world. I also
              developed a desire to learn the most widely
              spoken language in South America, Spanish.
            </p>
            <p>
              I felt a huge change upon my return, and soon
              after I got the opportunity to play the
              character Carrão, a special boy who rode an
              invisible car and couldn't speak in the short
              film 'Os Lados da Rua.' This film collected a
              few awards, including four for best actor.
            </p>
            <div className="about-me--four-line"></div>
          </div>
        </div>
        <div className="about-me--five">
          <div className="about-me--five-text">
            <h2>Movement</h2>
            <p>
              After the shootings, I took my backpack on
              another adventure, this time to Chile and
              Argentina for a low-budget trip lasting five
              weeks with the goal of learning Spanish. Upon
              my return, I realized that Brazil was no
              longer the place for me. Moving to Ireland for
              an exchange program seemed like the next
              logical step.
            </p>
            <p>
              During my nearly four years in Ireland, I
              continued to attend workshops and castings,
              but something was different this time. It
              wasn't until I moved to Berlin that I realized
              I needed acting in my life as a way to express
              myself and feel free.
            </p>
            <div className="about-me--five-line"></div>
          </div>
          <img src={DaniloBowl} alt="danilo-bowl" />
        </div>
        <div ref={aboutFourRef} className="about-me--six">
          <p>
            After 10 years since playing that special
            character, I had the opportunity to return to
            Brazil to shoot a feature film called
            'Margeado'. It was then that I finally
            understood that I act for the love of it and to
            live.
          </p>
        </div>
        <div className="about-me--final">
          <div className="about-me--final-container">
            {images.map((image, index) => (
              <div
                key={image.id}
                style={{ ['--i']: index + 1 }}
                className="about-me--final-item"
              >
                <img src={image.src} alt={image.id} />
              </div>
            ))}
          </div>
        </div>
        <div className="about-me--cta">
          <h2>Let's work together!</h2>
          <PrimaryCTAButton
            label="connect"
            onClick={handlePrimaryCTAClick}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
