import React, { useRef, useState } from 'react';
import { Logo } from '@/assets/svgs/Logo';
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
    <>
      <header className="header">
        <div
          onClick={handleLogoClick}
          className="header-logo"
        >
          <Logo />
        </div>
        <div className="header-toggle">
          <button
            id="toggle-button"
            ref={buttonRef}
            onClick={toggleMenu}
          >
            <div></div>
            <div></div>
          </button>
        </div>
      </header>
      <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Header;
