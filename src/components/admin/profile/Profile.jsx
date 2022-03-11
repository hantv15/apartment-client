import Content from '../../core/Content';
import {  isAuthenticated } from "../../auth";

const Profile = () => {

const { data } = isAuthenticated();

  return (
    <>
      <Content>
        <div className="page-wrapper" >

          <div className="container-fluid">

            <div className="row page-titles">
              <div className="col-md-5 align-self-center">
                <h4 className="text-themecolor">Profile</h4>
              </div>
              <div className="col-md-7 align-self-center text-right">
                <div className="d-flex justify-content-end align-items-center">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                    <li className="breadcrumb-item active">Profile</li>
                  </ol>
                  <button type="button" className="btn btn-success d-none d-lg-block m-l-15"> Upgrade To
                    Pro</button>
                </div>
              </div>
            </div>

            {/* Row */}
            <div className="row">
              {/* Column */}
              <div className="col-lg-4 col-xlg-3 col-md-5">
                <div className="card">
                  <div className="card-body">
                    <center className="m-t-30"> <img src="dist/images/users/5.jpg" className="img-circle" width={150} />
                      <h4 className="card-title m-t-10">Hanna Gover</h4>
                      <h6 className="card-subtitle">Accoubts Manager Amix corp</h6>
                      <div className="row text-center justify-content-md-center">
                        <div className="col-4"><a href="javascript:void(0)" className="link"><i className="icon-people" />
                          <font className="font-medium">254</font>
                        </a></div>
                        <div className="col-4"><a href="javascript:void(0)" className="link"><i className="icon-picture" />
                          <font className="font-medium">54</font>
                        </a></div>
                      </div>
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
                        <label className="col-md-12">Họ tên</label>
                        <div className="col-md-12">
                          <input type="text" className="form-control form-control-line" value={data.name} />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="example-email" className="col-md-12">Email</label>
                        <div className="col-md-12">
                          <input type="email" className="form-control form-control-line" value={data.email} />
                        </div>
                      </div>
                  
                      <div className="form-group">
                        <label className="col-md-12">Số điện thoại</label>
                        <div className="col-md-12">
                          <input type="text" className="form-control form-control-line" value={data.phone_number} />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-md-12">Tòa nhà</label>
                        <div className="col-md-12">
                          <input type="text" className="form-control form-control-line" value={data.building_id} />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-md-12">Số nhà</label>
                        <div className="col-md-12">
                          <input type="text" className="form-control form-control-line" value={data.apartment_id} />
                        </div>
                      </div>
                      {/* <div className="form-group">
                        <label className="col-md-12">Message</label>
                        <div className="col-md-12">
                          <textarea rows={5} className="form-control form-control-line" defaultValue={""} />
                        </div>
                      </div> */}
                      {/* <div className="form-group">
                        <label className="col-sm-12">Select Country</label>
                        <div className="col-sm-12">
                          <select className="form-control form-control-line">
                            <option>London</option>
                            <option>India</option>
                            <option>Usa</option>
                            <option>Canada</option>
                            <option>Thailand</option>
                          </select>
                        </div>
                      </div> */}
                      <div className="form-group">
                        <div className="col-sm-12">
                          <button className="btn btn-success">Cập nhập</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* Column */}
            </div>

          </div>

        </div>
      </Content>
    </>
  )
}

export default Profile