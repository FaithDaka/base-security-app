/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import LoadSpinner from "../../components/Handlers/Loadspinner";
import API from "../../helpers/api";
import AlertDialog from "../../utils/Dialog";
import Guards from "./index";
import Pagination from '../../components/Pagination'
import SweetAlert from "react-bootstrap-sweetalert";

const GuardsList = () => {
  const [open, setOpen] = useState(false);
  const [dId, setDId] = useState()
  const [guardUsers, setGuardUsers] = useState([]);
  const guards = guardUsers.filter((a) => a.role === "guard");

  const [currentpage, setCurrentPage] = useState(1);
  const [guardsPerPage] = useState(10);
  const lastGuard = currentpage * guardsPerPage;
  const firstGuard = lastGuard - guardsPerPage;
  const currentGuards = guards.slice(firstGuard, lastGuard);
  const totalGuards = guards.length;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const hideAlert = () => setShowAlert(false);

  const handleOpen = () => setOpen(true);
  const handleNo = () => setOpen(false);

  const handleDelete = (id) => {
  setDId(id)
  handleOpen();
  }
  const getGuards = async () => {
    setLoading(true);
    try {
      const res = await API.get("/api/user");
      console.log("Guard Users Backend ===>", res);
      setGuardUsers(res.data);
      setLoading(false);
    } 
    catch (error) {
      setLoading(false);
      console.log("error", error);
    }
  };

  const history = useHistory();

  const addGuard = () => {
    setLoading(true);
    setTimeout(() => {
      history.push('/guards/add');
    }, 2000);
  };

  const updateGuard = (id) => {
    setLoading(true);
    setTimeout(() => {
      history.push(`/guards/update/${id}`);
    }, 2000);
  };

  const getProfile =(id)=>{
    setLoading(true);
    setTimeout(() => {
      history.push(`guards/profile`)
    }, 2000);  
  }

  const deleteGuard = async() => {
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
              <h4 className="mb-sm-0 font-size-18">Guards</h4>
            </div>
          </div>
        </div>
        <AlertDialog open={open} Yes={()=>deleteGuard()} No={handleNo} />
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
                        <th className="align-middle"> Sex</th>
                        <th className="align-middle"> Status</th>
                        <th className="align-middle"> Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentGuards.map((guard)=>(
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
                        <td className="td-hover"
                        onClick={()=>getProfile(guard._id)}>{guard.fname} {guard.lname}</td>
                        <td className="tr_email">{guard.email}</td>
                        <td>0{guard.phone}</td>
                        <td>{guard.sex}</td>
                        <td>{guard.status}</td>
                        <td>
                          <div className="button-list">
                            <a
                              href="#"
                              className="btn-tab btn-sucess-rgba"
                              title="Update details"
                              style={{ marginRight: "20px", color: "green" }}
                              onClick={() => updateGuard(guard._id)}
                            >
                              <i className="far fa-edit" />
                            </a>
                            <a
                              href="#"
                              className="btn-tab btn-danger-rgba"
                              style={{ color: "red" }}
                              title="Delete guard"
                              onClick={()=>handleDelete(guard._id)}
                            >
                              <i className="far fa-trash-alt" />
                            </a>
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
          productsPerPage={guardsPerPage}
          totalProducts={totalGuards}
          paginate={paginate}
        />
      </div>
    </Guards>
  );
};

export default GuardsList;
