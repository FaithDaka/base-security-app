import React from "react";
import img from "../../assets/img/plainlogo.png";

const Content = ({ history }) => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
              <h4 className="mb-sm-0 font-size-18">Dashboard</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12 mb-3">
            <div className="card overflow-hidden">
              <div className="bg-soft bg-danger">
                <div className="row">
                  <div className="col-8">
                    <div className="p-3">
                      <h5 className="text-warning">Welcome Back !</h5>
                      <p>Your Dashboard</p>
                    </div>
                  </div>
                  <div
                    className="col-4 align-self-end"
                    style={{ textAlign: "right" }}
                  >
                    <img
                      src={img}
                      alt=""
                      className="img-fluid"
                      style={{ height: "240px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="card-body pt-0">
                <div className="row align-self-end">
                  <div className="col-sm-4">
                    <div className="avatar-md profile-user-wid mb-4">
                      <img
                        src={img}
                        alt=""
                        className="img-thumbnail rounded-circle"
                      />
                    </div>
                    <h5 className="font-size-15 text-truncate">Henry Price</h5>
                    <p className="text-muted mb-0 text-truncate">Admin</p>
                  </div>
                  <div className="col-sm-8">
                    <div className="pt-4">
                      <div className="row">
                        <div className="col-6">
                          <h5 className="font-size-15">125</h5>
                          <p className="text-muted mb-0">Reports</p>
                        </div>
                        <div className="col-6">
                          <h5 className="font-size-15">45</h5>
                          <p className="text-muted mb-0">Tasks</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <a
                          href="#"
                          className="btn btn-primary waves-effect waves-light btn-sm"
                        >
                          View Profile{" "}
                          <i className="fa fa-arrow-right ms-1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-12 mt-3 mb-3">
            <div className="row">
              <div className="col-md-3">
                <div className="card mini-stats-wid">
                  <div className="card-body">
                    <div className="d-flex">
                      <div className="flex-grow-1">
                        <p
                          className="text-muted fw-medium"
                          style={{
                            borderBottom: "0.2px solid #ddd",
                            width: "90%",
                          }}
                        >
                          Guards
                        </p>
                        <h4 className="mb-0">1,235</h4>
                      </div>
                      <div className="flex-shrink-0 align-self-center">
                        <div className="mini-stat-icon avatar-sm rounded-circle bg-primary">
                          <span className="avatar-title">
                            <i className="fas fa-user-ninja font-size-24"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card mini-stats-wid">
                  <div className="card-body">
                    <div className="d-flex">
                      <div className="flex-grow-1">
                        <p
                          className="text-muted fw-medium"
                          style={{
                            borderBottom: "0.2px solid #ddd",
                            width: "90%",
                          }}
                        >
                          Reports
                        </p>
                        <h4 className="mb-0">17</h4>
                      </div>
                      <div className="flex-shrink-0 align-self-center">
                        <div className="avatar-sm rounded-circle bg-primary mini-stat-icon">
                          <span className="avatar-title rounded-circle bg-success">
                            <i className="fas fa-calendar font-size-24"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card mini-stats-wid">
                  <div className="card-body">
                    <div className="d-flex">
                      <div className="flex-grow-1">
                        <p
                          className="text-muted fw-medium"
                          style={{
                            borderBottom: "0.2px solid #ddd",
                            width: "90%",
                          }}
                        >
                          Alerts
                        </p>
                        <h4 className="mb-0">5</h4>
                      </div>
                      <div className="flex-shrink-0 align-self-center">
                        <div className="avatar-sm rounded-circle bg-primary mini-stat-icon">
                          <span className="avatar-title rounded-circle bg-danger">
                            <i className="fas fa-exclamation-triangle font-size-24"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card mini-stats-wid">
                  <div className="card-body">
                    <div className="d-flex">
                      <div className="flex-grow-1">
                        <p
                          className="text-muted fw-medium"
                          style={{
                            borderBottom: "0.2px solid #ddd",
                            width: "90%",
                          }}
                        >
                          Tasks
                        </p>
                        <h4 className="mb-0">500</h4>
                      </div>
                      <div className="flex-shrink-0 align-self-center ">
                        <div className="avatar-sm rounded-circle bg-primary mini-stat-icon">
                          <span className="avatar-title rounded-circle bg-primary">
                            <i className="fas fa-tasks font-size-24"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row ml-2 mt-4 mr-2 mb-4">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title mb-4">Visible Guards</h4>
                <div className="text-center">
                  <div className="mb-4">
                    <i className="fa fa-map-pin text-primary display-4"></i>
                  </div>
                  <h3>100</h3>
                  <p>Kisugu</p>
                </div>
                <div className="table-responsive mt-4">
                  <table className="table align-middle table-nowrap">
                    <tbody>
                      <tr>
                        <td style={{ width: "30%" }}>
                          <p className="mb-0">Kansanga</p>
                        </td>
                        <td style={{ width: "25%" }}>
                          <h5 className="mb-0">1,456</h5>
                        </td>
                        <td>
                          <div className="progress bg-transparent progress-sm">
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "94%" }}
                              aria-valuenow="94"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="mb-0">Ntinda</p>
                        </td>
                        <td>
                          <h5 className="mb-0">1,123</h5>
                        </td>
                        <td>
                          <div className="progress bg-transparent progress-sm">
                            <div
                              className="progress-bar bg-success rounded"
                              role="progressbar"
                              style={{ width: "82%" }}
                              aria-valuenow="82"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="mb-0">Kawempe</p>
                        </td>
                        <td>
                          <h5 className="mb-0">1,026</h5>
                        </td>
                        <td>
                          <div className="progress bg-transparent progress-sm">
                            <div
                              className="progress-bar bg-warning rounded"
                              role="progressbar"
                              style={{ width: "70%" }}
                              aria-valuenow="70"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3 mt-4">
          <div className="col-xl-6">
            <div className="card overflow-hidden">
              <div className="card-body">
                <div className="d-flex flex-row justify-content-between">
                  <h4 className="card-title mb-4"> Clocked In</h4>
                  <span style={{ fontSize: "23px"}}>
                    <i className="fas fa-user-clock text-primary"></i>
                  </span>
                </div>
                <table className="table align-middle table-nowrap">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Location</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <span>No Guards Yet</span>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="card overflow-hidden">
              <div className="card-body">
              <div className="d-flex flex-row justify-content-between">
                  <h4 className="card-title mb-4"> Clocked Out</h4>
                  <span style={{ fontSize: "23px"}}>
                    <i className="fas fa-user-times text-danger"></i>
                  </span>
                </div>
                <table className="table align-middle table-nowrap">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Location</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <span>No Guards Yet</span>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
