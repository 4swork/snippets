import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

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
        <Link className="navbar-brand" to="#">
          Contribute
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
