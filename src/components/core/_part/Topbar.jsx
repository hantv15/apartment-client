import React from "react";

const Topbar = () => {
  return (
    <>
      <header className="topbar">
        <nav className="navbar top-navbar navbar-expand-md navbar-dark">
          {/* ============================================================== */}
          {/* Logo */}
          {/* ============================================================== */}
          <div className="navbar-header">
            <a className="navbar-brand" href="index.html">
              {/* Logo icon */}
              <b>
                {/*You can put here icon as well // <i class="wi wi-sunset"></i> //*/}
                {/* Dark Logo icon */}
                <img
                  src="../assets/images/logo-icon.png"
                  alt="homepage"
                  className="dark-logo"
                />
                {/* Light Logo icon */}
                <img
                  src="../assets/images/logo-light-icon.png"
                  alt="homepage"
                  className="light-logo"
                />
              </b>
              {/*End Logo icon */}
              {/* Logo text */}
              <span>
                {/* dark Logo text */}
                <img
                  src="../assets/images/logo-text.png"
                  alt="homepage"
                  className="dark-logo"
                />
                {/* Light Logo text */}
                <img
                  src="../assets/images/logo-light-text.png"
                  className="light-logo"
                  alt="homepage"
                />
              </span>
            </a>
          </div>
          {/* ============================================================== */}
          {/* End Logo */}
          {/* ============================================================== */}
          <div className="navbar-collapse">
            {/* ============================================================== */}
            {/* toggle and nav items */}
            {/* ============================================================== */}
            <ul className="navbar-nav mr-auto">
              {/* This is  */}
              <li className="nav-item hidden-sm-up">
                {" "}
                <a
                  className="nav-link nav-toggler waves-effect waves-light"
                  href="javascript:void(0)"
                >
                  <i className="ti-menu" />
                </a>
              </li>
              {/* ============================================================== */}
              {/* Search */}
              {/* ============================================================== */}
              <li className="nav-item search-box">
                {" "}
                <a
                  className="nav-link waves-effect waves-dark"
                  href="javascript:void(0)"
                >
                  <i className="fa fa-search" />
                </a>
                <form className="app-search">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search & enter"
                  />{" "}
                  <a className="srh-btn">
                    <i className="fa fa-times" />
                  </a>
                </form>
              </li>
            </ul>
            <ul className="navbar-nav my-lg-0">
              {/* ============================================================== */}
              {/* User profile and search */}
              {/* ============================================================== */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-muted waves-effect waves-dark"
                  href
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src="../assets/images/users/1.jpg"
                    alt="user"
                    className="img-circle"
                    width={30}
                  />
                </a>
              </li>
              {/* ============================================================== */}
              {/* User profile and search */}
              {/* ============================================================== */}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Topbar;
