import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar fixed-bottom navbar-dark">
      <div className="container d-flex justify-content-between">
        <Link className="navbar-brand" to="/about">
          About
        </Link>
        <Link className="navbar-brand" to="#">
          Idea by Srikar Marupaka &copy; 2022
        </Link>
        <a className="navbar-brand" href="https://github.com/4swork/snippets" target='_blank' rel="noreferrer">
          Contribute
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
