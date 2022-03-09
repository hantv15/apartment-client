import React from "react";

const Navbar = () => {
  return (
    <>
      <header class="topbar">
        <nav class="navbar top-navbar navbar-expand-md navbar-dark">
          <div class="navbar-header">
            <a class="navbar-brand" href="index.html">
              <b>
                <i class="wi wi-sunset"></i>

                <img src="dist/images/logo-icon.png" alt="homepage" class="dark-logo" />
                <img src="dist/images/logo-light-icon.png" alt="homepage" class="light-logo" />
              </b>
              <span>
                <img src="dist/images/logo-text.png" alt="homepage" class="dark-logo" />
                <img src="dist/images/logo-light-text.png" class="light-logo" alt="homepage" /></span>
            </a>
          </div>
          <div class="navbar-collapse">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item hidden-sm-up"> <a class="nav-link nav-toggler waves-effect waves-light"
                href="javascript:void(0)"><i class="ti-menu"></i></a></li>
              <li class="nav-item search-box"> <a class="nav-link waves-effect waves-dark"
                href="javascript:void(0)"><i class="fa fa-search"></i></a>
                <form class="app-search">
                  <input type="text" class="form-control" placeholder="Search &amp; enter" />
                  <a
                    class="srh-btn"><i class="fa fa-times"></i></a>
                </form>
              </li>
            </ul>
            <ul class="navbar-nav my-lg-0">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark" href=""
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img
                    src="dist/images/users/1.jpg" alt="user" class="img-circle" width="30" /></a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
