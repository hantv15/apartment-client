import Content from "../../core/Content";
import { isAuthenticated } from "../../auth";
import moment from "moment";
import { useEffect, useState } from "react";
import { get } from "../../api/UserApi";
const Profile = () => {
  const [user, setUser] = useState({});
  const { data } = isAuthenticated();
  const idUser = data.id;
  console.log(data);
  const dateString = moment(data.dob).format("DD/MM/YYYY");
  console.log();
  useEffect(() => {
    try {
      const getUser = async () => {
        const { data } = await get(idUser);
        setUser(data.data[0]);
      };
      getUser();
    } catch (error) {
      console.log(error.message);
    }
  }, [0]);
  // comment
  return (
    <>
      <Content title="Thông tin người dùng">
        <div className="row">
          {/* Column */}
          <div className="col-lg-4 col-xlg-3 col-md-5">
            <div className="card">
              <div className="card-body">
                <center className="m-t-30">
                  {" "}
                  <img
                    src="../assets/images/users/5.jpg"
                    className="img-circle"
                    width={150}
                  />
                  <h4 className="card-title m-t-10">{user.user_name}</h4>
                  <h6 className="card-subtitle">Cư dân</h6>
                </center>
              </div>
              <div>
                <hr />{" "}
              </div>
              <div className="card-body">
                {" "}
                <small className="text-muted">Địa chỉ email </small>
                <h6>{user.email}</h6>{" "}
                <small className="text-muted p-t-30 db">Điện thoại</small>
                <h6>{user.phone_number}</h6>{" "}
                <small className="text-muted p-t-30 db">Địa chỉ</small>
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
                    href="#settings"
                    role="tab"
                    aria-selected="true"
                  >
                    Thông tin
                  </a>{" "}
                </li>
              </ul>
              {/* Tab panes */}
              <div className="tab-content">
                <div className="tab-pane" id="home" role="tabpanel">
                  <div className="card-body">
                    <div className="profiletimeline">
                      <div className="sl-item">
                        <div className="sl-left">
                          {" "}
                          <img
                            src={
                              user.avatar !== null
                                ? user.avatar
                                : `${process.env.PUBLIC_URL}/assets/images/users/1.jpg`
                            }
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
                <div className="tab-pane active" id="settings" role="tabpanel">
                  <div className="card-body">
                    <form className="form-horizontal form-material">
                      <div className="form-group">
                        <label className="col-md-12">Họ và tên</label>
                        <div className="col-md-12">
                          <input
                            type="text"
                            disabled
                            placeholder={user.user_name}
                            className="form-control form-control-line"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-md-12">Ngày sinh</label>
                        <div className="col-md-12">
                          <input
                            type="text"
                            disabled
                            placeholder={dateString}
                            className="form-control form-control-line"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="example-email" className="col-md-12">
                          Email
                        </label>
                        <div className="col-md-12">
                          <input
                            type="email"
                            disabled
                            placeholder={user.email}
                            className="form-control form-control-line"
                            name="example-email"
                            id="example-email"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-md-12">Số điện thoại</label>
                        <div className="col-md-12">
                          <input
                            type="text"
                            disabled
                            placeholder={user.phone_number}
                            className="form-control form-control-line"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </Content>
          </>
          );
};

          export default Profile;
