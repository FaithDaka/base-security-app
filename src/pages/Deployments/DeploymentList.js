import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import LoadSpinner from "../../components/Handlers/Loadspinner";
import Pagination from "../../components/Pagination";
import API from "../../helpers/api";
import AlertDialog from "../../utils/Dialog";
import Deployment from "./index";

const DeploymentList = () => {
  const [deploys, setDeploys] = useState([]);
  const [open, setOpen] = useState(false);
  const [dId, setDId] = useState();
  const user = JSON.parse(localStorage.getItem("user")).user;

//   const [currentpage, setCurrentPage] = useState(1);
//   const [clientsPerPage] = useState(10);
//   const lastClient = currentpage * clientsPerPage;
//   const firstClient = lastClient - clientsPerPage;
//   const currentClients = deploys.slice(firstClient, lastClient);
//   const totalClients = deploys.length;

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const hideAlert = () => setShowAlert(false);

  const handleOpen = () => setOpen(true);
  const handleNo = () => setOpen(false);
  const handleDelete = (id) => {
    setDId(id);
    handleOpen();
  };

  const getDeployments = async () => {
    setLoading(true);
    try {
      const res = await API.get("/api/deployment");
      console.log("Deployments Backend ===>", res);
      setDeploys(res.data.deployments);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error", error);
    }
  };

  const history = useHistory();

  const addDeployment = () => {
    setLoading(true);
    setTimeout(() => {
      history.push('/admin/deployment/new');
    }, 1000);
  };

  const updateClient = (id) => {
    setLoading(true);
    setTimeout(() => {
      history.push(`/admin/${user._id}/clientele/update/${id}`);
    }, 2000);
  };

  const getProfile = (id) => {
    setLoading(true);
    setTimeout(() => {
      history.push(`/admin/${user._id}/clientele/profile/${id}`);
    }, 2000);
  };

  const deleteClient = async () => {
    setLoading(true);
    await API.delete(`/api/deploy/${dId}`)
      .then(() => {
        console.log("Client deleted");
        setLoading(false);
        setSuccess(true);
        setShowAlert(true);
      })
      .catch((error) => {
        console.log("Client delete error", error);
        setLoading(false);
        setError(true);
        setShowAlert(true);
      });
    setOpen(false);
    getDeployments();
  };

  useEffect(()=>{
      getDeployments();
  }, [])

  return (
    <Deployment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
              <h4 className="mb-sm-0 font-size-18">Guard Deployments</h4>
            </div>
          </div>
        </div>
        <AlertDialog open={open} Yes={() => deleteClient()} No={handleNo} />
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-row mb-2 justify-content-between">
                  <div className="col-sm-4">
                    <div className="search-box me-2 mb-2 d-inline-block">
                      <div className="position-relative">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search..."
                        />
                        <i className="fa fa-search search-icon mt-3 font-size-13"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="text-sm-end" style={{ textAlign: "right" }}>
                      <button
                        onClick={addDeployment}
                        type="button"
                        className="btn btn-success btn-rounded waves-effect waves-light mb-2 me-2"
                      >
                        <i className="fa fa-plus-circle me-1"></i> Deploy Guard
                      </button>
                    </div>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table align-middle table-nowrap table-check table-bordered">
                    {loading && <LoadSpinner />}
                    <thead className="table-primary">
                      <tr className="tr-head">
                        <th style={{ width: "20px" }} className="align-middle">
                          <div className="form-check font-size-16">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="checkAll"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkAll"
                            ></label>
                          </div>
                        </th>
                        <th className="align-middle"> Client</th>
                        <th className="align-middle"> Site</th>
                        <th className="align-middle"> Location</th>
                        <th className="align-middle"> Address</th>
                        <th className="align-middle"> Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {deploys.map((deploy) => (
                        <tr key={deploy._id} className="tr-body">
                          <td>
                            <div className="form-check font-size-16">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="orderidcheck01"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="orderidcheck01"
                              ></label>
                            </div>
                          </td>
                          <td>
                            <span
                              className="td-hover"
                              onClick={() => getProfile(deploy._id)}
                            >
                              {deploy.client.fname} {deploy.client.lname}
                            </span>
                          </td>
                          <td className="tr_email">{deploy.site}</td>
                          <td>{deploy.location}</td>
                          <td>{deploy.address}</td>
                          <td>
                            <div className="row ml-2">
                              <span
                                title="Update details"
                                style={{ marginRight: "20px", color: "green" }}
                                onClick={() => updateClient(deploy._id)}
                              >
                                <i className="fas fa-edit action" />
                              </span>
                              <span
                                style={{ color: "red" }}
                                title="Delete Client"
                                onClick={() => handleDelete(deploy._id)}
                              >
                                <i className="far fa-trash-alt action" />
                              </span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Pagination
          productsPerPage={clientsPerPage}
          totalProducts={totalClients}
          paginate={paginate}
        /> */}
      </div>
    </Deployment>
  );
};

export default DeploymentList;
