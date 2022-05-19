import React from 'react';

const Header = ({ name, icon }) => {
  return (
    <header>
      <h2 className="header__title display-4 px-5 pt-2 text-secondary ">
        <i className={`bi bi-${icon}`}></i>
        <span className="ms-4">{name}</span>
      </h2>
      <hr className="horizontal__line" />
    </header>
  );
};

export default Header;
