import React from "react";
import { Link } from "react-router-dom";
import Guards from "./index";

const AddGuard = () => {
  return (
    <Guards>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
              <span className="col-4 row" title="Go back">
                <Link to="/guards">
                  <i className="fa fa-arrow-left"></i>
                </Link>
                <h4 className="ml-3 mb-sm-0 font-size-16">Add new guard</h4>
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Basic Information</h4>
                <p className="card-title-desc">Fill all information below</p>
                <form>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <label htmlFor="productname">Product Name</label>
                        <input
                          id="productname"
                          name="productname"
                          type="text"
                          className="form-control"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="manufacturername">
                          Manufacturer Name
                        </label>
                        <input
                          id="manufacturername"
                          name="manufacturername"
                          type="text"
                          className="form-control"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="manufacturerbrand">
                          Manufacturer Brand
                        </label>
                        <input
                          id="manufacturerbrand"
                          name="manufacturerbrand"
                          type="text"
                          className="form-control"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="price">Price</label>
                        <input
                          id="price"
                          name="price"
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <label className="control-label">Category</label>
                        <select
                          className="form-control select2 select2-hidden-accessible"
                          data-select2-id="1"
                          tabIndex="-1"
                          aria-hidden="true"
                        >
                          <option data-select2-id="3">Select</option>
                          <option value="FA">Fashion</option>
                          <option value="EL">Electronic</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="productdesc">Product Description</label>
                        <textarea
                          className="form-control"
                          id="productdesc"
                          rows="5"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap gap-2">
                    <button
                      type="submit"
                      className="btn btn-primary waves-effect waves-light"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div style={{ height: "50px" }}></div>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title mb-3">Guard Profile Image</h4>
                <form
                  action="/"
                  method="post"
                  className="dropzone dz-clickable"
                >
                  <div
                    className="dz-message needsclick mt-3"
                    style={{ textAlign: "center" }}
                  >
                    <div className="mb-3 ">
                      <i className="display-4 text-muted font-size-25 fas fa-upload"></i>
                    </div>
                    <h4>Drop files here or click to upload.</h4>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Guards>
  );
};

export default AddGuard;
