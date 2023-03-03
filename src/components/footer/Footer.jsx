import React, { useRef } from 'react';
import { useIntersection } from '@/components/common/hooks/useIntersection';
import { Links } from '@/components/social/Social';
import { SecondaryCTAButton } from '@/components/buttons/SecondaryCTAButton';
import './footer.scss';

const Footer = () => {
  const footerRef = useRef();
  const isInViewport = useIntersection(footerRef, '50px');

  return (
    <div className="container">
      <footer
        id="contact"
        ref={footerRef}
        className={`footer ${
          isInViewport ? 'show' : 'hide'
        }`}
      >
        <div className="footer-underline"></div>
        <div className="footer-left">
          <div className="footer-left--top">
            <div className="footer-left--top-title">
              <h1>Get in</h1>
              <h1>touch</h1>
            </div>
            <div className="footer-left--top-mail">
              daniloandradeactor@gmail.com
            </div>
            <div className="footer-left--top-links">
              <Links />
              <SecondaryCTAButton label="call me" />
            </div>
          </div>
          <div className="footer-left--copyright">
            <p>© Danilo Andrade. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
