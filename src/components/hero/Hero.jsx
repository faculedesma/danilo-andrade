import React, { useEffect, useRef } from 'react';
import { useIntersection } from '@/components/common/hooks/useIntersection';
import { Rectangle } from '@/assets/svgs/Rectangle';
import { Circle } from '@/assets/svgs/Circle';
import { Mouse } from '@/assets/svgs/Mouse';
import { PrimaryCTAButton } from '@/components/buttons/PrimaryCTAButton';
import CoverPhoto from '@/assets/images/cover-photo.png';
import CoverPhotoPsych from '@/assets/images/cover-photo-psych.png';
import gsap from 'gsap';
import './hero.scss';

const Hero = () => {
  const heroRef = useRef();
  const isInViewport = useIntersection(heroRef, '50px');

  useEffect(() => {
    const overlay = document.querySelector(
      '.hero-right--image-overlay'
    );
    const box = document.querySelector('.hero-right--box');

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

      gsap.to(box, {
        '--w': `${x}%`,
        '--z': `${y}%`,
        duration: 0.3
      });
    });
  }, []);

  const handlePrimaryCTAClick = () => {
    const work = document.getElementById('work');
    work.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container">
      <div
        ref={heroRef}
        className={`hero ${isInViewport ? 'show' : 'hide'}`}
      >
        <div className="hero-left">
          <div className="hero-left--title">
            <div className="hero-left--title-top">
              <h1>Danilo</h1>
              <h1>Andrade</h1>
            </div>
            <div className="hero-left--title-sub">
              <p>
                I’m am <b>trained actor</b> that is very
                passionate about something you think is
                important to achieve in acting
              </p>
            </div>
          </div>
          <div className="hero-left--ctas">
            <PrimaryCTAButton
              label="projects"
              onClick={handlePrimaryCTAClick}
            />
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-right--image">
            <img src={CoverPhoto} alt="cover-bw" />
            <img
              src={CoverPhotoPsych}
              alt="cover-psych"
              className="hero-right--image-overlay"
            />
          </div>
          <div className="hero-right--box">
            <Rectangle />
            <p>Photo by Caroline Wimmer</p>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="hero-scroll--text">
            <p>scroll down</p>
          </div>
          <div className="hero-scroll--line">
            <Mouse />
          </div>
        </div>
        <div className="hero-circles">
          <Circle />
          <Circle />
        </div>
      </div>
    </div>
  );
};

export default Hero;
