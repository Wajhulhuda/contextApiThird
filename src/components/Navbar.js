import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../context";

const Navbar = () => {
  const { dark, setDark } = useContext(MyContext);
  return (
    <div className="row">
      <nav
        className={`navbar navbar-expand-lg navbar-${
          dark ? "dark" : "light"
        } bg-${dark ? "dark" : "light"}`}
      >
        <div className="container-fluid">
          <div className="col-2">
            <Link className="navbar-brand" to="/">
              Navbar
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="col-8">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item me-4">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item me-4">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item me-4">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/blog"
                  >
                    Blog
                  </Link>
                </li>

                <li className="nav-item me-4">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>

                <li className="nav-item me-4">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/more"
                  >
                    More
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item ms-5">
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => setDark(!dark)}
                  >
                    Dark Mode
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
