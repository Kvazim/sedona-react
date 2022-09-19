import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { NavSite } from '../nav-site/nav-site';
import { NavUser } from '../nav-user/nav-user';

const Navigation = () => {

  return (
    <>
      <header className="page-header">
        <nav className="main-nav">
          <NavSite />
          <Link className="nav-logo-link" to="/"><img src="./images/sedona.svg" alt="Логотип компании." style={{ width: 138, height: 70 }} /></Link>
          <NavUser />
        </nav>
      </header>
      <Outlet />
    </>
  )
}

export { Navigation };