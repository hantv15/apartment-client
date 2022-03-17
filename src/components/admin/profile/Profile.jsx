import Content from "../../core/Content";
import { isAuthenticated } from "../../auth";
import moment from "moment";

const Profile = () => {
  const { data } = isAuthenticated();
  console.log(data.dob);
  const dateString = moment(data.dob).format("DD/MM/YYYY");
  console.log(dateString);

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
                  <h4 className="card-title m-t-10">{data.name}</h4>
                  <h6 className="card-subtitle">Cư dân</h6>
                </center>
              </div>
            </div>
          </div>
          {/* Column */}
          {/* Column */}
          <div className="col-lg-8 col-xlg-9 col-md-7">
            <div className="card">

              {/* Tab panes */}
              <div className="card-body">
                <form className="form-horizontal form-material">
                  <div className="form-group">
                    <label className="col-md-12">Tên đầy đủ</label>
                    <div className="col-md-12">
                      <input
                        type="text"
                        disabled
                        placeholder={data.name}
                        className="form-control form-control-line"
                      />
                    </div>

                    {/* Row */}
                    <div className="row">
                      {/* Column */}
                      <div className="col-lg-4 col-xlg-3 col-md-5">
                        <div className="card">
                          <div className="card-body">
                            <center className="m-t-30"> <img src="dist/images/users/5.jpg" className="img-circle" width={150} alt="" />
                              <h4 className="card-title m-t-10">Hanna Gover</h4>
                              <h6 className="card-subtitle">Accoubts Manager Amix corp</h6>
                              <div className="row text-center justify-content-md-center">
                                <div className="col-4"><a href="/" className="link"><i className="icon-people" />
                                  <font className="font-medium">254</font>
                                </a></div>
                                <div className="col-4"><a href="/" className="link"><i className="icon-picture" />
                                  <font className="font-medium">54</font>
                                </a></div>
                              </div>
                            </center>
                          </div>
                          <div className="form-group">
                            <label htmlFor="example-email" className="col-md-12">
                              Email
                            </label>
                            <div className="col-md-12">
                              <input
                                type="email"
                                disabled
                                placeholder={data.email}
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
                                placeholder={data.phone_number}
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

                      </div>
                    </div>
                  </div>
                  </form>
                  {/* Column */}
              </div>
            </Content>
          </>
          );
};

          export default Profile;
