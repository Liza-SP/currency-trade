/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation" style={{ marginBottom: '2.5%' }}>
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="logo" />
        </Link>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">

        <div className="navbar-start">
          <NavLink className="navbar-item" to="/">
            Trading
          </NavLink>
          <NavLink className="navbar-item" to="/archive">
            Archive
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
