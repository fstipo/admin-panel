import React from 'react';
import '../App.css';

export const NavEl = ({ title, icon }) => {
  return (
    <li className=" list-inline-item h5">
      <a
        href="/"
        className="d-flex align-items-center px-0 text-white text-decoration-none"
      >
        <i className={`ms-3 fs-2 bi-${icon} pe-2`}></i>
        <span className="navbar__title ms-1 d-none d-xl-inline">{title}</span>
      </a>
    </li>
  );
};

const Sidebar = ({ title, bootstrap }) => {
  const collapseNavbarHandler = (e) => {
    e.preventDefault();
    const logoTitle = document.querySelector('.logo__title');
    const navbarTitleList = document.querySelectorAll('.navbar__title');
    const collapseBtnTitle = document.querySelector('.collapseBtn__title');
    const sidebar = document.querySelector('.side');
    navbarTitleList.forEach((el) => el.classList.toggle('d-xl-inline'));
    logoTitle.classList.toggle('d-xl-inline');
    collapseBtnTitle.classList.toggle('d-xl-inline');
    sidebar.classList.toggle('sidebar__small');
    //   // console.log(navbarTitle);
    //   // navbarTitle.classList.toggle('d-xl-inline');
    //   console.log('Hello');

    //   //   // collapseBtn.addEventListener('click', () => {
    //   //   //   linkA.forEach((el) => el.classList.toggle('collapse'));
    //   //   //   sidebar.classList.toggle('collapsed');
  };
  return (
    <>
      <aside
        className="side
        col-2 px-xl-2 px-0 bg-dark"
        id="collapseExample"
      >
        <div className="d-flex flex-column align-items-center align-items-xl-start  pt-3  min-vh-100 display-6">
          <a
            href="/"
            className="logo ps-3 d-flex align-items-center pb-3 mb-xl-0 me-xl-auto text-white text-decoration-none"
          >
            <i className="bi bi-dice-5 me-3" role="img" aria-label="dice-5"></i>
            <span className=" logo__title d-none d-xl-inline">Logo</span>
          </a>
          <hr className="horizontal__line shadow-sm p-1  bg-body rounded col-6 col-xl-12 text-white align-self-center text-xl-start" />
          <nav className=" mt-4 px-2">
            <ul className="list-inline d-flex flex-column">
              <NavEl title="Home" icon="house-door" />
              <NavEl className="" title="Project" icon="folder2-open" />

              <hr className="horizontal__line col-6 col-xl-12 text-white align-self-center text-xl-start" />

              <NavEl title="Dashboard" icon="speedometer2" />
              <NavEl title="Orders" icon="table" />
              <NavEl title="Products" icon="grid" />
              <NavEl title="Customers" icon="person-circle" />
              <hr className="horizontal__line col-6 col-xl-12 text-white align-self-center text-xl-start" />
            </ul>
          </nav>

          <button
            className="collapse__btn btn btn-link text-decoration-none"
            title="collapse"
            icon="chevron-double-left"
            type="button"
            onClick={collapseNavbarHandler}
          >
            <a
              href="/"
              className="nav-link d-flex align-items-center px-0 text-white "
            >
              <i className={`fs-2 bi bi-chevron-double-left pe-2`}></i>
              <span className="collapseBtn__title d-none d-xl-inline h5">
                Collapse
              </span>
            </a>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
