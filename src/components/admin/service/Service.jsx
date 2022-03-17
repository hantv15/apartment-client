import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Content from '../../core/Content'
import { getService } from '../../api/Apartment'

const Service = () => {
    const [services, setServices] = useState([]);
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        const getServices = async () => {
            try {
                const { data } = await getService(id);
                setServices(data.data[0]);
                console.log(data.data);
            } catch (error) {
                console.log(error);
            }
        };
        getServices();
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
                      <option value="2" selected="">March</option>
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
                      <th>Tên dịch vụ</th>
                      <th>Đơn giá</th>
                      <th>Số lượng</th>
                      <th>Tổng giá</th>
                    </tr>
                  </thead>
                  <tbody>
                    {services.map((item, index) => (
                      <tr key={item}>
                        <td class="text-center" value={item.id}>{index + 1}</td>
                        <td class="txt-oflo">{item.name}</td>
                        <td class="txt-oflo">{item.price}</td>
                        <td><span class="text-success">{item.description}</span></td>
                 
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
    )
}

export default Service