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
  const [gunsPerPage] = useState(8);
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

  const sort = {
    up: {
      class: "sort-up",
      fn: (a, b) => a.id - b.id,
    },
    down: {
      class: "sort-down",
      fn: (a, b) => b.id - a.id,
    },
    default: {
      class: "sort",
      fn: (a, b) => a,
    },
  };

  const onSortChange = () => {
    let nextSort;

    if (currentSort === "down") nextSort = "up";
    else if (currentSort === "up") nextSort = "default";
    else if (currentSort === "default") nextSort = "down";

    setSort(nextSort);
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
                        onClick={openAdd}
                        type="button"
                        className="btn btn-success btn-rounded waves-effect waves-light mb-2 me-2"
                      >
                        <i className="fa fa-plus-circle me-1"></i> Add Gun to
                        Armory
                      </button>
                    </div>
                  </div>
                </div>
                <AlertDialog
                  open={open}
                  Yes={() => deleteGun(dId)}
                  No={handleNo}
                />
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
                        <th className="align-middle">
                          {" "}
                          Name
                          <button
                          className="bg-transparent"
                            onClick={onSortChange}
                            style={{
                              border: "none",
                              outline: "none",
                              marginLeft: "10px",
                            }}
                          >
                            <i
                              className={`fas fa-${sort[currentSort].class}`}
                            />
                          </button>
                        </th>
                        <th className="align-middle"> Serial Number</th>
                        <th className="align-middle"> Assigned</th>
                        <th className="align-middle"> Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentGuns.sort(sort[currentSort].fn).map((gun) => {
                        return (
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
                              {gun.status === "Active" ? (
                                <span className="badge badge-success badge-pill float-right">
                                  Ready
                                </span>
                              ) : (
                                <span className="badge badge-secondary badge-pill float-right">
                                  InActive
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
                        );
                      })}
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
