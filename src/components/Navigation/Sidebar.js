import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import NavigationLink from '../UI/NavigationLink';

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
          <Link
            className="navigation__logo--text navbar-brand d-inline-block m-auto text-light "
            to="/"
          >
            <i className="bi bi-dice-5" role="img" aria-label="dice-5"></i>
            <span className="navigation__link-title ms-2">Logo</span>
          </Link>
        </div>
        <ul className="navigation__box navbar-nav flex-column  nav-pills d-flex ">
          <div className="d-grid">
            <NavigationLink title="Home" icon="house-door" to="/" />
            <NavigationLink
              title="Projects"
              icon="folder2-open"
              to="/projects"
            />
            <hr className="text-white border-2  mb-5 align-center" />
            <NavigationLink
              title="Dashboard"
              icon="speedometer2"
              to="/dashboard"
            />
            <NavigationLink title="Orders" icon="table" to="/orders" />
            <NavigationLink title="Products" icon="grid" to="/products" />
            <NavigationLink
              title="Costumers"
              icon="person-circle"
              to="/costumers"
            />
            <hr className="text-white border-2  mb-1 text-center" />
            <button
              className="mb-5 navigation__collapse-button btn-light"
              type="button"
              onClick={collapseNavbarHandler}
            >
              <i className="bi bi-box-arrow-in-right h5"></i>
              <span className="navigation__link-title ms-2 h5">Login</span>
            </button>
          
            <button
              className="navigation__collapse-button nav-link"
              type="button"
              onClick={collapseNavbarHandler}
            >
              <i className="bi bi-chevron-double-left h5"></i>
              <span className="navigation__link-title ms-2 h5">Collapse</span>
            </button>
          </div>
        </ul>
       
      </nav>
    </div>
  );
};

export default Sidebar;


