import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { get, getService, getApartmentFinace, getBillUnpaid, getBillPaid } from "../../api/Apartment";
import { isAuthenticated } from "../../auth";
import Content from "../../core/Content";

const Apartment = () => {
  const [apartment, setApartment] = useState({});
  const [services, setServices] = useState({});
  const [finances, setFinances] = useState({});
  const [billPaids, setBillPaids] = useState({});
  const [billUnpaids, setBillUnpaid] = useState({});
  const { data } = isAuthenticated();
  const idApartment = data.apartment_id;


  // service
  useEffect(() => {
    const getServices = async () => {
      try {
        const { data } = await getService(idApartment);
        setServices(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getServices();
  }, []);

  // căn hộ
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


  //bill

  useEffect(() => {
    try {
      const getFinances = async () => {
        const { data } = await getApartmentFinace(idApartment);
        setFinances(data.data[0]);
        console.log(data.data[0]);
      };
      getFinances();
    } catch (error) {
      console.log(error.message);
    }
  }, [idApartment]);

  //bill paid
  useEffect(() => {
    try {
      const getBillPaids = async () => {
        const { data } = await getBillPaid(idApartment);
        setBillPaids(data.data);
        console.log(data.data);
      };
      getBillPaids();
    } catch (error) {
      console.log(error.message);
    }
  }, [idApartment]);

  //bill unpaid
  useEffect(() => {
    try {
      const getBillUnpaids = async () => {
        const { data } = await getBillUnpaid(idApartment);
        setBillUnpaid(data.data[0]);
        console.log(data.data[0]);
      };
      getBillUnpaids();
    } catch (error) {
      console.log(error.message);
    }
  }, []);


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
                    Hóa đơn
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
              {/* Hoa don da thanh toan */}
              <div className="tab-content">
                <div className="tab-pane active" id="settings" role="tabpanel">
                  <div className="card-body">
                    <h3>Hoá đơn đã thanh toán</h3>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>

                          <tr>
                            <th>STT</th>
                            <th>Tên Hóa đơn</th>
                            <th>Tên chủ hộ</th>
                            <th>Căn hộ</th>
                            <th>Tổng giá</th>
                            <th>Số lượng</th>
                          </tr>
                        </thead>
                        <tbody>
                          {" "}
                          <tr>
                            <td>{billPaids.id}</td>
                            <td>{billPaids.ten_hoa_don}</td>
                            <td>{billPaids.ten_chu_ho}</td>
                            <td>{billPaids.apartment_id}</td>
                            <td>{billPaids.amount}</td>
                            <td>{billPaids.so_luong_hdct}</td>
                           
                          </tr>
                          {" "}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="card-body">
                    <h3>Hoá đơn chưa thanh toán</h3>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>

                          <tr>
                            <th>STT</th>
                            <th>Tên Hóa đơn</th>
                            <th>Tên chủ hộ</th>
                            <th>Căn hộ</th>
                            <th>Tổng giá</th>
                            <th>Số lượng</th>
                          </tr>
                        </thead>
                        <tbody>
                          {" "}
                          <tr>
                            <td>{billUnpaids.id}</td>
                            <td>{billUnpaids.ten_hoa_don}</td>
                            <td>{billUnpaids.ten_chu_ho}</td>
                            <td>{billUnpaids.apartment_id}</td>
                            <td>{billUnpaids.amount}</td>
                            <td>{billUnpaids.so_luong_hdct}</td>
                           
                          </tr>
                          {" "}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/*second tab*/}
                <div className="tab-pane" id="profile" role="tabpanel">

                  <div className="card-body">
                    <h3> Tổng Hoá đơn </h3>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>

                          <tr>
                            <th>STT</th>
                            <th>Tên Hóa đơn</th>
                            <th>Tên chủ hộ</th>
                            <th>Căn hộ</th>
                            <th>Tổng giá</th>
                            <th>Số lượng</th>
                          </tr>
                        </thead>
                        <tbody>
                          {" "}
                          <tr>
                            <td>{finances.id}</td>
                            <td>{finances.ten_hoa_don}</td>
                            <td>{finances.ten_chu_ho}</td>
                            <td>{finances.apartment_id}</td>
                            <td>{finances.amount}</td>
                            <td>{finances.so_luong_hdct}</td>
                            <td className="p-2 m-0">
                              <Link to={`/bill/${idApartment}`} class="btn btn-rounded btn-outline-success">Chi tiết</Link>
                            </td>
                          </tr>
                          {" "}
                        </tbody>
                      </table>
                    </div>
                  </div>




                </div>
                <div className="tab-pane" id="home" role="tabpanel">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>

                          <tr>
                            <th>STT</th>
                            <th>Tên dịch vụ</th>
                            <th>Gía</th>
                            <th>Số lượng</th>
                          </tr>
                        </thead>
                        <tbody>
                          {" "}
                          <tr>
                            <td>{services.id}</td>
                            <td>{services.name}</td>
                            <td>{services.price}</td>
                            <td>{services.description}</td>

                          </tr>
                          {" "}
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
        {/* Column */}
      </Content>
    </>
  );
};

export default Apartment;
