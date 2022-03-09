import axios from "axios";
import React, { useState } from "react";
import { isAuthenticate } from "../../auth";
import Content from "../../core/Content";

const Dashboard = () => {
  const [file, setFile] = useState({});
  const { data } = isAuthenticate();
  console.log("token: ", data.token);
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    console.log(1);
    axios
      .post("http://localhost:8000/api/file-import", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <Content>
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
                <h4 className="text-themecolor">Dashboard</h4>
              </div>
              <div className="col-md-7 align-self-center text-right">
                <div className="d-flex justify-content-end align-items-center">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                    <li className="breadcrumb-item active">Dashboard</li>
                  </ol>
                  <a className="btn btn-success d-none d-lg-block m-l-15" href="https://wrappixel.com/templates/elegant-admin/"> Upgrade To Pro</a>
                </div>
              </div>
            </div>
            {/* ============================================================== */}
            {/* End Bread crumb and right sidebar toggle */}
            {/* ============================================================== */}
            {/* ============================================================== */}
            {/* Yearly Sales */}
            {/* ============================================================== */}
            <div className="row">
              <div className="col-lg-8">
                <div className="card oh">
                  <div className="card-body">
                    <div className="d-flex m-b-30 align-items-center no-block">
                      <h5 className="card-title ">Yearly Sales</h5>
                      <div className="ml-auto">
                        <ul className="list-inline font-12">
                          <li><i className="fa fa-circle text-info" /> Iphone</li>
                          <li><i className="fa fa-circle text-primary" /> Ipad</li>
                        </ul>
                      </div>
                    </div>
                    <div id="morris-area-chart" style={{ height: 350 }} />
                  </div>
                  <div className="card-body bg-light">
                    <div className="row text-center m-b-20">
                      <div className="col-lg-4 col-md-4 m-t-20">
                        <h2 className="m-b-0 font-light">6000</h2><span className="text-muted">Total sale</span>
                      </div>
                      <div className="col-lg-4 col-md-4 m-t-20">
                        <h2 className="m-b-0 font-light">4000</h2><span className="text-muted">Iphone</span>
                      </div>
                      <div className="col-lg-4 col-md-4 m-t-20">
                        <h2 className="m-b-0 font-light">2000</h2><span className="text-muted">Ipad</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Today's Schedule</h5>
                    <h6 className="card-subtitle">check out your daily schedule</h6>
                    <div className="steamline m-t-40">
                      <div className="sl-item">
                        <div className="sl-left bg-success"> <i className="fa fa-user" /></div>
                        <div className="sl-right">
                          <div className="font-medium">Meeting today <span className="sl-date"> 5pm</span>
                          </div>
                          <div className="desc">you can write anything </div>
                        </div>
                      </div>
                      <div className="sl-item">
                        <div className="sl-left bg-info"><i className="fa fa-image" /></div>
                        <div className="sl-right">
                          <div className="font-medium">Send documents to Clark</div>
                          <div className="desc">Lorem Ipsum is simply </div>
                        </div>
                      </div>
                      <div className="sl-item">
                        <div className="sl-left"> <img className="img-circle" alt="user" src="../assets/images/users/1.jpg" /> </div>
                        <div className="sl-right">
                          <div className="font-medium">John Doe <span className="sl-date"> 5pm</span></div>
                          <div className="desc">Call today with gohn doe </div>
                        </div>
                      </div>
                      <div className="sl-item">
                        <div className="sl-left"> <img className="img-circle" alt="user" src="../assets/images/users/2.jpg" /> </div>
                        <div className="sl-right">
                          <div className="font-medium">Go to the Doctor <span className="sl-date">5 minutes
                            ago</span></div>
                          <div className="desc">Contrary to popular belief</div>
                        </div>
                      </div>
                      <div className="sl-item">
                        <div className="sl-left"> <img className="img-circle" alt="user" src="../assets/images/users/3.jpg" /> </div>
                        <div className="sl-right">
                          <div><a href="#">Tiger Sroff</a> <span className="sl-date">5 minutes ago</span>
                          </div>
                          <div className="desc">Approve meeting with tiger
                            <br /><a href="javascript:void(0)" className="btn m-t-10 m-r-5 btn-rounded btn-outline-success">Apporve</a>
                            <a href="javascript:void(0)" className="btn m-t-10 btn-rounded btn-outline-danger">Refuse</a> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ============================================================== */}
            {/* News */}
            {/* ============================================================== */}
            <div className="row">
              {/* column */}
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex">
                      <div>
                        <h5 className="card-title">Sales Overview</h5>
                        <h6 className="card-subtitle">Check the monthly sales </h6>
                      </div>
                      <div className="ml-auto">
                        <select className="custom-select b-0">
                          <option>January</option>
                          <option value={1}>February</option>
                          <option value={2} selected>March</option>
                          <option value={3}>April</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th className="text-center">#</th>
                          <th>NAME</th>
                          <th>DATE</th>
                          <th>PRICE</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-center">1</td>
                          <td className="txt-oflo">Elite admin</td>
                          <td className="txt-oflo">April 18, 2017</td>
                          <td><span className="text-success">$24</span></td>
                        </tr>
                        <tr>
                          <td className="text-center">2</td>
                          <td className="txt-oflo">Real Homes WP Theme</td>
                          <td className="txt-oflo">April 19, 2017</td>
                          <td><span className="text-info">$1250</span></td>
                        </tr>
                        <tr>
                          <td className="text-center">3</td>
                          <td className="txt-oflo">Ample Admin</td>
                          <td className="txt-oflo">April 19, 2017</td>
                          <td><span className="text-info">$1250</span></td>
                        </tr>
                        <tr>
                          <td className="text-center">4</td>
                          <td className="txt-oflo">Medical Pro WP Theme</td>
                          <td className="txt-oflo">April 20, 2017</td>
                          <td><span className="text-danger">-$24</span></td>
                        </tr>
                        <tr>
                          <td className="text-center">5</td>
                          <td className="txt-oflo">Hosting press html</td>
                          <td className="txt-oflo">April 21, 2017</td>
                          <td><span className="text-success">$24</span></td>
                        </tr>
                        <tr>
                          <td className="text-center">6</td>
                          <td className="txt-oflo">Digital Agency PSD</td>
                          <td className="txt-oflo">April 23, 2017</td>
                          <td><span className="text-danger">-$14</span></td>
                        </tr>
                        <tr>
                          <td className="text-center">7</td>
                          <td className="txt-oflo">Helping Hands WP Theme</td>
                          <td className="txt-oflo">April 22, 2017</td>
                          <td><span className="text-success">$64</span></td>
                        </tr>
                        <tr>
                          <td className="text-center">8</td>
                          <td className="txt-oflo">Helping Hands WP Theme</td>
                          <td className="txt-oflo">April 22, 2017</td>
                          <td><span className="text-success">$64</span></td>
                        </tr>
                        <tr>
                          <td className="text-center">9</td>
                          <td className="txt-oflo">Ample Admin</td>
                          <td className="txt-oflo">April 19, 2017</td>
                          <td><span className="text-info">$1250</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* ============================================================== */}
            {/* To do chat and message */}
            {/* ============================================================== */}
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Feeds</h4>
                  </div>
                  <ul className="feeds p-b-20">
                    <li>
                      <div className="bg-info"><i className="fa fa-bell-o" /></div> You have 4 pending tasks.
                      <span className="text-muted">Just Now</span>
                    </li>
                    <li>
                      <div className="bg-success"><i className="ti-server" /></div> Server #1 overloaded.<span className="text-muted">2 Hours ago</span>
                    </li>
                    <li>
                      <div className="bg-warning"><i className="ti-shopping-cart" /></div> New order
                      received.<span className="text-muted">31 May</span>
                    </li>
                    <li>
                      <div className="bg-danger"><i className="ti-user" /></div> New user registered.<span className="text-muted">30 May</span>
                    </li>
                    <li>
                      <div className="bg-dark"><i className="fa fa-bell-o" /></div> New Version just arrived.
                      <span className="text-muted">27 May</span>
                    </li>
                    <li>
                      <div className="bg-info"><i className="fa fa-bell-o" /></div> You have 4 pending tasks.
                      <span className="text-muted">Just Now</span>
                    </li>
                    <li>
                      <div className="bg-danger"><i className="ti-user" /></div> New user registered.<span className="text-muted">30 May</span>
                    </li>
                    <li>
                      <div className="bg-dark"><i className="fa fa-bell-o" /></div> New Version just arrived.
                      <span className="text-muted">27 May</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Messages (5 New)</h5>
                    <div className="message-box">
                      <div className="message-widget message-scroll">
                        {/* Message */}
                        <a href="javascript:void(0)">
                          <div className="user-img"> <img src="../assets/images/users/1.jpg" alt="user" className="img-circle" /> <span className="profile-status online pull-right" /> </div>
                          <div className="mail-contnet">
                            <h5>Pavan kumar</h5> <span className="mail-desc">Lorem Ipsum is simply dummy
                              text of the printing and type setting industry. Lorem Ipsum has
                              been.</span> <span className="time">9:30 AM</span>
                          </div>
                        </a>
                        {/* Message */}
                        <a href="javascript:void(0)">
                          <div className="user-img"> <img src="../assets/images/users/2.jpg" alt="user" className="img-circle" /> <span className="profile-status busy pull-right" /> </div>
                          <div className="mail-contnet">
                            <h5>Sonu Nigam</h5> <span className="mail-desc">I've sung a song! See you
                              at</span> <span className="time">9:10 AM</span>
                          </div>
                        </a>
                        {/* Message */}
                        <a href="javascript:void(0)">
                          <div className="user-img"> <span className="round">A</span> <span className="profile-status away pull-right" /> </div>
                          <div className="mail-contnet">
                            <h5>Arijit Sinh</h5> <span className="mail-desc">Simply dummy text of the
                              printing and typesetting industry.</span> <span className="time">9:08
                                AM</span>
                          </div>
                        </a>
                        {/* Message */}
                        <a href="javascript:void(0)">
                          <div className="user-img"> <img src="../assets/images/users/4.jpg" alt="user" className="img-circle" /> <span className="profile-status offline pull-right" /> </div>
                          <div className="mail-contnet">
                            <h5>Pavan kumar</h5> <span className="mail-desc">Just see the my
                              admin!</span> <span className="time">9:02 AM</span>
                          </div>
                        </a>
                        {/* Message */}
                        <a href="javascript:void(0)">
                          <div className="user-img"> <img src="../assets/images/users/1.jpg" alt="user" className="img-circle" /> <span className="profile-status online pull-right" /> </div>
                          <div className="mail-contnet">
                            <h5>Pavan kumar</h5> <span className="mail-desc">Welcome to the Elite
                              Admin</span> <span className="time">9:30 AM</span>
                          </div>
                        </a>
                        {/* Message */}
                        <a href="javascript:void(0)">
                          <div className="user-img"> <img src="../assets/images/users/2.jpg" alt="user" className="img-circle" /> <span className="profile-status busy pull-right" /> </div>
                          <div className="mail-contnet">
                            <h5>Sonu Nigam</h5> <span className="mail-desc">I've sung a song! See you
                              at</span> <span className="time">9:10 AM</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Content>
    </>
  );
};

export default Dashboard;
