import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getApartmentFinace, getBillDetail } from "../../api/Apartment";
// import Finace from "../finace/Finace";
import Content from "../../core/Content";
import { isAuthenticated } from "../../auth";

const BillDetail = () => {
  console.log("isAuthenticated: ", isAuthenticated());
  const [billDetailUser, setBillDetailUser] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getBillDetailUser = async () => {
      try {
        const res = await getApartmentFinace(id);
        const bill_id = res.data.data[0].id;
        const { data } = await getBillDetail(id, bill_id);
        setBillDetailUser(data.data);
        console.log("getBillDetail: ", data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBillDetailUser();
  }, []);

  return (
    <>
      <Content>
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <div class="d-flex">
                  <div>
                    <h5 class="card-title">Sales Overview</h5>
                    <h6 class="card-subtitle">Check the monthly sales </h6>
                  </div>
                  <div class="ml-auto">
                    <select class="custom-select b-0">
                      <option>January</option>
                      <option value="1">February</option>
                      <option value="2" selected="">
                        March
                      </option>
                      <option value="3">April</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="table-responsive">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th class="text-center">#</th>
                      <th>Tên hóa đơn</th>
                      <th>Tên chủ hộ</th>
                      <th>Đơn giá</th>
                      <th>Số lượng</th>
                      <th>Tổng giá</th>
                    </tr>
                  </thead>
                  <tbody>
                    {billDetailUser.map((item, index) => (
                      <tr key={item}>
                        <td class="text-center" value={item.id}>
                          {index + 1}
                        </td>
                        <td class="txt-oflo">{item.ten_hoa_don}</td>
                        <td class="txt-oflo">{item.ten_dich_vu}</td>
                        <td>
                          <span class="text-success">{item.don_gia}</span>
                        </td>
                        <td>
                          <span class="text-success">{item.quantity}</span>
                        </td>
                        <td>
                          <span class="text-success">{item.total_price}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
};

export default BillDetail;
