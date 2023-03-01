import React, { useEffect, useRef } from 'react';
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

  return (
    <div ref={menuRef} className="menu">
      <div className="container">
        <ul className="menu-links">
          {links.map((link, index) => {
            return (
              <div className="menu-links--container">
                <li
                  key={index}
                  className="menu-links--container-item"
                >
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
        <div className="menu-separator"></div>
      </div>
    </div>
  );
};
