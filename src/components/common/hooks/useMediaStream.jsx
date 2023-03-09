import { useState, useEffect } from 'react';

export const useMediaStream = (constraints) => {
  const [stream, setStream] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const getStream = async () => {
      try {
        const mediaStream =
          await navigator.mediaDevices.getUserMedia(
            constraints
          );
        if (isMounted) {
          setStream(mediaStream);
        }
      } catch (error) {
        console.error(
          'Error accessing media devices.',
          error
        );
      }
    };

    if (
      'mediaDevices' in navigator &&
      'getUserMedia' in navigator.mediaDevices
    ) {
      getStream();
    } else {
      console.error('getUserMedia is not supported.');
    }

    return () => {
      isMounted = false;
      if (stream) {
        stream.getTracks().forEach((track) => {
          track.stop();
        });
      }
    };
  }, []);

  return { stream };
};
