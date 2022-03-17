import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <aside className="left-sidebar">
        <div className="d-flex no-block nav-text-box align-items-center">
          <span>
            <img
              src="../assets/images/logo-icon.png"
              alt="elegant admin template"
            />
          </span>
          <a
            className="waves-effect waves-dark ml-auto hidden-sm-down"
            href="javascript:void(0)"
          >
            <i className="ti-menu" />
          </a>
          <a
            className="nav-toggler waves-effect waves-dark ml-auto hidden-sm-up"
            href="javascript:void(0)"
          >
            <i className="ti-menu ti-close" />
          </a>
        </div>
        {/* Sidebar scroll*/}
        <div className="scroll-sidebar">
          {/* Sidebar navigation*/}
          <nav className="sidebar-nav">
            <ul id="sidebarnav">
              <li>
                {" "}
                <Link
                  className="waves-effect waves-dark"
                  to="/dashboard"
                  aria-expanded="false"
                >
                  <i className="fa fa-tachometer" />
                  <span className="hide-menu">Dashboard</span>
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  className="waves-effect waves-dark"
                  to="/profile"
                  aria-expanded="false"
                >
                  <i className="fa fa-user-circle-o" />
                  <span className="hide-menu">Thông tin</span>
                </Link>
              </li>
              <li>
                {" "}
                <a
                  className="waves-effect waves-dark"
                  href="table-basic.html"
                  aria-expanded="false"
                >
                  <i className="fa fa-table" />
                  <span className="hide-menu" />
                  Tables
                </a>
              </li>
              <li>
                {" "}
                <a
                  className="waves-effect waves-dark"
                  href="icon-fontawesome.html"
                  aria-expanded="false"
                >
                  <i className="fa fa-smile-o" />
                  <span className="hide-menu" />
                  Icon
                </a>
              </li>
              <li>
                {" "}
                <a
                  className="waves-effect waves-dark"
                  href="map-google.html"
                  aria-expanded="false"
                >
                  <i className="fa fa-globe" />
                  <span className="hide-menu" />
                  Map
                </a>
              </li>
              <li>
                {" "}
                <a
                  className="waves-effect waves-dark"
                  href="pages-blank.html"
                  aria-expanded="false"
                >
                  <i className="fa fa-bookmark-o" />
                  <span className="hide-menu" />
                  Blank
                </a>
              </li>
              <li>
                {" "}
                <a
                  className="waves-effect waves-dark"
                  href="pages-error-404.html"
                  aria-expanded="false"
                >
                  <i className="fa fa-question-circle" />
                  <span className="hide-menu" />
                  404
                </a>
              </li>
              <div className="text-center m-t-30">
                <a
                  href="https://wrappixel.com/templates/elegant-admin/"
                  className="btn waves-effect waves-light btn-success hidden-md-down"
                >
                  {" "}
                  Upgrade to Pro
                </a>
              </div>
            </ul>
          </nav>
          {/* End Sidebar navigation */}
        </div>
        {/* End Sidebar scroll*/}
      </aside>
    </>
  );
};

export default Sidebar;
