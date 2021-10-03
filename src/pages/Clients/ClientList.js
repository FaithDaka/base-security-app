import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import LoadSpinner from "../../components/Handlers/Loadspinner";
import Pagination from "../../components/Pagination";
import API from "../../helpers/api";
import AlertDialog from "../../utils/Dialog";
import Deploy from "./Deploy";
import Client from "./index";
import Modal from "../../components/Modal";

const ClientList = () => {
  const [clients, setClients] = useState([]);
  const [open, setOpen] = useState(false);
  const [dId, setDId] = useState();
  const [userId, setUserId] = useState();
  const [deploy, setDeploy] = useState();
  const [clientName, setClientName] =useState('')
  const user = JSON.parse(localStorage.getItem("user")).user;

  const [currentpage, setCurrentPage] = useState(1);
  const [clientsPerPage] = useState(10);
  const lastClient = currentpage * clientsPerPage;
  const firstClient = lastClient - clientsPerPage;
  const currentClients = clients.slice(firstClient, lastClient);
  const totalClients = clients.length;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const hideAlert = () => setShowAlert(false);

  const openDeploy = (id, name) => {
    setClientName(name)
    setUserId(id);
    setDeploy(true);
  };
  const closeDeploy = () => setDeploy(false);

  const handleOpen = () => setOpen(true);
  const handleNo = () => setOpen(false);
  const handleDelete = (id) => {
    setDId(id);
    handleOpen();
  };

  const getClients = async () => {
    setLoading(true);
    try {
      const res = await API.get("/api/client");
      console.log("Clients Backend ===>", res);
      setClients(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error", error);
    }
  };

  const history = useHistory();

  const addClient = () => {
    setLoading(true);
    setTimeout(() => {
      history.push(`/admin/${user._id}/clientele/add_new`);
    }, 1000);
  };

  const updateClient = (id) => {
    setLoading(true);
    setTimeout(() => {
      history.push(`/admin/${user._id}/clientele/update/${id}`);
    }, 1000);
  };

  const getProfile = (id) => {
    setLoading(true);
    setTimeout(() => {
      history.push(`/admin/${user._id}/clientele/profile/${id}`);
    }, 1000);
  };

  const deleteClient = async () => {
    setLoading(true);
    await API.delete(`/api/client/${dId}`)
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
    getClients();
  };

  useEffect(() => {
    getClients();
  }, []);

  return (
    <Client>
      <Modal show={deploy} close={closeDeploy} title={`Deploy to ${clientName}`}>
        <Deploy close={closeDeploy} clients={()=>getClients()} id={userId} />
      </Modal>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
              <h4 className="mb-sm-0 font-size-18">clients</h4>
              <button
                onClick={addClient}
                type="button"
                className="btn btn-success btn-rounded waves-effect waves-light mb-2 me-2"
              >
                <i className="fa fa-plus-circle me-1"></i> Add New Client
              </button>
            </div>
          </div>
        </div>
        <div className="row justify-content-around visual-card">
          <div className="col-lg-4 col-sm-6 mt-3 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <span>
                    <h2 className="text-info font-size-70">10</h2>
                    <span className="text-muted font-size-14 text-uppercase">
                      Premise Deployments
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mt-3 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <span>
                    <h2 className="text-danger font-size-70">30</h2>
                    <span className="text-muted font-size-14 text-uppercase">
                      Undeployed premises
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AlertDialog open={open} Yes={() => deleteClient()} No={handleNo} />
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-row mb-2 justify-content-end">
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
                </div>
                <div className="table-responsive mt-3">
                  <table className="table align-middle table-nowrap table-check table-bordered table-striped">
                    {loading && <LoadSpinner />}
                    <thead className="table-dark">
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
                        <th className="align-middle"> Name</th>
                        <th className="align-middle"> Email</th>
                        <th className="align-middle"> Phone</th>
                        <th className="align-middle"> Location</th>
                        <th className="align-middle"> </th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentClients.length > 0 ? (
                        currentClients.map((client) => (
                          <tr key={client._id} className="tr-body">
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
                                onClick={() => getProfile(client._id)}
                              >
                                {client.fname} {client.lname}
                              </span>
                              <span onClick={() => openDeploy(client._id, client.fname)} className="ml-3 td-hover">
                                <i className="float-right fas fa-user-lock font-size-16 text-info"></i>
                              </span>
                            </td>
                            <td className="tr_email">{client.email}</td>
                            <td>{client.phone}</td>
                            <td>{client.address}</td>
                            <td>
                              <div className="row ml-2">
                                <span
                                  title="Update details"
                                  style={{
                                    marginRight: "20px",
                                    color: "green",
                                  }}
                                  onClick={() => updateClient(client._id)}
                                >
                                  <i className="fas fa-edit action" />
                                </span>
                                <span
                                  style={{ color: "red" }}
                                  title="Delete Client"
                                  onClick={() => handleDelete(client._id)}
                                >
                                  <i className="far fa-trash-alt action" />
                                </span>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td></td>
                          <span className="text-muted font-size-15 text-align-center text-capitalize">
                            No clients registered yet!
                          </span>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Pagination
          productsPerPage={clientsPerPage}
          totalProducts={totalClients}
          paginate={paginate}
        />
      </div>
    </Client>
  );
};

export default ClientList;
