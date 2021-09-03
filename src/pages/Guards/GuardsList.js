import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import LoadSpinner from "../../components/Handlers/Loadspinner";
import API from "../../helpers/api";
import AlertDialog from "../../utils/Dialog";
import Guards from "./index";
// import Pagination from '../../components/Pagination'

const GuardsList = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false)

  //   const [currentpage, setCurrentPage] = useState(1);
  //   const [guardsPerPage] = useState(10);
  //   const lastGuard = currentpage * guardsPerPage;
  //   const firstGuard = lastGuard - guardsPerPage;
  //   const currentGuards = guard.slice(firstGuard, lastGuard);
  //   const totalGuards = guard.length;
  const [guards, setGuards] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleNo = () => setOpen(false);

  const handleDelete = ()=> handleOpen();

  const getGuards = async () => {
    try {
      const res = await API.get("/api/guard/list");
      console.log("Users Backend ===>", res)
      setGuards(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log('error', error);
    }
  }
  const history = useHistory();
  const addGuard = () => {
    history.push("/guards/add");
  };
  const updateGuard = () => {
    history.push("/guards/update");
  };
  const deleteGuard=()=>{
    console.log('guard deleted')
    handleNo();
  }

  useEffect(()=>{
    getGuards();
  })

  return (
    <Guards>
      {/* <Modal show={show} close={closeModal} title="Add New Guard">
        <AddGuard></AddGuard>
      </Modal> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
              <h4 className="mb-sm-0 font-size-18">Guards</h4>
            </div>
          </div>
        </div>
        <AlertDialog open={open} Yes={deleteGuard} No={handleNo}/>
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
                  <table className="table align-middle table-nowrap table-check">
                  {loading && <LoadSpinner />}
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
                        <th className="align-middle"> Email</th>
                        <th className="align-middle"> Phone</th>
                        <th className="align-middle"> Sex</th>
                        <th className="align-middle"> Role</th>
                        <th className="align-middle"> Weapon</th>
                        <th className="align-middle"> Status</th>
                        <th className="align-middle"> Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {guards.map((guard)=>(
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
                        <td>{guard.fname + guard.lname}</td>
                        <td>{guard.email}</td>
                        <td>{guard.phone}</td>
                        <td>{guard.sex}</td>
                        <td>{guard.role}</td>
                        <td>{guard.status}</td>
                        <td>{guard.gunId}</td>
                        <td>
                          <div className="button-list">
                            <a
                              href="#"
                              className="btn-tab btn-sucess-rgba"
                              title="Update details"
                              style={{ marginRight: "20px", color: "green" }}
                              onClick={() => updateGuard()}
                            >
                              <i className="far fa-edit" />
                            </a>
                            <a
                              href="#"
                              className="btn-tab btn-danger-rgba"
                              style={{ color: "red" }}
                              title="Delete guard"
                              onClick={()=>handleDelete()}
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
        {/* <Pagination
          productsPerPage={brandsPerPage}
          totalProducts={totalBrands}
          paginate={paginate}
        /> */}
      </div>
    </Guards>
  );
};

export default GuardsList;
