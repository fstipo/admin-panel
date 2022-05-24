import React from 'react';

const NavigationLink = ({ icon, title }) => {
  return (
    <li className="nav-item h3">
      <a className="nav-link" href="/home">
        <i className={`bi bi-${icon}`}></i>
        <span className="navigation__link-title ms-2">{title}</span>
      </a>
    </li>
  );
};

export default NavigationLink;
