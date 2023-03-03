import React, { useEffect, useRef } from 'react';
import { PrimaryCTAButton } from '@/components/buttons/PrimaryCTAButton';
import { useIntersection } from '@/components/common/hooks/useIntersection';
import DaniloRed from '@/assets/images/danilo-red.png';
import DaniloGreen from '@/assets/images/danilo-green.png';
import DaniloCold from '@/assets/images/danilo-cold.png';
import DaniloBrown from '@/assets/images/danilo-brown.png';
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
  const aboutFirstRef = useRef(null);
  const aboutSecondRef = useRef(null);
  const aboutThirdRef = useRef(null);
  const aboutFourRef = useRef(null);

  const handlePrimaryCTAClick = () => {
    const work = document.getElementById('contact');
    work.scrollIntoView({ behavior: 'smooth' });
  };

  const isFirstInViewport = useIntersection(
    aboutFirstRef,
    '0px'
  );
  const isSecondInViewport = useIntersection(
    aboutSecondRef,
    '0px'
  );
  const isThirdInViewport = useIntersection(
    aboutThirdRef,
    '0px'
  );
  const isFourInViewport = useIntersection(
    aboutFourRef,
    '0px'
  );

  useEffect(() => {
    const aboutFirstEl = aboutFirstRef.current;
    if (isFirstInViewport) {
      aboutFirstEl.classList.add('show-first-about');
      aboutFirstEl.classList.remove('hide-first-about');
    }
  }, [isFirstInViewport]);

  useEffect(() => {
    const aboutSecondEl = aboutSecondRef.current;
    if (isSecondInViewport) {
      aboutSecondEl.classList.add('show-second-about');
      aboutSecondEl.classList.remove('hide-second-about');
    }
  }, [isFirstInViewport]);

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
              <img
                ref={aboutFirstRef}
                src={DaniloRed}
                alt="danilo-red"
              />
            </div>
            <div className="about-me--first-red--text">
              <p>
                Brazilian <b>trained actor</b> born in São
                Paulo, based in Berlín.
              </p>
            </div>
          </div>
          <div className="about-me--first-green">
            <div className="about-me--first-green--text">
              <p>
                Went to college in San Paulo at the
                University São Judas Tadeu, where I studied
                “Social Communication”, with a focus on
                Radio and Television.
              </p>
            </div>
            <img src={DaniloGreen} alt="danilo-green" />
          </div>
        </div>
        <div className="about-me--second">
          <img
            ref={aboutSecondRef}
            src={DaniloCold}
            alt="danilo-cold"
          />
          <div className="about-me--second-text">
            <h2>First Steps</h2>
            <p>
              After my studies, I started traveling around
              South America, acting and working various
              customer service jobs. I lived in Buenos Aires
              for three months because I wanted to learn
              Spanish. Eventually, I decided that I wanted
              to try something new, so in 2015, I decided to
              move to Ireland. I spent several years there,
              working all kinds of different jobs—customer
              service, pubs, everything. Eventually, I
              landed a job at a social media company. After
              a while, I felt ready for a new challenge,
              which was when I applied for the role at N26.
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
              I have wonderful memories of this time, and
              it’s something I take with me to this
              day—teamwork, effective communication, respect
              for others. In fact, I’d say that this class
              really changed my life, because it brought out
              an important aspect that is still a big part
              of my career.
            </p>
            <p>“</p>
            <p>
              One day, an actor that we’d hired didn’t show
              up and we needed to shoot. So, the team said,
              “Just have Danilo do it!” And I actually ended
              up doing well—my classmates couldn’t believe
              that it was my first time in front of the
              camera.
            </p>
            <div className="about-me--third-line"></div>
          </div>
          <img src={DaniloBrown} alt="danilo-brown" />
        </div>
        <div ref={aboutFourRef} className="about-me--four">
          <p>
            I keep following my path and trying to be as
            close as possible to art. Evolve day by day, as
            a person and as an actor so I can become a
            better version of myself and help others.
          </p>
        </div>
        <div className="about-me--final">
          <div className="about-me--final-container">
            {images.map((image, index) => (
              <div
                style={{ ['--i']: index + 1 }}
                className="about-me--final-item"
              >
                <img src={image.src} alt={image.id} />
                <div className="about-me--final-item-text">
                  <p>{image.text}</p>
                </div>
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
