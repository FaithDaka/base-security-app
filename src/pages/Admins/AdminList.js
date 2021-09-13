import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertDialog from "../../utils/Dialog";
import Guards from "./index";
import API from "../../helpers/api";
import LoadSpinner from "../../components/Handlers/Loadspinner";
import Pagination from "../../components/Pagination";

const AdminList = () => {
  const [open, setOpen] = useState(false);
  const [admin, setAdmin] = useState([]);
  const [loading, setLoading] = useState(true);
  const admins = admin.filter((a) => a.role === "admin");
  const user = JSON.parse(localStorage.getItem("user")).user;

  const [currentpage, setCurrentPage] = useState(1);
  const [adminsPerPage] = useState(10);
  const lastAdmin = currentpage * adminsPerPage;
  const firstAdmin = lastAdmin - adminsPerPage;
  const currentAdmins = admins.slice(firstAdmin, lastAdmin);
  const totalAdmins = admins.length;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getAdminUsers = async () => {
    try {
      const res = await API.get("/api/user");
      console.log("Users Backend ===>", res);
      setAdmin(res.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleOpen = () => setOpen(true);
  const handleNo = () => setOpen(false);

  const handleDelete = () => handleOpen();

  const deleteAdmin = () => {
    console.log("Admin deleted");
    handleNo();
  };

  useEffect(() => {
    getAdminUsers();
  }, []);

  return (
    <Guards>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
              <h4 className="mb-sm-0 font-size-18">Administrators</h4>
            </div>
          </div>
        </div>
        <AlertDialog open={open} Yes={deleteAdmin} No={handleNo} />
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-row mb-2 justify-content-between">
                  <div className="col-sm-4">
                    <div className="search-box me-2 mb-2 d-inline-block"></div>
                  </div>
                  <div className="col-3">
                    <div className="text-sm-end" style={{ textAlign: "right" }}>
                      <button
                        type="button"
                        className="btn btn-success btn-rounded waves-effect waves-light mb-2 me-2"
                      >
                        <Link to={`/admin/${user._id}/add_new`} className="text-light"><i className="fa fa-plus-circle me-1"></i> Add New Admin</Link>
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
                        <th className="align-middle"> Status</th>
                        <th className="align-middle"> Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentAdmins.map((user) => {
                        return (
                          <tr className="tr-body" key={user._id}>
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
                              <Link to={`/admin/${user._id}/profile`} className="td-hover">
                                {user.fname} {user.lname}
                              </Link>
                            </td>
                            <td className="tr_email">{user.email}</td>
                            <td>{user.status}</td>
                            <td>
                              <div className="row ml-2">
                                <span title="Update details">
                                  <Link
                                    to={`/admin/${user._id}/update`}
                                    style={{
                                      marginRight: "20px",
                                      color: "green",
                                    }}
                                  >
                                    <i className="fas fa-edit action" />
                                  </Link>
                                </span>
                                <span
                                  style={{ color: "red" }}
                                  title="Delete user"
                                  onClick={() => handleDelete()}
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
          productsPerPage={adminsPerPage}
          totalProducts={totalAdmins}
          paginate={paginate}
        />
      </div>
    </Guards>
  );
};

export default AdminList;
