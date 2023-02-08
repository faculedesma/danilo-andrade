import React, { useRef, useState } from 'react';
import { Logo } from '@/assets/svgs/Logo';
import {
  Twitter,
  Instagram,
  Mail
} from '@/assets/svgs/Social';
import { SecondaryCTAButton } from '@/components/buttons/SecondaryCTAButton';
import { Menu } from './Menu';
import './header.scss';

const Header = () => {
  const buttonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    buttonRef.current.className = isOpen ? '' : 'clicked';
    setIsOpen(buttonRef.current.className);
  };

  return (
    <header className="header">
      <div className="header-logo">
        <Logo />
      </div>
      <div className="header-right">
        <div className="header-right--links">
          <Twitter />
          <Instagram />
          <Mail />
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
      <Menu isOpen={isOpen} />
    </header>
  );
};

export default Header;
