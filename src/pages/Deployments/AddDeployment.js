import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Deployment from ".";
import API from "../../helpers/api";

const AddDeployment = ({ history }) => {
  const [site, setSite] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [client, setClient] = useState("");
  const [guards, setGuards] = useState("");

  const [clients, setClients] = useState([]);
  const [guard, setGuard] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const hideAlert = () => setShowAlert(false);

  const user = JSON.parse(localStorage.getItem("user")).user;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = { site, location, address, guards, client, loading };

    await API.post("/api/deployment", data)
      .then((res) => {
        setLoading(false);
        setSuccess(true);
        setShowAlert(true);
        setTimeout(() => {
          history.push("/admin/deployment");
        }, 2000);
        console.log("Deployment added successfully", res);
      })
      .catch((res) => {
        setLoading(false);
        setError(true);
        setShowAlert(true);
        console.log("Failed to add guard", res);
      });
  };

  const fetchClients = async () => {
    setLoading(true);
    try {
      const res = await API.get("/api/client");
      setClients(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error", error);
    }
  };

  const fetchGuards = async () => {
    setLoading(true);
    try {
      const res = await API.get("/api/guard");
      setGuard(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchClients();
    fetchGuards();
  }, []);

  return (
    <Deployment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
              <span className="col-4 row" title="Go back">
                <Link to={`/admin/${user._id}/deployment`}>
                  <i className="fa fa-arrow-left"></i>
                </Link>
                <h4 className="ml-3 mb-sm-0 font-size-16">
                  Guard Deployment Details
                </h4>
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Add Deployment Information</h4>
                <form onSubmit={handleSubmit}>
                  <div className="row guard">
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <label>Site</label>
                        <input
                          type="text"
                          className="form-control"
                          value={site}
                          onChange={(e) => setSite(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label>Location</label>
                        <input
                          type="text"
                          className="form-control"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label>Address</label>
                        <input
                          type="address"
                          className="form-control"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <label>Client</label>
                        <select
                          className="form-control select2 select2-hidden-accessible"
                          value={client}
                          onChange={(e) => setClient(e.target.value)}
                        >
                          <option>Select Client</option>
                          {clients.length > 0 &&
                            clients.map((c) => (
                              <option key={c._id} value={c._id}>
                                {c.fname} {c.lname}
                              </option>
                            ))}
                        </select>
                      </div>
                      <div className="mb-3">
                        <label>Assign Guards</label>
                        <select
                          className="form-control select2 select2-hidden-accessible"
                          value={guards}
                          onChange={(e) => setGuards(e.target.value)}
                        >
                          <option>Assign Guards</option>
                          {guard.length > 0 &&
                            guard.map((c) => (
                              <option key={c._id} value={c._id}>
                                {c.fname} {c.lname}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap gap-2">
                    <button type="submit" className="btn btn-primary">
                      Add New Deployment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Deployment>
  );
};

export default AddDeployment;
