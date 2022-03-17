import React from "react";
import { useHistory } from "react-router-dom";
import { isAuthenticated } from "../auth";
import Navbar from "./_part/Navbar";
import Sidebar from "./_part/Sidebar";
import Footer from "./_part/Footer";
import Topbar from "./_part/Topbar";

const Content = ({ title = "Dashboard", subName = "Admin", children }) => {
  const history = useHistory();
  const { data } = isAuthenticated();

  return (
    <>
      <div id="main-wrapper">
        {/* ============================================================== */}
        {/* Topbar header - style you can find in pages.scss */}
        {/* ============================================================== */}
        <Topbar />
        {/* ============================================================== */}
        {/* End Topbar header */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* Left Sidebar - style you can find in sidebar.scss  */}
        {/* ============================================================== */}
        <Sidebar />
        {/* ============================================================== */}
        {/* End Left Sidebar - style you can find in sidebar.scss  */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* Page wrapper  */}
        {/* ============================================================== */}
        <div className="page-wrapper">
          {/* ============================================================== */}
          {/* Container fluid  */}
          {/* ============================================================== */}
          <div className="container-fluid">
            {/* ============================================================== */}
            {/* Bread crumb and right sidebar toggle */}
            {/* ============================================================== */}
            <div className="row page-titles">
              <div className="col-md-5 align-self-center">
                <h4 className="text-themecolor">{title}</h4>
              </div>
              <div className="col-md-7 align-self-center text-right">
                <div className="d-flex justify-content-end align-items-center">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="javascript:void(0)">Home</a>
                    </li>
                    <li className="breadcrumb-item active">{title}</li>
                  </ol>
                </div>
              </div>
            </div>
            {/* ============================================================== */}
            {/* End Bread crumb and right sidebar toggle */}
            {/* ============================================================== */}
            {/* ============================================================== */}
            {/* Yearly Sales */}
            {/* ============================================================== */}
            {children}
          </div>
          {/* ============================================================== */}
          {/* End Container fluid  */}
          {/* ============================================================== */}
        </div>
        {/* ============================================================== */}
        {/* End Page wrapper  */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* footer */}
        {/* ============================================================== */}
        <footer className="footer">
          © 2020 Elegent Admin by{" "}
          <a href="https://www.wrappixel.com/">wrappixel.com</a>
        </footer>
        {/* ============================================================== */}
        {/* End footer */}
        {/* ============================================================== */}
      </div>
    </>
  );
};
export default Content;
