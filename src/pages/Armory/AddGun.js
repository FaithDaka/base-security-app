import React, { useState } from "react";
import API from "../../helpers/api";
import SweetAlert from "react-bootstrap-sweetalert";
import LoadHandler from "../../components/Handlers/LoadHandler";

const AddGun = ({ close, guns }) => {
  const [name, setName] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [status, setStatus] = useState("Active");
  const [isAssigned, setisAssigned] = useState(false);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const hideAlert = () => setShowAlert(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = { name, serialNumber, status, isAssigned };

    try {
      const response = await API.post("/api/gun", data);
      console.log("Posted Data ===>", response);
      setLoading(false);
      close();
      setSuccess(true);
      setShowAlert(true);
      guns();
    } catch (error) {
      console.log("error", error);
      setLoading(false);
      setError(true);
      setShowAlert(true);
    }
  };

  return (
    <>
      {showAlert && success && (
        <SweetAlert
          success
          onConfirm={() => hideAlert()}
          onCancel={() => hideAlert()}
          title="New Gun Saved"
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
      <div className="card">
        <div className="card-body gun">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                value={name}
                onChange={(e) => setName(e.target.value)}
                required/>
            </div>
            <div className="form-group">
              <label>Serial Number</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                value={serialNumber}
                onChange={(e) => setSerialNumber(e.target.value)}
                required/>
            </div>
            <div className="form-group">
              <label>Assigned</label>
              <select
                className="form-control select2 select2-hidden-accessible"
                value={isAssigned}
                onChange={(e) => setisAssigned(e.target.value)}
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
            <div className="form-group">
              <label>Gun Status</label>
              <select
                className="form-control select2 select2-hidden-accessible"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              {loading ? <LoadHandler/>: "Save Gun"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddGun;
