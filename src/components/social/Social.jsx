import React, { useRef } from 'react';
import {
  Instagram,
  Mail,
  Pinterest
} from '@/assets/svgs/Social';
import { Tooltip } from '@/components/common/tooltip/Tooltip';
import './social.scss';

export const Links = () => {
  const tooltipRef = useRef(null);

  const handleMailClick = () => {
    navigator.clipboard.writeText(
      'daniloandradeator@gmail.com'
    );
    tooltipRef.current.className = 'tooltip show';
    setTimeout(() => {
      tooltipRef.current.className = 'tooltip hide';
    }, 2500);
  };

  return (
    <div className="social">
      <a
        className="twitter"
        href="https://www.instagram.com/daniloandra_de/"
        target="_blank"
        aria-label="Go to Danilo's twitter account."
      >
        <Pinterest />
      </a>
      <a
        className="instagram"
        href="https://www.instagram.com/daniloandra_de/"
        target="_blank"
        aria-label="Go to Danilo's instagram account."
      >
        <Instagram />
      </a>
      <a
        className="mail"
        onClick={handleMailClick}
        aria-label="Copy Danilo's e-mail address."
      >
        <Mail />
        <Tooltip
          tooltipRef={tooltipRef}
          content="Mail copied to clipboard!"
        />
      </a>
    </div>
  );
};
