import React from "react";

const AddGun = () => {
  return (
    <>
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
            <button type="submit" className="btn btn-primary"> Save</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddGun;
