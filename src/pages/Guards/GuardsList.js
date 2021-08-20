import React from "react";
import { useHistory } from "react-router-dom";
import Guards from "./index";
// import Pagination from '../../components/Pagination'

const GuardsList = () => {
//   const [show, setShow] = useState(false);
//   const openModal = () => setShow(true);
//   const closeModal = () => setShow(false);

  //   const [currentpage, setCurrentPage] = useState(1);
  //   const [guardsPerPage] = useState(10);
  //   const lastGuard = currentpage * guardsPerPage;
  //   const firstGuard = lastGuard - guardsPerPage;
  //   const currentGuards = guard.slice(firstGuard, lastGuard);
  //   const totalGuards = guard.length;

  const history = useHistory();
  const addGuard = () => {
    history.push("/guards/add");
  };
  const updateGuard = () => {
    history.push("/guards/update");
  };

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
                        {/* <i className="fa fa-search-alt search-icon"></i> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="text-sm-end">
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
                    <thead className="table-success">
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
                        <th className="align-middle"> ID</th>
                        <th className="align-middle"> Name</th>
                        <th className="align-middle"> Date Joined</th>
                        <th className="align-middle"> Weapon</th>
                        <th className="align-middle"> Actions</th>
                      </tr>
                    </thead>
                    <tbody>
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
                        <td>BS-001</td>
                        <td>John Doe</td>
                        <td>02/10/21</td>
                        <td style={{ textTransform: "uppercase" }}>ak-15</td>
                        <td>
                          <div className="button-list">
                            <a
                              href="#"
                              className="btn-tab btn-success-rgba"
                              title="Update details"
                              style={{ marginRight: "20px" }}
                              onClick={() => updateGuard()}
                            >
                              <i className="far fa-edit" />
                            </a>
                            <a
                              href="#"
                              className="btn-tab btn-danger-rgba"
                              style={{ color: "red" }}
                              title="Delete guard"
                            >
                              <i className="far fa-trash-alt" />
                            </a>
                          </div>
                        </td>
                      </tr>
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