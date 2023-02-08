import React from 'react';
import { Circle } from '@/assets/svgs/Circle';
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
    id: 'contact',
    href: '/contact',
    label: 'Contact'
  }
];

export const Menu = ({ isOpen }) => {
  const path = window.location.pathname;

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
                <a href={link.href}>{link.label}</a>
                {path === link.href ? (
                  <div className="underline"></div>
                ) : null}
              </li>
            );
          })}
        </ul>
        <div className="header-menu--separator"></div>
        <Circle />
      </div>
    </div>
  );
};
