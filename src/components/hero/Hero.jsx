import React, { useEffect } from 'react';
import { Rectangle } from '@/assets/svgs/Rectangle';
import { Circle } from '@/assets/svgs/Circle';
import { Arrow } from '@/assets/svgs/Arrow';
import { PrimaryCTAButton } from '@/components/buttons/PrimaryCTAButton';
import CoverPhoto from '@/assets/images/cover-photo.png';
import CoverPhotoDarken from '@/assets/images/cover-photo-darken.png';
import CoverPhotoPsych from '@/assets/images/cover-photo-psych.png';
import gsap from 'gsap';
import './hero.scss';

export const Hero = () => {
  useEffect(() => {
    const overlay = document.querySelector('.overlay');

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

  return (
    <div className="container">
      <div className="hero">
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
            <PrimaryCTAButton label="projects" />
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-right--image">
            <img src={CoverPhoto} alt="cover" />
            <img
              src={CoverPhotoPsych}
              alt="cover"
              className="overlay"
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
            <Arrow />
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
