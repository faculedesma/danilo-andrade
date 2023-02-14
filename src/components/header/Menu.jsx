import React from 'react';
import { CircleCut } from '@/assets/svgs/CircleCut';
import './header.scss';

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
    id: 'gallery',
    href: '/gallery',
    label: 'Gallery'
  },
  {
    id: 'contact',
    href: '/contact',
    label: 'Contact'
  }
];

export const Menu = ({ isOpen, toggleMenu }) => {
  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    toggleMenu();
  };

  return (
    <div
      className={`header-menu ${isOpen ? 'show-menu' : ''}`}
    >
      <div className="container">
        <ul className="header-menu--links">
          {links.map((link, index) => {
            return (
              <li
                key={index}
                className="header-menu--links-item"
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
            );
          })}
        </ul>
        <div className="header-menu--separator"></div>
        <CircleCut />
      </div>
    </div>
  );
};
