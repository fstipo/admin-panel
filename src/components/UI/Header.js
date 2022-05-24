import React from 'react';
import '../../App.css';

const Header = ({ name, icon }) => {
  return (
    <div className="section__main col">
      <header>
        <h2 className="display-5 px-5 pt-2 text-secondary ">
          <i className={`bi bi-${icon}`}></i>
          <span className="ms-4">{name}</span>
        </h2>
        <hr className="mx-3" />
      </header>
    </div>
  );
};

export default Header;
