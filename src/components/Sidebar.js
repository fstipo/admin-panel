import React from 'react';
import '../App.css';
import NavigationLink from './UI/NavigationLink';

const Sidebar = () => {
  const collapseNavbarHandler = (e) => {
    e.preventDefault();
    const navigation = document.querySelector('.section__navigation');
    navigation.classList.toggle('collapsed');
  };
  return (
    <div className="section__navigation col bg-dark">
      <nav className="navbar-dark pt-4 d-flex flex-column">
        <div className="d-flex navigation__logo--box m-auto mb-4 text-danger">
          <a
            className="navigation__logo--text navbar-brand d-inline-block m-auto text-light "
            href="/home"
          >
            <i className="bi bi-dice-5" role="img" aria-label="dice-5"></i>
            <span className="navigation__link-title ms-2">Logo</span>
          </a>
        </div>
        <ul className="navigation__box navbar-nav d-flex flex-column nav-pills">
          <NavigationLink title="Home" icon="house-door" />
          <NavigationLink title="Project" icon="folder2-open" />
          <hr className="text-white border-2 w-75 mb-5" />
          <NavigationLink
            title="Dashboard"
            icon="speedometer2"
            className="mt-5"
          />
          <NavigationLink title="Orders" icon="table" />
          <NavigationLink title="Products" icon="grid" />
          <NavigationLink title="Costumers" icon="person-circle" />
          <hr className="text-white border-2 w-75" />
          <li className="nav-item h3">
            <a
              className="navigation__collapse-button nav-link"
              type="button"
              href="/home"
              onClick={collapseNavbarHandler}
            >
              <i className="bi bi-chevron-double-left"></i>
              <span className="navigation__link-title ms-2">Collapse</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
