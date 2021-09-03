import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoadSpinner from "../../components/Handlers/Loadspinner";
import API from "../../helpers/api";
import Guards from "./index";

const AddGuard = () => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [sex, setSex] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState();
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      fname: fName,
      lname: lName,
      sex: sex,
      email:email,
      phone: phone,
      role: role,
      maritalStatus: status,
      password: password
    };

    setLoading(true);
    await API.post('/api/guard', data)
      .then((res) => {
        setLoading(false);
        console.log('Guard added successfully', res)
      })
      .catch((res) => {
        setLoading(false);
        console.log('Failed to add guard', res)
      });
  };

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
                <p className="card-title-desc">Fill all the information below</p>
                <form onSubmit={handleSubmit}>
                  <div className="row guard">
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <label>First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          value={fName}
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
                          value={lName}
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
                      <div className="mb-3">
                        <label >Password</label>
                        <input
                        className="form-control"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        required/>
                      </div>
                    </div>
                    <div className="col-sm-6">
                    <div className="mb-3">
                        <label>Phone Number</label>
                        <input
                          type="number"
                          className="form-control"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        required/>
                      </div>
                      <div className="mb-3">
                        <label >Guard Role</label>
                        <input
                        className="form-control"
                        value={role}
                        onChange={(e)=> setRole(e.target.value)}/>
                      </div>
                      <div className="mb-3">
                        <label>
                          Sex
                        </label>
                        <select
                        className="form-control select2 select2-hidden-accessible"
                        value={sex}
                        onChange={(e) => setSex(e.target.value)}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label>
                          Marital Status
                        </label>
                        <select
                        className="form-control select2 select2-hidden-accessible"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Divorced">Divorced</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap gap-2">
                    <button
                      type="submit"
                      className="btn btn-primary waves-effect waves-light"
                    >
                      {loading ? <LoadSpinner /> : 'Add Guard'}
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
