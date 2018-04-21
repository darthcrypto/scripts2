import React from 'react';
import { Link, Route, Switch } from "react-router-dom";
import AboutUs from "./AboutUs";

class Header extends React.Component {
  render() {
    return (<nav
      className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">Employee Management</a>
        <div className="" id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item mx-0 mx-lg-1">
              <Link
                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                to="/emp"
              >Employee
              </Link>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a
                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="#dept"
              >Department
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a
                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="#login"
              >Login
              </a>
            </li>
          </ul>
          <Switch>
<Route exact path="/emp" component={AboutUs} />
</Switch>
        </div>
      </div>
            </nav>);
  }
}

export default Header;
