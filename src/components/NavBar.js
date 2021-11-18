import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
  return (
    <nav className=" navbar navbar-dark bg-primary mb-3">
      <div className="container d-flex justify-content-center">
        <Link
          className="navbar-brand"
          to="/"
          onClick={() => props.setNavBar(false)}
        >
          <i className="fa fa-home fa-2x"></i>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
