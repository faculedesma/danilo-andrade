import React, { useEffect, useRef } from 'react';
import { SecondaryCTAButton } from '@/components/buttons/SecondaryCTAButton';
import { Links } from '@/components/social/Social';
import './menu.scss';

const links = [
  {
    id: 'home',
    href: '/',
    label: 'Home'
  },
  {
    id: 'work',
    href: '/work',
    label: 'Work'
  },
  {
    id: 'about-me',
    href: '/about-me',
    label: 'About me'
  },
  {
    id: 'contact',
    href: '/contact',
    label: 'Contact'
  }
];

export const Menu = ({ isOpen, toggleMenu }) => {
  const menuRef = useRef(null);

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    toggleMenu();
  };

  useEffect(() => {
    if (isOpen) {
      menuRef.current.classList.remove('hide-menu');
      menuRef.current.classList.add('show-menu');
    } else {
      if (menuRef.current.classList.contains('show-menu')) {
        menuRef.current.classList.remove('show-menu');
        menuRef.current.classList.add('hide-menu');
      }
    }
  }, [isOpen]);

  const handleCTAClick = () => {
    const work = document.getElementById('contact');
    work.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <div ref={menuRef} className="menu">
      <div className="container">
        <ul className="menu-links">
          {links.map((link, index) => {
            return (
              <div
                key={index}
                className="menu-links--container"
              >
                <li className="menu-links--container-item">
                  <a
                    onClick={(e) =>
                      handleLinkClick(e, link.id)
                    }
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              </div>
            );
          })}
        </ul>
        <div className="menu-social">
          <Links />
        </div>
        <div className="menu-cta">
          <SecondaryCTAButton
            label="get in touch"
            onClick={handleCTAClick}
          />
        </div>
        <div className="menu-separator"></div>
      </div>
    </div>
  );
};
