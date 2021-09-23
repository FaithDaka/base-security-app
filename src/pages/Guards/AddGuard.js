import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoadHandler from "../../components/Handlers/LoadHandler";
import API from "../../helpers/api";
import Guards from "./index";
import SweetAlert from "react-bootstrap-sweetalert";

const AddGuard = ({ history }) => {
  const [role ] = useState("guard");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [sex, setSex] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [status, setStatus] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [nextOfKin, setNextOfKin] = useState("");
  const [size, setSize] = useState();
  const [shoeSize, setShoeSize] = useState("");
  const [district, setDistrict] = useState("");
  const [village, setVillage] = useState();
  const [guardNo, setGuardNo] = useState("");
  const [payGrade, setPayGrade] = useState("");
  const [dateJoined, setDateJoined] = useState("");
  const [emergencyNo, setEmergencyNo] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const hideAlert = () => setShowAlert(false);

  const user = JSON.parse(localStorage.getItem("user")).user;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      fname: fName,
      lname: lName,
      sex: sex,
      email: email,
      phone: parseInt(phone),
      role,
      maritalStatus: status,
      password,
      address,
      nationalId,
      nextOfKin,size,shoeSize,district,village,guardNo,payGrade,dateJoined,emergencyNo
    };

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
    <Guards>
      {showAlert && success && (
        <SweetAlert
          success
          onConfirm={() => hideAlert()}
          onCancel={() => hideAlert()}
          title="Guard Added"
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
              <span className="col-4 row" title="Go back">
                <Link to={`/admin/${user._id}/guards`}>
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
                <h4 className="card-title">Guard Bio Data Information</h4>
                <form onSubmit={handleSubmit}>
                  <div className="row guard">
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label>First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          value={fName}
                          onChange={(e) => setFName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label>Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          value={lName}
                          onChange={(e) => setLName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label>Email</label>
                        <input
                          type="email"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label>Phone Number</label>
                        <input
                          type="text"
                          className="form-control"
                          maxLength="10"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label>Sex</label>
                        <select
                          className="form-control select2 select2-hidden-accessible"
                          value={sex}
                          onChange={(e) => setSex(e.target.value)}
                        >
                          <option>Sex</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label>Marital Status</label>
                        <select
                          className="form-control select2 select2-hidden-accessible"
                          value={status}
                          onChange={(e) => setStatus(e.target.value)}
                        >
                          <option>Marital Status</option>
                          <option value="Single" selected>
                            Single
                          </option>
                          <option value="Married">Married</option>
                          <option value="Divorced">Divorced</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label>Password</label>
                        <input
                          type="text"
                          className="form-control"
                          maxLength="10"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label>Address</label>
                        <input
                          type="text"
                          className="form-control"
                          maxLength="10"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label>Next Of Kin</label>
                        <input
                          type="text"
                          className="form-control"
                          maxLength="10"
                          value={nextOfKin}
                          onChange={(e) => setNextOfKin(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row guard">
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label>Size</label>
                        <input
                          type="text"
                          className="form-control"
                          value={size}
                          onChange={(e) => setSize(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label>Shoe Size</label>
                        <input
                          type="text"
                          className="form-control"
                          value={shoeSize}
                          onChange={(e) => setShoeSize(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label>District</label>
                        <input
                          type="email"
                          className="form-control"
                          value={district}
                          onChange={(e) => setDistrict(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label>Village</label>
                        <input
                          type="text"
                          className="form-control"
                          maxLength="10"
                          value={village}
                          onChange={(e) => setVillage(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label>Guard Number</label>
                        <input
                          type="text"
                          className="form-control"
                          maxLength="10"
                          value={guardNo}
                          onChange={(e) => setGuardNo(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label>Emergency Contact</label>
                        <input
                          type="text"
                          className="form-control"
                          maxLength="10"
                          value={emergencyNo}
                          onChange={(e) => setEmergencyNo(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label>National ID</label>
                        <input
                          type="text"
                          className="form-control"
                          maxLength="10"
                          value={nationalId}
                          onChange={(e) => setNationalId(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label>Pay Grade</label>
                        <select
                          className="form-control select2 select2-hidden-accessible"
                          value={payGrade}
                          onChange={(e) => setPayGrade(e.target.value)}
                        >
                          <option value="Male">Supervisor</option>
                          <option value="Female">Guard</option>
                          <option value="Other">Driver</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label>Joined Date</label>
                        <input
                          type="text"
                          className="form-control"
                          maxLength="10"
                          value={dateJoined}
                          onChange={(e) => setDateJoined(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="d-flex flex-wrap gap-2">
                    <button type="submit" className="btn btn-primary">
                      {loading ? <LoadHandler /> : "Add Guard"}
                    </button>
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
