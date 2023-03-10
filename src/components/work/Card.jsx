import React, { useEffect, useRef, useState } from 'react';
import { useIntersection } from '@/components/common/hooks/useIntersection';
import { SoundOff } from '@/assets/svgs/SoundOff';
import { SoundOn } from '@/assets/svgs/SoundOn';
import './work.scss';

export const Card = ({ work }) => {
  const [showSound, setShowSound] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

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
      setShowSound(true);
      removeAddShowHideVideo();
      videoRef.current.volume = 0.5;
      videoRef.current.play();
    }, 1000);
  };

  const handleStopVideo = () => {
    if (videoRef.current) {
      setTimeout(() => {
        setShowSound(false);
        removeShowAddHideVideo();
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }, 1000);
    }
  };

  const toggleSound = () => {
    setIsMuted((prevMuted) => !prevMuted);
    videoRef.current.muted = !videoRef.current.muted;
  };

  const handleEndVideo = () => {
    setIsMuted((prevMuted) => !prevMuted);
    videoRef.current.muted = !videoRef.current.muted;
    removeShowAddHideVideo();
  };

  useEffect(() => {
    if (isTopInViewport) {
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
          <video
            ref={videoRef}
            src={work.video.src}
            type="video/mp4"
            loop={false}
            muted={true}
            autoPlay={true}
            playsInline={true}
            controls={false}
            onEnded={handleEndVideo}
          ></video>
          {showSound ? (
            <div
              onClick={toggleSound}
              className="work-card--bottom-video-mute"
            >
              {isMuted ? <SoundOff /> : <SoundOn />}
            </div>
          ) : null}
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
