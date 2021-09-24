import React, { useState, useEffect } from "react";
import Armory from "./index";
import Modal from "../../components/Modal";
import AddGun from "./AddGun";
import UpdateGun from "./UpdateGun";
import AlertDialog from "../../utils/Dialog";
import API from "../../helpers/api";
import LoadSpinner from "../../components/Handlers/Loadspinner";
import Pagination from "../../components/Pagination";
import SweetAlert from "react-bootstrap-sweetalert";

const ArmoryList = () => {
  const [add, setAdd] = useState();
  const [update, setUpdate] = useState();
  const [uId, setUid] = useState();
  const [dId, setDid] = useState();
  const [open, setOpen] = useState(false);
  const [guns, setGuns] = useState([]);
  const [currentSort, setSort] = useState("up");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const hideAlert = () => setShowAlert(false);

  const [currentpage, setCurrentPage] = useState(1);
  const [gunsPerPage] = useState(6);
  const lastGun = currentpage * gunsPerPage;
  const firstGun = lastGun - gunsPerPage;
  const currentGuns = guns.slice(firstGun, lastGun);
  const totalGuns = guns.length;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const openAdd = () => setAdd(true);
  const closeAdd = () => setAdd(false);

  const openUpdate = (e, _id) => {
    if (e) {
      setUid(_id);
      setUpdate(true);
    }
  };
  const closeUpdate = () => setUpdate(false);

  const handleOpen = () => setOpen(true);
  const handleNo = () => setOpen(false);

  const handleDelete = (id) => {
    setDid(id);
    handleOpen();
  };

  const getGuns = async () => {
    setLoading(true);
    try {
      const res = await API.get("/api/gun");
      console.log("Guns Backend ===>", res);
      setGuns(res.data.guns);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };
  const assigned = guns.filter((gun) => gun.isAssigned === true);
  const unAssigned = guns.filter((gun) => gun.isAssigned === false);

  const deleteGun = async (id) => {
    setLoading(true);
    await API.delete(`/api/gun/${id}`)
      .then(() => {
        console.log("Gun deleted");
        setLoading(false);
        setSuccess(true);
        setShowAlert(true);
      })
      .catch((error) => {
        console.log("Gun delete error", error);
        setLoading(false);
        setError(true);
        setShowAlert(true);
      });
    setOpen(false);
    getGuns();
  };

  useEffect(() => {
    getGuns();
  }, []);

  return (
    <Armory>
      <Modal show={add} close={closeAdd} title="Add New Gun">
        <AddGun close={closeAdd} guns={getGuns} />
      </Modal>
      <Modal show={update} close={closeUpdate} title="Update Gun Details">
        <UpdateGun close={closeUpdate} guns={getGuns} id={uId} show={update} />
      </Modal>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
          <div className="page-title-box d-sm-flex align-items-center justify-content-between">
              <h4 className="mb-sm-0 font-size-18">Armory</h4>
              <div className="col-3">
                <div className="text-sm-end" style={{ textAlign: "right" }}>
                  <button
                    onClick={openAdd}
                    type="button"
                    className="btn btn-success btn-rounded waves-effect waves-light me-2"
                  >
                    <i className="fa fa-plus-circle me-1"></i> Add Gun to Armory
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showAlert && success && (
          <SweetAlert
            success
            onConfirm={() => hideAlert()}
            onCancel={() => hideAlert()}
            title="Gun Deleted!"
            timeout={2000}
          />
        )}
        {showAlert && error && (
          <SweetAlert
            danger
            onConfirm={() => hideAlert()}
            onCancel={() => hideAlert()}
            title="There was an error. Please try again!"
            timeout={2000}
          />
        )}
        <div className="row justify-content-around visual-card">
          <div className="col-lg-4 col-sm-6 mt-3 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <span>
                    <h2 className="text-success font-size-70">{assigned.length}</h2>
                    <span className="text-muted font-size-14 text-uppercase">
                      Assigned guns
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
                    <h2 className="text-secondary font-size-70">{unAssigned.length}</h2>
                    <span className="text-muted font-size-14 text-uppercase">
                      Unassigned guns
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
                <div className="d-flex flex-row mb-2 justify-content-end">
                  <div className="col-sm-4">
                    <div className="search-box me-2 mb-2 d-inline-block">
                      <div className="position-relative">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search..."
                        />
                        <i className="fa fa-search search-icon mt-3 font-size-14 text-muted"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <AlertDialog
                  open={open}
                  Yes={() => deleteGun(dId)}
                  No={handleNo}
                />
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
                        <th className="align-middle"> Serial Number</th>
                        <th className="align-middle"> Assigned</th>
                        <th className="align-middle"> Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentGuns.length > 0 ? (
                        currentGuns.map((gun) => (
                          <tr key={gun._id} className="tr-body">
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
                              <span>{gun.name}</span>
                              {gun.isAssigned === true ? (
                                <span className="badge badge-success badge-pill float-right">
                                  In-Use
                                </span>
                              ) : (
                                <span className="badge badge-secondary badge-pill float-right">
                                  In-Armory
                                </span>
                              )}
                            </td>
                            <td>{gun.serialNumber}</td>
                            {gun.isAssigned === true ? (
                              <td>Yes</td>
                            ) : (
                              <td>No</td>
                            )}
                            <td>
                              <div className="row ml-2">
                                <span
                                  title="Update details"
                                  style={{
                                    marginRight: "20px",
                                    color: "green",
                                  }}
                                  onClick={(e) => openUpdate(e, gun._id)}
                                >
                                  <i className="fas fa-edit action" />
                                </span>
                                <span
                                  style={{ color: "red" }}
                                  title="Delete gun"
                                  onClick={() => handleDelete(gun._id)}
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
                            No guns registered yet!
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
          productsPerPage={gunsPerPage}
          totalProducts={totalGuns}
          paginate={paginate}
        />
      </div>
    </Armory>
  );
};

export default ArmoryList;
