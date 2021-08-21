import React from "react";

const UpdateGun = () => {
  return (
    <div>
      <div className="card">
        <div className="card-header"></div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter gun name"
              />
            </div>
            <div className="form-group">
              <label>Date Registered:</label>
              <input type="date" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">
              {" "}
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateGun;
