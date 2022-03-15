import React from 'react'
import Content from '../../core/Content'

const Bill = () => {
  return (
    <>
      <Content>
        <div className="page-wrapper">

          <div className="container-fluid">

            <div className="row page-titles">
              <div className="col-md-5 align-self-center">
                <h4 className="text-themecolor">Hóa đơn </h4>
              </div>
              <div className="col-md-7 align-self-center text-right">
                <div className="d-flex justify-content-end align-items-center">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                    <li className="breadcrumb-item active">Hóa đơn</li>
                  </ol>

                </div>
              </div>
            </div>

            <div className="row">
              {/* column */}
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Hóa đơn</h4>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Hóa đơn</th>
                            <th>Mã hóa đơn</th>
                            <th>Tổng tiền</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Điện</td>
                            <td>#000000000000</td>
                            <td>100.000.000</td>
                          </tr>


                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </Content>
    </>
  )
}

export default Bill