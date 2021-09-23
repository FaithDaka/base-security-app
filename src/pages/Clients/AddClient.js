import React, { useState } from "react";
import { Link } from "react-router-dom";
import Client from ".";
import API from "../../helpers/api";

const AddClient = ({ history }) => {
  
  const [role] = useState('client');
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState();
  const [location, setLocation] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const hideAlert = () => setShowAlert(false);

  const user = JSON.parse(localStorage.getItem("user")).user;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {fname, lname,email,password,phone,loading,role};

    await API.post("/api/auth/register", data)
      .then((res) => {
        setLoading(false);
        setSuccess(true);
        setShowAlert(true);
        setTimeout(() => {
          history.push("/guards");
        }, 2000);
        console.log("Guard added successfully", res);
      })
      .catch((res) => {
        setLoading(false);
        setError(true);
        setShowAlert(true);
        console.log("Failed to add guard", res);
      });
  };
  return (
    <Client>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
              <span className="col-4 row" title="Go back">
                <Link to={`/admin/${user._id}/guards`}>
                  <i className="fa fa-arrow-left"></i>
                </Link>
                <h4 className="ml-3 mb-sm-0 font-size-16">Add Client Details</h4>
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Add Client Information</h4>
                <form onSubmit={handleSubmit}>
                <div className="row guard">
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <label>First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          value={fname}
                          onChange={(e) => setFName(e.target.value)}
                        required/>
                      </div>
                      <div className="mb-3">
                        <label>
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={lname}
                          onChange={(e) => setLName(e.target.value)}
                        required/>
                      </div>
                      <div className="mb-3">
                        <label>Email</label>
                        <input
                          type="email"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        required/>
                      </div>
                    </div>
                    <div className="col-sm-6">
                    <div className="mb-3">
                        <label>Phone Number</label>
                        <input
                          type="text"
                          className="form-control"
                          maxLength="10"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        required/>
                      </div>
                      <div className="mb-3">
                        <label>
                          Password
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          maxLength="10"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        required/>
                      </div>
                      <div className="mb-3">
                        <label>
                          Location
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          maxLength="10"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                        required/>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap gap-2">
                    <button
                      type="submit"
                      className="btn btn-primary"
                    >
                      Add Client
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Client>
  );
};

export default AddClient;
