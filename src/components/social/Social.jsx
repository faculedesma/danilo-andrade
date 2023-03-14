import React, { useState } from 'react';
import {
  Instagram,
  Mail,
  Pinterest
} from '@/assets/svgs/Social';
import { Tooltip } from '@/components/common/tooltip/Tooltip';
import './social.scss';

export const Links = () => {
  const [open, setOpen] = useState(false);

  const handleMailClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(
      'daniloandradeator@gmail.com'
    );
  };

  const handleCloseTooltip = () => setOpen(false);

  return (
    <div className="social">
      <a
        className="pinterest"
        href="https://pin.it/58ORZn3"
        target="_blank"
        aria-label="Go to Danilo's Pinterest account."
      >
        <Pinterest />
      </a>
      <a
        className="instagram"
        href="https://www.instagram.com/daniloandra_de/"
        target="_blank"
        aria-label="Go to Danilo's Instagram account."
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
          open={open}
          close={handleCloseTooltip}
          content="Mail copied to clipboard!"
        />
      </a>
    </div>
  );
};
