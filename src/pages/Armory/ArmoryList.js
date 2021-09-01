import React, { useState, useEffect } from "react";
import Armory from "./index";
import Modal from "../../components/Modal";
import AddGun from "./AddGun";
import UpdateGun from "./UpdateGun";
import AlertDialog from "../../utils/Dialog";
import API from '../../helpers/api';

const ArmoryList = () => {
  const [add, setAdd] = useState();
  const [update, setUpdate] = useState();
  const [open, setOpen] = useState(false);
  const [guns, setGuns] = useState([]);
  const [loading, setLoading] = useState(true);

  const openAdd = () => setAdd(true);
  const closeAdd = () => setAdd(false);

  const openUpdate = () => setUpdate(true);
  const closeUpdate = () => setUpdate(false);

  const handleOpen = () => setOpen(true);
  const handleNo = () => setOpen(false);

  const handleDelete = () => handleOpen()

  const getGuns = async () => {
    try {
      const res = await API.get("/api/gun/list");
      console.log("Users Backend ===>", res)
      setGuns(res.data);
      setLoading(false);
    } catch (error) {
      console.log('error', error);
    }
  }


  const deleteGun = () => {
    console.log('gun deleted')
    handleNo();
  }

  useEffect(() => {
    getGuns();
  }, []);

  return (
    <Armory>
      <Modal show={add} close={closeAdd} title="Add New Gun">
        <AddGun close={closeAdd} guns={getGuns} />
      </Modal>
      <Modal show={update} close={closeUpdate} title="Update Gun Details">
        <UpdateGun />
      </Modal>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
              <h4 className="mb-sm-0 font-size-18">Armory</h4>
            </div>
          </div>
        </div>
        <AlertDialog open={open} Yes={deleteGun} No={handleNo} />
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
                <div className="table-responsive">
                  <table className="table align-middle table-nowrap table-check">
                    <thead className="table-primary">
                      <tr>
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
                        <th className="align-middle"> Status</th>
                        <th className="align-middle"> isAssigned</th>
                        <th className="align-middle"> Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {guns.map((gun) => {
                        return (
                          <tr>
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
                            <td>{gun.name}</td>
                            <td>{gun.serialNumber}</td>
                            <td>{gun.status}</td>
                            <td>{gun.isAssigned}</td>
                            <td>
                              <div className="button-list">
                                <a
                                  href="#"
                                  className="btn-tab btn-sucess-rgba"
                                  title="Update details"
                                  style={{ marginRight: "20px", color: "green" }}
                                  onClick={openUpdate}
                                >
                                  <i className="far fa-edit" />
                                </a>
                                <a
                                  href="#"
                                  className="btn-tab btn-danger-rgba"
                                  style={{ color: "red" }}
                                  title="Delete guard"
                                  onClick={() => handleDelete()}
                                >
                                  <i className="far fa-trash-alt" />
                                </a>
                              </div>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Pagination
          productsPerPage={brandsPerPage}
          totalProducts={totalBrands}
          paginate={paginate}
        /> */}
      </div>
    </Armory>
  );
};

export default ArmoryList;
