import React, { useState } from "react";
import API from "../../helpers/api";
import LoadHandler from "../../components/Handlers/LoadHandler";

const AddGun = ({ close, guns }) => {
  const [name, setName] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [status, setStatus] = useState("Active");
  const [isAssigned, setisAssigned] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = { name, serialNumber, status, isAssigned };

    try {
      const response = await API.post("/api/gun", data);
      console.log("Posted Data ===>", response);
      setLoading(false);
      setName('');
      setSerialNumber('');
      setStatus()
      setisAssigned();
      close();
      guns();
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  return (
    <>
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
