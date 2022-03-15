import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { isAuthenticated, logOut } from "../../auth";
import { Link } from "react-router-dom";
const Sidebar = () => {

  const history = useHistory();
  const { data } = isAuthenticated();
  const logout = async () => {
    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Authorization": `Bearer ${data.data.token}`
    }

    fetch("http://apartment-system.xyz/api/logout", {
      method: "POST",
      headers: headersList
    }).then(function (response) {
      history.push("/");
    }).then(function (data) {
      console.log(data);
    })
    logOut();
  }

  return (
    <>
      <aside className="left-sidebar">
        <div className="d-flex no-block nav-text-box align-items-center">
          <span><img src="dist/images/logo-icon.png" alt="elegant admin template" /></span>
          <a className="waves-effect waves-dark ml-auto hidden-sm-down" href="javascript:void(0)"><i className="ti-menu" /></a>
          <a className="nav-toggler waves-effect waves-dark ml-auto hidden-sm-up" href="javascript:void(0)"><i className="ti-menu ti-close" /></a>
        </div>
        <div className="scroll-sidebar">
          <nav className="sidebar-nav">
            <ul id="sidebarnav">
              <li>
                <Link to="/dashboard" className="waves-effect waves-dark" aria-expanded="false"><i className="fa fa-tachometer" /><span className="hide-menu">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/profile" className="waves-effect waves-dark" aria-expanded="false"><i className="fa fa-user-circle-o" /><span className="hide-menu">Profile</span></Link>
              </li>
              <li>
                <Link to="/apartment" className="waves-effect waves-dark" aria-expanded="false"><i className="fa fa-table" /><span className="hide-menu" />Căn Hộ</Link>
              </li>
              <li>
                <Link to="/bill/:id" className="waves-effect waves-dark" aria-expanded="false"><i className="fa fa-smile-o" /><span className="hide-menu" />Hóa đơn</Link>
              </li>
              <li>
                <Link to="/service" className="waves-effect waves-dark" aria-expanded="false"><i className="fa fa-smile-o" /><span className="hide-menu" />Dich vu</Link>
              </li>
              <li>
                <a className="waves-effect waves-dark" aria-expanded="false"><i className="fa fa-globe" /><span className="hide-menu" />Thông báo</a></li>
              <li>
                <a className="waves-effect waves-dark" aria-expanded="false"><i className="fa fa-bookmark-o" /><span className="hide-menu" />Blank</a>
              </li>
              <li className="nav-item">
                <a
                  exact
                  activeClassName="active"
                  className="nav-link"
                  onClick={() => logout()}
                >
                  <i className="nav-icon fas fa-arrow-right-from-bracket" />
                  <button>
                    Đăng xuất
                    {/* <span className="right badge badge-danger">New</span> */}
                  </button>
                </a>
              </li>

            </ul>
          </nav>
        </div>
      </aside>

    </>
  );
};

export default Sidebar;
