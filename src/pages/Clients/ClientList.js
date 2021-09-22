import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import LoadSpinner from "../../components/Handlers/Loadspinner";
import Pagination from "../../components/Pagination";
import API from "../../helpers/api";
import AlertDialog from "../../utils/Dialog";
import Client from "./index";

const ClientList = () => {
  const [clients, setClients] = useState([]);
  const [open, setOpen] = useState(false);
  const [dId, setDId] = useState();
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

  const handleOpen = () => setOpen(true);
  const handleNo = () => setOpen(false);
  const handleDelete = (id) => {
    setDId(id);
    handleOpen();
  };

  const getClients = async () => {
    setLoading(true);
    try {
      const res = await API.get("/api/clients");
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
    }, 2000);
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
  useEffect(()=>{
    //   getClients();
  }, [])

  return (
    <Client>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
              <h4 className="mb-sm-0 font-size-18">Available clients</h4>
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
                        onClick={addClient}
                        type="button"
                        className="btn btn-success btn-rounded waves-effect waves-light mb-2 me-2"
                      >
                        <i className="fa fa-plus-circle me-1"></i> Add New Client
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
                        <th className="align-middle"> Name</th>
                        <th className="align-middle"> Email</th>
                        <th className="align-middle"> Phone</th>
                        <th className="align-middle"> Location</th>
                        <th className="align-middle"> Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentClients>0 && currentClients.map((client) => (
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
                          </td>
                          <td className="tr_email">{client.email}</td>
                          <td>0{client.phone}</td>
                          <td>
                            <div className="row ml-2">
                              <span
                                title="Update details"
                                style={{ marginRight: "20px", color: "green" }}
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
                      ))}
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