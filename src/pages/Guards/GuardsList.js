/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import LoadSpinner from "../../components/Handlers/Loadspinner";
import API from "../../helpers/api";
import AlertDialog from "../../utils/Dialog";
import Guards from "./index";
import Pagination from "../../components/Pagination";
import SweetAlert from "react-bootstrap-sweetalert";
import AssignGun from "./AssignGun";
import Modal from "../../components/Modal";

const GuardsList = () => {
  const [open, setOpen] = useState(false);
  const [dId, setDId] = useState();
  const [aId, setAId] = useState();
  const [guardUsers, setGuardUsers] = useState([]);
  const [assign, setAssign] = useState();
  const user = JSON.parse(localStorage.getItem("user")).user;

  const [currentpage, setCurrentPage] = useState(1);
  const [guardsPerPage] = useState(10);
  const lastGuard = currentpage * guardsPerPage;
  const firstGuard = lastGuard - guardsPerPage;
  const currentGuards = guardUsers.slice(firstGuard, lastGuard);
  const totalGuards = guardUsers.length;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const hideAlert = () => setShowAlert(false);

  const handleOpen = () => setOpen(true);
  const handleNo = () => setOpen(false);

  const openAssign = (id) => {
    setAId(id);
    setAssign(true);
  };
  const closeAssign = () => setAssign(false);

  const handleDelete = (id) => {
    setDId(id);
    handleOpen();
  };
  const getGuards = async () => {
    setLoading(true);
    try {
      const res = await API.get("/api/guard");
      console.log("Guard Users Backend ===>", res);
      setGuardUsers(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error", error);
    }
  };

  const history = useHistory();

  const addGuard = () => {
    setLoading(true);
    setTimeout(() => {
      history.push(`/admin/${user._id}/guards/add_new`);
    }, 2000);
  };

  const updateGuard = (id) => {
    setLoading(true);
    setTimeout(() => {
      history.push(`/admin/${user._id}/guards/update/${id}`);
    }, 2000);
  };

  const getProfile = (id) => {
    setLoading(true);
    setTimeout(() => {
      history.push(`/admin/${user._id}/guards/profile/${id}`);
    }, 2000);
  };

  const deleteGuard = async () => {
    setLoading(true);
    await API.delete(`/api/guard/${dId}`)
      .then(() => {
        console.log("Guard deleted");
        setLoading(false);
        setSuccess(true);
        setShowAlert(true);
      })
      .catch((error) => {
        console.log("Guard delete error", error);
        setLoading(false);
        setError(true);
        setShowAlert(true);
      });
    setOpen(false);
    getGuards();
  };

  useEffect(() => {
    getGuards();
  }, []);

  return (
    <Guards>
      <Modal show={assign} close={closeAssign} title="Assign Gun">
        <AssignGun close={closeAssign} guards={getGuards} id={aId} />
      </Modal>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
              <h4 className="mb-sm-0 font-size-18">Guards</h4>
            </div>
          </div>
        </div>
        <AlertDialog open={open} Yes={() => deleteGuard()} No={handleNo} />
        {showAlert && success && (
          <SweetAlert
            success
            onConfirm={() => hideAlert()}
            onCancel={() => hideAlert()}
            title="Guard Deleted!"
            timeout={3000}
          />
        )}
        {showAlert && error && (
          <SweetAlert
            danger
            onConfirm={() => hideAlert()}
            onCancel={() => hideAlert()}
            title="There was an error. Please try again!"
            timeout={3000}
          />
        )}
        <div className="row justify-content-around visual-card">
          <div className="col-lg-4 col-sm-6 mt-3 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <span>
                    <h2 className="text-info font-size-70">20</h2>
                    <span className="text-muted font-size-14 text-uppercase">
                      On-prem guards
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
                    <h2 className="text-secondary font-size-70">130</h2>
                    <span className="text-muted font-size-14 text-uppercase">
                      Off-prem guards
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
                      Armed guards
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
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
                        onClick={addGuard}
                        type="button"
                        className="btn btn-success btn-rounded waves-effect waves-light mb-2 me-2"
                      >
                        <i className="fa fa-plus-circle me-1"></i> Add New Guard
                      </button>
                    </div>
                  </div>
                </div>
                <div className="table-responsive">
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
                        <th className="align-middle"> Village</th>
                        <th className="align-middle"> Phone</th>
                        <th className="align-middle"> Sex</th>
                        <th className="align-middle"> Weapon</th>
                        <th className="align-middle"> Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentGuards > 0 ? (
                        currentGuards.map((guard) => (
                          <tr key={guard._id} className="tr-body">
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
                                onClick={() => getProfile(guard._id)}
                              >
                                {guard.fname} {guard.lname}
                              </span>
                              {guard.isAssignedGun === false ? (
                                <span onClick={() => openAssign(guard._id)}>
                                  <i className="float-right fas fa-flag-checkered"></i>
                                </span>
                              ) : (
                                <span></span>
                              )}
                            </td>
                            <td className="tr_email">{guard.village}</td>
                            <td>0{guard.phone}</td>
                            <td>{guard.sex}</td>
                            {guard.gun === null ? (
                              <td>Unassigned</td>
                            ) : (
                              <td>{guard.gunId}</td>
                            )}
                            <td>
                              <div className="row ml-2">
                                <span
                                  title="Update details"
                                  style={{
                                    marginRight: "20px",
                                    color: "green",
                                  }}
                                  onClick={() => updateGuard(guard._id)}
                                >
                                  <i className="fas fa-edit action" />
                                </span>
                                <span
                                  style={{ color: "red" }}
                                  title="Delete guard"
                                  onClick={() => handleDelete(guard._id)}
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
                            No guards registered yet!
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
          productsPerPage={guardsPerPage}
          totalProducts={totalGuards}
          paginate={paginate}
        />
      </div>
    </Guards>
  );
};

export default GuardsList;
