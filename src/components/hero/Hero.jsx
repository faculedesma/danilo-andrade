import React, { useEffect, useRef } from 'react';
import { useIntersection } from '@/components/common/hooks/useIntersection';
import { Mouse } from '@/assets/svgs/Mouse';
import { PrimaryCTAButton } from '@/components/buttons/PrimaryCTAButton';
import { LineHorizontal } from '@/components/common/Seperators';
import { Links } from '@/components/social/Social';
import CoverPhoto from '@/assets/images/cover-photo.png';
import CoverPhotoPsych from '@/assets/images/cover-photo-psych.png';
import gsap from 'gsap';
import './hero.scss';

const Hero = () => {
  const heroRef = useRef();
  const isInViewport = useIntersection(heroRef, '0px');

  useEffect(() => {
    const overlay = document.querySelector(
      '.hero-image--overlay'
    );

    window.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const x = Math.round(
        (clientX / window.innerWidth) * 100
      );
      const y = Math.round(
        (clientY / window.innerHeight) * 100
      );

      gsap.to(overlay, {
        '--x': `${x}%`,
        '--y': `${y}%`,
        duration: 0.3
      });
    });
  }, []);

  const handlePrimaryCTAClick = () => {
    const work = document.getElementById('work');
    work.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="container">
        <div
          id="hero"
          ref={heroRef}
          className={`hero ${
            isInViewport ? 'show' : 'hide'
          }`}
        >
          <div className="hero-title">
            <div className="hero-title--name">
              <h1>Danilo</h1>
            </div>
            <div className="hero-title--surname">
              <h1>Andrade</h1>
            </div>
          </div>
          <div className="hero-cta">
            <PrimaryCTAButton
              label="know me"
              onClick={handlePrimaryCTAClick}
            />
          </div>
          <div className="hero-image">
            <img src={CoverPhoto} alt="cover-bw" />
            <img
              src={CoverPhotoPsych}
              alt="cover-psych"
              className="hero-image--overlay"
            />
          </div>
          <div className="hero-underline">
            <LineHorizontal />
          </div>
          <div className="hero-links">
            <Links />
          </div>
          <div className="hero-scroll">
            <div className="hero-scroll--text">
              <p>scroll down</p>
            </div>
            <div className="hero-scroll--line">
              <Mouse />
            </div>
          </div>
        </div>
      </div>
      <div className="hero-background">
        <div className="hero-background--gradient"></div>
      </div>
    </>
  );
};

export default Hero;
