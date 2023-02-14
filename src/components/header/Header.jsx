import React, { useRef, useState } from 'react';
import { Logo } from '@/assets/svgs/Logo';
import { Links } from '@/components/social/Social';
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

  return (
    <header className="header">
      <div
        onClick={handleLogoClick}
        className="header-logo"
      >
        <Logo />
      </div>
      <div className="header-right">
        <div className="header-right--links">
          <Links />
        </div>
        <div className="header-right--cta">
          <SecondaryCTAButton label="call me" />
        </div>
        <div className="header-right--icon">
          <button ref={buttonRef} onClick={toggleMenu}>
            <div></div>
            <div></div>
          </button>
        </div>
      </div>
      <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
