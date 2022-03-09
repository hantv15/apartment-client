import React from "react";
import { useHistory } from "react-router-dom";
import { isAuthenticate, logOut } from "../auth";
import Navbar from "./_part/Navbar";
import Sidebar from "./_part/Sidebar";
import Footer from "./_part/Footer"

const Content = ({ title = "Dashboard", subName = "Admin", children }) => {
  const history = useHistory();
  const { data } = isAuthenticate();
  const logout = async () => {
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      Authorization: `Bearer ${data.token}`,
    };

    fetch("http://apartment-system.xyz/api/logout", {
      method: "POST",
      headers: headersList,
    })
      .then(function (response) {
        history.push("/");
      })
      .then(function (data) {
        console.log(data);
      });
  };

  return (
    <>
      <div title="Dashboard">
        <Navbar />
            
            {/* sidebar */}
            <Sidebar />
            {children}
            <Footer />
      </div>


    </>
  );
};
export default Content;
