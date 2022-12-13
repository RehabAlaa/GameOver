import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/logo.png";
export default function Navbar({ userData, logOut }) {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top">
            <div className="container">
              <Link className="navbar-brand" to="/home">
                <img src={logo} className="logo" alt="logo" />
                Game Over
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
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                {/* lw l userdata mwgod feha 7aga yb2a kda 3amel login yb2ahzhrlo l navbar links 3shan y2der ywsl le ba2y sf7at l site */}

                {userData ? (
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link" to="/home">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="all">
                        All
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        to="/platforms"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Platforms
                      </Link>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <Link className="dropdown-item" to="/platforms/pc">
                            PC
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/platforms/browser"
                          >
                            Browser
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        to="/sort-by"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Sort-by
                      </Link>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/sort-by/release-date"
                          >
                            release-date
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/sort-by/popularity"
                          >
                            popularity
                          </Link>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/sort-by/alphabetical"
                          >
                            alphabetical
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/sort-by/relevance"
                          >
                            relevance
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        to="categories"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Categories
                      </Link>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/categories/shooter"
                          >
                            shooter
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/categories/racing"
                          >
                            racing
                          </Link>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/categories/sports"
                          >
                            sports
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/categories/social"
                          >
                            social
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/categories/open-world"
                          >
                            open-world
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/categories/zombie"
                          >
                            zombie
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/categories/fantasy"
                          >
                            fantasy
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/categories/action-rpg"
                          >
                            action-rpg
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/categories/action"
                          >
                            action
                          </Link>
                        </li>

                        <li>
                          <Link
                            className="dropdown-item"
                            to="/categories/flight"
                          >
                            flight
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/categories/battle-royale"
                          >
                            battle-royale
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                ) : (
                  ""
                )}

                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex">
                  {/* lw l userdata mwgod feha 7aga yb2a kda 3amel login yb2ahzhrlo l logout bs lw la2 y3ny fady yb2a msh 3amel login w lazm y3ml fa hzhrlo l login w sign up */}
                  {userData ? (
                    <li className="nav-item">
                      <span className="nav-link bordr" onClick={logOut}>
                        Logout
                      </span>
                    </li>
                  ) : (
                    <>
                      <li className="nav-item mb-2">
                        <Link className="nav-link" to="/login">
                          Login
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link bordr" to="/">
                          Join Free
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
