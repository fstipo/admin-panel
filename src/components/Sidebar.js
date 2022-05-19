import React from 'react';
import '../App.css';

export const NavEl = ({ title, icon }) => {
  return (
    <li className="nav-item h5">
      <a href="/" class="nav-link align-middle px-0 text-white">
        <i className={`ms-3 fs-2 bi-${icon} pe-2`}></i>
        <span className="ms-1 d-none d-md-inline">{title}</span>
      </a>
    </li>
  );
};

const Sidebar = ({ title }) => {
  return (
    <>
      <div class="col-3 px-sm-2 px-0 bg-dark">
        <div class="d-flex flex-column align-items-center align-items-md-start px-3 pt-3  min-vh-100 display-6">
          <a
            href="/"
            class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <i className="bi bi-dice-5 me-3" role="img" aria-label="dice-5"></i>
            <span className="d-none d-md-inline">Logo</span>
          </a>
          <nav className="mt-4">
            <ul>
              <div>
                <NavEl title="Home" icon="house-door" />
                <NavEl className="pb-4" title="Project" icon="folder2-open" />
              </div>
              <hr class="col-6 col-md-12 text-sm-start align-self-center text-white" />
              <div>
                <NavEl title="Dashboard" icon="speedometer2" />
                <NavEl title="Orders" icon="table" />
                <NavEl title="Products" icon="grid" />
                <NavEl title="Customers" icon="person-circle" />
              </div>
            </ul>
          </nav>
          <hr class="col-6 col-md-10 text-white align-self-center text-sm-start mt-4" />
          <button
            className="btn btn-link"
            title="Collapse"
            icon="chevron-double-left"
            type="button"
          >
            <a href="/" class="nav-link align-middle px-0 text-white">
              <i className={`fs-2 bi bi-chevron-double-left pe-2`}></i>
              <span className="ms-1 d-none d-md-inline">Collapse</span>
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
