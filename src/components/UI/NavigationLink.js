import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css';

const NavigationLink = ({ icon, title, to }) => {
  return (
    <li className="nav-item h3">
      <NavLink className="nav-link px-2 d-block" to={to}>
        <i className={`bi bi-${icon}`}></i>
        <span className="navigation__link-title ms-2">{title}</span>
      </NavLink>
    </li>
  );
};

export default NavigationLink;
