import React, { useEffect, useRef, useState } from 'react';
import { useIntersection } from '@/components/common/hooks/useIntersection';
import './work.scss';

export const Card = ({ work }) => {
  const workTopRef = useRef();
  const workBottomRef = useRef();

  const imageRef = useRef();
  const videoRef = useRef();

  const isTopInViewport = useIntersection(
    workTopRef,
    '0px'
  );
  const isBottomInViewport = useIntersection(
    workBottomRef,
    '-100px'
  );

  const handlePlayVideo = () => {
    setTimeout(() => {
      videoRef.current.classList.remove('hide-video');
      videoRef.current.classList.add('show-video');
      videoRef.current.volume = 0.2;
      videoRef.current.play();
    }, 1000);
  };

  const handleStopVideo = () => {
    setTimeout(() => {
      videoRef.current.classList.remove('show-video');
      videoRef.current.classList.add('hide-video');
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }, 100);
  };

  useEffect(() => {
    const workEl = document.getElementById(work.id);
    if (isTopInViewport) {
      workEl.classList.add('show-top-card');
      workEl.classList.remove('hide-top-card');
    }
  }, [isTopInViewport, work.id]);

  useEffect(() => {
    const workEl = document.getElementById(work.id);
    if (isBottomInViewport) {
      workEl.classList.add('show-bottom-card');
      workEl.classList.remove('hide-bottom-card');
      handlePlayVideo();
    } else {
      handleStopVideo();
    }
  }, [isBottomInViewport, work.id]);

  return (
    <div
      id={work.id}
      className="work-card hide-top-card hide-bottom-card"
    >
      <div className="work-card--top">
        <div className="work-card--top-left">
          <h1>{work.title}</h1>
          <div className="work-card--top-left--award">
            <p>{work.award}</p>
          </div>
          <div className="work-card--top-left--underline"></div>
          <div
            ref={workTopRef}
            className="work-card--top-left--year"
          >
            <p>{work.year}</p>
          </div>
          <div className="work-card--top-left--description">
            <p>{work.description}</p>
          </div>
        </div>
        <div className="work-card--top-right">
          <div className="work-card--top-right--cover">
            <img
              src={work.images.cover.src}
              alt={work.images.cover.alt}
            />
          </div>
        </div>
      </div>
      <div className="work-card--bottom">
        <div className="work-card--bottom-image">
          <img
            ref={imageRef}
            src={work.images.guy.src}
            alt={work.images.guy.alt}
          />
          <video
            ref={videoRef}
            src={work.video.src}
            type="media/mp4"
            loop
            muted={false}
            autoPlay
            controls={false}
          ></video>
          <div className="work-card--bottom-image--order">
            <h1>{work.order}</h1>
          </div>
        </div>
        <div className="work-card--bottom-bg">
          <div className="work-card--bottom-bg--top-gradient"></div>
          <img
            ref={workBottomRef}
            src={work.images.guy.src}
            alt={work.images.guy.alt}
          />
          <div className="work-card--bottom-bg--bottom-gradient"></div>
        </div>
      </div>
    </div>
  );
};
