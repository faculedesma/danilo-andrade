import React from 'react';
import {
  Twitter,
  Instagram,
  Mail
} from '@/assets/svgs/Social';
import './social.scss';

export const Links = () => {
  return (
    <div className="social">
      <a
        className="mail"
        href="https://www.instagram.com/daniloandra_de/"
        target="_blank"
      >
        <Twitter />
      </a>
      <a
        className="mail"
        href="https://www.instagram.com/daniloandra_de/"
        target="_blank"
      >
        <Instagram />
      </a>
      <a
        className="mail"
        href="mailto: daniloandradeator@gmail.com"
      >
        <Mail />
      </a>
    </div>
  );
};
