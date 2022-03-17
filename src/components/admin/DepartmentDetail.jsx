import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../api/Apartment";
import Content from "../core/Content";
import { DepartmentDetail } from "./detailDepartment/Department";

const ApartmentDetail = () => {
  const { id } = useParams();
  const [department, setDepartment] = useState({});
  const [showBasic, setShowBasic] = useState(true);

  const statusOptions = [
    {
      value: 1,
      name: "Active",
    },
    {
      value: 2,
      name: "InActive",
    },
  ];

  useEffect(() => {
    const getDepartment = async () => {
      try {
        const { data } = await get(id);
        setDepartment(data.data[0]);
      console.log(data.data[0]);
      } catch (error) {
        console.log(error);
      }
    };

    getDepartment();
  }, []);
  

  const addDepartment = () => {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header p-2">
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="javascript:void(0)"
                    data-toggle="tab"
                    onClick={() => {
                      setShowBasic(true);
                    }}
                  >
                    Thông tin cơ bản
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="javascript:void(0)"
                    data-toggle="tab"
                    onClick={() => {
                      setShowBasic(false);
                    }}
                  >
                    Tài chính
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="javascript:void(0)"
                    data-toggle="tab"
                    onClick={() => {
                      setShowBasic(false);
                    }}
                  >
                    Thẻ cư dân
                  </a>
                </li>
              </ul>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              {showBasic && (
                <DepartmentDetail
                  department={department}
                  statusOptions={statusOptions}
                />
              )}
           
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
      </div>
    );
  };
  return <Content title="Chi tiết căn hộ">{addDepartment()}</Content>;
};

export default ApartmentDetail;