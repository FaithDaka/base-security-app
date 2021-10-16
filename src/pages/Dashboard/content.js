import React, { useEffect, useState } from "react";
import img from "../../assets/img/plainlogo.png";
import LoadSpinner from "../../components/Handlers/Loadspinner";
import API from "../../helpers/api";
import avatar from "../../assets/img/avatar.jpg";
import { Link } from "react-router-dom";

const Content = ({ history }) => {
  const [guards, setGuards] = useState([]);
  const [deployments, setDeployments] = useState([]);
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem("user")).user;

  const getGuards = async () => {
    setLoading(true)
    try {
      const res = await API.get("/api/guard");
      console.log("Guard Users Backend ===>", res);
      setGuards(res.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };
  const Deployments = async () => {
    setLoading(true)
    try {
      const res = await API.get("/api/deployment");
      console.log("Deployments ===>", res);
      setDeployments(res.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };
  const getClients = async () => {
    setLoading(true)
    try {
      const res = await API.get("/api/client");
      console.log("Clients ===>", res);
      setClients(res.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };
  

  useEffect(() => {
    getGuards();
    Deployments();
    getClients();
  }, []);

  
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
              <div className="bg-soft bg-light">
                <div className="row">
                  <div className="col-8">
                    <div className="p-3">
                      <h5 className="text-info">Welcome Back !</h5>
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
              {loading && <LoadSpinner/>}
              <div className="card-body pt-0">
                <div className="row align-self-end">
                  <div className="col-sm-4">
                    <div className="avatar-md profile-user-wid mb-4">
                      <img
                        src={avatar}
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
                          <h5 className="font-size-15">25</h5>
                          <p className="text-muted mb-0">Reports</p>
                        </div>
                        <div className="col-6">
                          <h5 className="font-size-15">5</h5>
                          <p className="text-muted mb-0">Alerts</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Link to={`/admin/${user._id}/profile`}
                          href="#"
                          className="btn btn-primary waves-effect waves-light btn-sm"
                        >
                          View Profile{" "}
                          <i className="fa fa-arrow-right ms-1"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="row">
              <div className="col-lg-4 col-md-6 mt-3 mb-3">
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
                        <h4 className="mb-0 font-size-20">{guards.length}</h4>
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
              <div className="col-lg-4 col-md-6 mt-3 mb-3">
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
                          Clients
                        </p>
                        <h4 className="mb-0 font-size-20">{clients.length}</h4>
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
              <div className="col-lg-4 col-md-6 mt-3 mb-3">
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
                          Deployments
                        </p>
                        <h4 className="mb-0 font-size-20">{deployments.length}</h4>
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
            </div>
          </div>
        </div>
        <div className="row ml-2 mt-4 mr-2 mb-4">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title mb-4 title">Visible Guards</h4>
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
                              className="progress-bar bg-secondary rounded"
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
                              className="progress-bar bg-secondary rounded"
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
                              className="progress-bar bg-secondary rounded"
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
        <div className="row">
          <div className="col-xl-6 col-lg-6 mb-3 mt-4">
            <div className="card overflow-hidden">
              <div className="card-body">
                <div className="d-flex flex-row justify-content-between">
                  <h4 className="card-title mb-4 title"> Clocked In</h4>
                  <span style={{ fontSize: "23px"}}>
                    <i className="fas fa-user-clock text-primary"></i>
                  </span>
                </div>
                <table className="table align-middle table-nowrap">
                  <thead>
                    <tr>
                      <th className='th'>Name</th>
                      <th className='th'>Location</th>
                      <th className='th'>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <span>No Guards Yet</span>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 mb-3 mt-4">
            <div className="card overflow-hidden">
              <div className="card-body">
              <div className="d-flex flex-row justify-content-between">
                  <h4 className="card-title mb-4 title"> Clocked Out</h4>
                  <span style={{ fontSize: "23px"}}>
                    <i className="fas fa-user-times text-danger"></i>
                  </span>
                </div>
                <table className="table align-middle table-nowrap">
                  <thead>
                    <tr>
                      <th className='th'>Name</th>
                      <th className='th'>Location</th>
                      <th className='th'>Time</th>
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
        <div className="row">
          <div className="col-xl-6 col-lg-6 mb-3 mt-4">
            <div className="card overflow-hidden">
              <div className="card-body">
                <div className="d-flex flex-row justify-content-between">
                  <h4 className="card-title mb-4 title"> Alerts</h4>
                  <span style={{ fontSize: "23px"}}>
                    <i className="fas fa-exclamation-triangle text-warning"></i>
                  </span>
                </div>
                <table className="table align-middle table-nowrap">
                  <thead>
                    <tr>
                      <th className='th'>Name</th>
                      <th className='th'>Type</th>
                      <th className='th'>Location</th>
                      <th className='th'>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <span>No Alerts Yet</span>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 mb-3 mt-4">
            <div className="card overflow-hidden">
              <div className="card-body">
              <div className="d-flex flex-row justify-content-between">
                  <h4 className="card-title mb-4 title"> Reports</h4>
                  <span style={{ fontSize: "23px"}}>
                    <i className="fas fa-calendar text-success"></i>
                  </span>
                </div>
                <table className="table align-middle table-nowrap">
                  <thead>
                    <tr>
                      <th className='th'>Name</th>
                      <th className='th'>Report</th>
                      <th className='th'>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <span>No Reports Yet</span>
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
