import React, { useRef, useState } from 'react';
import { Logo } from '@/assets/svgs/Logo';
import { SecondaryCTAButton } from '@/components/buttons/SecondaryCTAButton';
import { Menu } from './Menu';
import './header.scss';

const preventScroll = (e) => {
  e.preventDefault();
  e.stopPropagation();
  return false;
};

const Header = () => {
  const buttonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    const homeEl = document.querySelector('#home');
    if (!isOpen) {
      buttonRef.current.className = 'clicked';

      homeEl.addEventListener('wheel', preventScroll, {
        passive: false
      });
    } else {
      buttonRef.current.className = '';
      homeEl.removeEventListener('wheel', preventScroll);
    }
    setIsOpen(buttonRef.current.className);
  };

  const handleLogoClick = () => {
    const top = document.getElementById('home');
    top.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCTAClick = () => {
    const work = document.getElementById('contact');
    work.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-toggle">
          <button ref={buttonRef} onClick={toggleMenu}>
            <div></div>
            <div></div>
          </button>
        </div>
        {/* <div
          onClick={handleLogoClick}
          className="header-logo"
        >
          <Logo />
        </div> */}
        <div className="header-cta">
          <SecondaryCTAButton
            label="get in touch"
            onClick={handleCTAClick}
          />
        </div>
      </header>
      <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Header;
