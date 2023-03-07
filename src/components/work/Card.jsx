import React, { useEffect, useRef } from 'react';
import { useIntersection } from '@/components/common/hooks/useIntersection';
import './work.scss';

export const Card = ({ work }) => {
  const workRef = useRef();
  const workTopRef = useRef();
  const workBottomRef = useRef();
  const imageRef = useRef();
  const videoRef = useRef();

  const isTopInViewport = useIntersection(
    workTopRef,
    '-25px'
  );
  const isBottomInViewport = useIntersection(
    workBottomRef,
    '-150px'
  );

  const removeShowAddHideVideo = () => {
    videoRef.current.classList.add('hide-video');
    videoRef.current.classList.remove('show-video');
  };

  const removeAddShowHideVideo = () => {
    videoRef.current.classList.add('show-video');
    videoRef.current.classList.remove('hide-video');
  };

  const handlePlayVideo = () => {
    setTimeout(() => {
      removeAddShowHideVideo();
      videoRef.current.volume = 0.1;
      videoRef.current.play();
    }, 1000);
  };

  const handleStopVideo = () => {
    if (videoRef.current) {
      setTimeout(() => {
        removeShowAddHideVideo();
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }, 1000);
    }
  };

  const handleEndVideo = () => removeAddShowHideVideo();

  useEffect(() => {
    if (isTopInViewport && videoRef.current) {
      workRef.current.classList.add('show-top-card');
      workRef.current.classList.remove('hide-top-card');
    }
  }, [isTopInViewport]);

  useEffect(() => {
    if (isBottomInViewport && videoRef.current) {
      workRef.current.classList.add('show-bottom-card');
      workRef.current.classList.remove('hide-bottom-card');
      handlePlayVideo();
    } else {
      handleStopVideo();
    }
  }, [isBottomInViewport]);

  return (
    <div
      id={work.id}
      ref={workRef}
      className="work-card hide-top-card hide-bottom-card"
    >
      <div className="work-card--top">
        <div className="work-card--top-left">
          <h1>{work.title}</h1>
          <div className="work-card--top-left--award">
            <p>{work.award}</p>
          </div>
          <div className="work-card--top-left--underline"></div>
          <div className="work-card--top-left--year">
            <p>{work.year}</p>
          </div>
          <div className="work-card--top-left--description">
            <p>{work.description}</p>
          </div>
        </div>
        <div className="work-card--top-right">
          <div className="work-card--top-right--cover">
            <img
              ref={workTopRef}
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
          {/* <ReactPlayer
            ref={videoRef}
            url={work.video.src}
            type="media/mp4"
            volume={0.2}
            loop={false}
            muted={false}
            autoPlay
            controls={false}
            onEnded={handleEndVideo}
          /> */}
          <video
            ref={videoRef}
            src={work.video.src}
            type="media/mp4"
            volume={0.2}
            loop={false}
            muted={false}
            autoPlay
            controls={false}
            onEnded={handleEndVideo}
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
