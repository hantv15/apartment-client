import React, { useEffect, useState } from "react";
import { get } from "../../api/Apartment";
import { isAuthenticated } from "../../auth";
import Content from "../../core/Content";

const Apartment = () => {
  const [apartment, setApartment] = useState({});
  const { data } = isAuthenticated();
  const idApartment = data.apartment_id;
  useEffect(() => {
    try {
      const getApartment = async () => {
        const { data } = await get(idApartment);
        setApartment(data.data[0]);
      };
      getApartment();
    } catch (error) {
      console.log(error.message);
    }
  }, [0]);
  console.log(apartment);
  return (
    <>
      <Content title="Thông tin căn hộ">
        <div className="row">
          {/* Column */}
          <div className="col-lg-4 col-xlg-3 col-md-5">
            <div className="card">
              <div className="card-body">
                {" "}
                <small className="text-muted">Chủ sở hữu</small>
                <h6>{apartment.name}</h6>{" "}
                <small className="text-muted">Mã căn hộ</small>
                <h6>{apartment.apartment_id}</h6>{" "}
                <small className="text-muted">Diện dích căn hộ</small>
                <h6>{apartment.square_meters} m2</h6>{" "}
                <small className="text-muted p-t-30 db">Toà nhà</small>
                <h6>{apartment.building_name}</h6>{" "}
                <small className="text-muted p-t-30 db">Address</small>
                <h6>
                  Tòa nhà FPT Polytechnic, P. Trịnh Văn Bô, Xuân Phương, Nam Từ
                  Liêm, Hà Nội, Vietnam
                </h6>
                <div className="map-box">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14895.455922776757!2d105.73803236977538!3d21.038127799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2sFPT%20Polytechnic%20Hanoi!5e0!3m2!1sen!2s!4v1647512776561!5m2!1sen!2s"
                    width="100%"
                    height={150}
                    frameBorder={0}
                    style={{ border: 0 }}
                    allowFullScreen
                  />
                </div>{" "}
                <small className="text-muted p-t-30 db">Social Profile</small>
              </div>
            </div>
          </div>
          {/* Column */}
          {/* Column */}
          <div className="col-lg-8 col-xlg-9 col-md-7">
            <div className="card">
              {/* Nav tabs */}
              <ul className="nav nav-tabs profile-tab" role="tablist">
                <li className="nav-item">
                  {" "}
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                  >
                    Dịch vụ căn hộ đang sử dụng
                  </a>{" "}
                </li>
                <li className="nav-item">
                  {" "}
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                  >
                    Profile
                  </a>{" "}
                </li>
                <li className="nav-item">
                  {" "}
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#settings"
                    role="tab"
                  >
                    Settings
                  </a>{" "}
                </li>
              </ul>
              {/* Tab panes */}
              <div className="tab-content">
                <div className="tab-pane active" id="settings" role="tabpanel">
                  <div className="card-body">
                    <div className="profiletimeline">
                      <div className="sl-item">
                        <div className="sl-left">
                          {" "}
                          <img
                            src="../assets/images/users/1.jpg"
                            alt="user"
                            className="img-circle"
                          />{" "}
                        </div>
                        <div className="sl-right">
                          <div>
                            <a href="javascript:void(0)" className="link">
                              John Doe
                            </a>{" "}
                            <span className="sl-date">5 minutes ago</span>
                            <p>
                              assign a new task{" "}
                              <a href="javascript:void(0)"> Design weblayout</a>
                            </p>
                            <div className="row">
                              <div className="col-lg-3 col-md-6 m-b-20">
                                <img
                                  src="../assets/images/big/img1.jpg"
                                  className="img-responsive radius"
                                />
                              </div>
                              <div className="col-lg-3 col-md-6 m-b-20">
                                <img
                                  src="../assets/images/big/img2.jpg"
                                  className="img-responsive radius"
                                />
                              </div>
                              <div className="col-lg-3 col-md-6 m-b-20">
                                <img
                                  src="../assets/images/big/img3.jpg"
                                  className="img-responsive radius"
                                />
                              </div>
                              <div className="col-lg-3 col-md-6 m-b-20">
                                <img
                                  src="../assets/images/big/img4.jpg"
                                  className="img-responsive radius"
                                />
                              </div>
                            </div>
                            <div className="like-comm">
                              {" "}
                              <a
                                href="javascript:void(0)"
                                className="link m-r-10"
                              >
                                2 comment
                              </a>{" "}
                              <a
                                href="javascript:void(0)"
                                className="link m-r-10"
                              >
                                <i className="fa fa-heart text-danger" /> 5 Love
                              </a>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="sl-item">
                        <div className="sl-left">
                          {" "}
                          <img
                            src="../assets/images/users/2.jpg"
                            alt="user"
                            className="img-circle"
                          />{" "}
                        </div>
                        <div className="sl-right">
                          <div>
                            {" "}
                            <a href="javascript:void(0)" className="link">
                              John Doe
                            </a>{" "}
                            <span className="sl-date">5 minutes ago</span>
                            <div className="m-t-20 row">
                              <div className="col-md-3 col-xs-12">
                                <img
                                  src="../assets/images/big/img1.jpg"
                                  alt="user"
                                  className="img-responsive radius"
                                />
                              </div>
                              <div className="col-md-9 col-xs-12">
                                <p>
                                  {" "}
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Integer nec odio. Praesent
                                  libero. Sed cursus ante dapibus diam.{" "}
                                </p>{" "}
                                <a
                                  href="javascript:void(0)"
                                  className="btn btn-success"
                                >
                                  {" "}
                                  Design weblayout
                                </a>
                              </div>
                            </div>
                            <div className="like-comm m-t-20">
                              {" "}
                              <a
                                href="javascript:void(0)"
                                className="link m-r-10"
                              >
                                2 comment
                              </a>{" "}
                              <a
                                href="javascript:void(0)"
                                className="link m-r-10"
                              >
                                <i className="fa fa-heart text-danger" /> 5 Love
                              </a>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="sl-item">
                        <div className="sl-left">
                          {" "}
                          <img
                            src="../assets/images/users/3.jpg"
                            alt="user"
                            className="img-circle"
                          />{" "}
                        </div>
                        <div className="sl-right">
                          <div>
                            <a href="javascript:void(0)" className="link">
                              John Doe
                            </a>{" "}
                            <span className="sl-date">5 minutes ago</span>
                            <p className="m-t-10">
                              {" "}
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Integer nec odio. Praesent libero. Sed
                              cursus ante dapibus diam. Sed nisi. Nulla quis sem
                              at nibh elementum imperdiet. Duis sagittis ipsum.
                              Praesent mauris. Fusce nec tellus sed augue semper{" "}
                            </p>
                          </div>
                          <div className="like-comm m-t-20">
                            {" "}
                            <a
                              href="javascript:void(0)"
                              className="link m-r-10"
                            >
                              2 comment
                            </a>{" "}
                            <a
                              href="javascript:void(0)"
                              className="link m-r-10"
                            >
                              <i className="fa fa-heart text-danger" /> 5 Love
                            </a>{" "}
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="sl-item">
                        <div className="sl-left">
                          {" "}
                          <img
                            src="../assets/images/users/4.jpg"
                            alt="user"
                            className="img-circle"
                          />{" "}
                        </div>
                        <div className="sl-right">
                          <div>
                            <a href="javascript:void(0)" className="link">
                              John Doe
                            </a>{" "}
                            <span className="sl-date">5 minutes ago</span>
                            <blockquote className="m-t-10">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                            </blockquote>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*second tab*/}
                <div className="tab-pane" id="profile" role="tabpanel">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-3 col-xs-6 b-r">
                        {" "}
                        <strong>Full Name</strong>
                        <br />
                        <p className="text-muted">Johnathan Deo</p>
                      </div>
                      <div className="col-md-3 col-xs-6 b-r">
                        {" "}
                        <strong>Mobile</strong>
                        <br />
                        <p className="text-muted">(123) 456 7890</p>
                      </div>
                      <div className="col-md-3 col-xs-6 b-r">
                        {" "}
                        <strong>Email</strong>
                        <br />
                        <p className="text-muted">johnathan@admin.com</p>
                      </div>
                      <div className="col-md-3 col-xs-6">
                        {" "}
                        <strong>Location</strong>
                        <br />
                        <p className="text-muted">London</p>
                      </div>
                    </div>
                    <hr />
                    <p className="m-t-30">
                      Donec pede justo, fringilla vel, aliquet nec, vulputate
                      eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                      venenatis vitae, justo. Nullam dictum felis eu pede mollis
                      pretium. Integer tincidunt.Cras dapibus. Vivamus elementum
                      semper nisi. Aenean vulputate eleifend tellus. Aenean leo
                      ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                    </p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries{" "}
                    </p>
                    <p>
                      It was popularised in the 1960s with the release of
                      Letraset sheets containing Lorem Ipsum passages, and more
                      recently with desktop publishing software like Aldus
                      PageMaker including versions of Lorem Ipsum.
                    </p>
                    <h4 className="font-medium m-t-30">Skill Set</h4>
                    <hr />
                    <h5 className="m-t-30">
                      Wordpress <span className="float-right">80%</span>
                    </h5>
                    <div className="progress">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "80%", height: 6 }}
                      >
                        {" "}
                        <span className="sr-only">50% Complete</span>{" "}
                      </div>
                    </div>
                    <h5 className="m-t-30">
                      HTML 5 <span className="float-right">90%</span>
                    </h5>
                    <div className="progress">
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "90%", height: 6 }}
                      >
                        {" "}
                        <span className="sr-only">50% Complete</span>{" "}
                      </div>
                    </div>
                    <h5 className="m-t-30">
                      jQuery <span className="float-right">50%</span>
                    </h5>
                    <div className="progress">
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        aria-valuenow={50}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "50%", height: 6 }}
                      >
                        {" "}
                        <span className="sr-only">50% Complete</span>{" "}
                      </div>
                    </div>
                    <h5 className="m-t-30">
                      Photoshop <span className="float-right">70%</span>
                    </h5>
                    <div className="progress">
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        aria-valuenow={70}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "70%", height: 6 }}
                      >
                        {" "}
                        <span className="sr-only">50% Complete</span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="home" role="tabpanel">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th>Role</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Deshmukh</td>
                            <td>Prohaska</td>
                            <td>@Genelia</td>
                            <td>
                              <span className="label label-danger">admin</span>{" "}
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Deshmukh</td>
                            <td>Gaylord</td>
                            <td>@Ritesh</td>
                            <td>
                              <span className="label label-info">member</span>{" "}
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Sanghani</td>
                            <td>Gusikowski</td>
                            <td>@Govinda</td>
                            <td>
                              <span className="label label-warning">
                                developer
                              </span>{" "}
                            </td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Roshan</td>
                            <td>Rogahn</td>
                            <td>@Hritik</td>
                            <td>
                              <span className="label label-success">
                                supporter
                              </span>{" "}
                            </td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Joshi</td>
                            <td>Hickle</td>
                            <td>@Maruti</td>
                            <td>
                              <span className="label label-info">member</span>{" "}
                            </td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>Nigam</td>
                            <td>Eichmann</td>
                            <td>@Sonu</td>
                            <td>
                              <span className="label label-success">
                                supporter
                              </span>{" "}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Column */}
        </div>
      </Content>
    </>
  );
};

export default Apartment;
