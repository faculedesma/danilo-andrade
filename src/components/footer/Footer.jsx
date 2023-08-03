import React, { useRef } from 'react';
import { useIntersection } from '@/components/common/hooks/useIntersection';
import { Links } from '@/components/social/Social';
import { FileDownload } from '@/assets/svgs/FileDownload';
import DaniloCVPDF from '@/assets/files/danilo-andrade-cv-2023.pdf';
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
              <h2>Get In</h2>
              <h2>Touch</h2>
            </div>
            <div className="footer-left--top-mail">
              <a
                className="mail"
                href="mailto: daniloandradeator@gmail.com"
              >
                daniloandradeator@gmail.com
              </a>
            </div>
            <div className="footer-left--top-links">
              <Links />
              <a
                href={DaniloCVPDF}
                download
                className="footer-left--top-links--cv"
              >
                <FileDownload />
                <p>Download CV</p>
              </a>
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
