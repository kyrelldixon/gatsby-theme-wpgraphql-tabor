import React from 'react';
import { Dribble, Twitter } from './Icons';
//TODO: make it dynamic
//TODO: add facebook and instagram icons

const SocialNav = () => (
  <nav className="social-navigation" aria-label="Social Menu">
    <div className="menu-social-container">
      <ul
        id="menu-social"
        className="header-font medium smooth gray list-reset"
      >
        <li
          id="menu-item-351"
          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-351"
        >
          <a href="https://twitter.com/kyrelldixon" target="_blank" rel="noopener noreferrer">
            <span className="screen-reader-text">Twitter</span>
            <Twitter />
          </a>
        </li>
        <li
          id="menu-item-352"
          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-352"
        >
          <a href="https://instagram.com/kyrell.dixon" target="_blank" rel="noopener noreferrer">
            <span className="screen-reader-text">Instagram</span>
            <Dribble />
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default SocialNav;
