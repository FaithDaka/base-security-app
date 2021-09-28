import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import API from "../../helpers/api";
import Guards from "./index";
import SweetAlert from "react-bootstrap-sweetalert";
import LoadHandler from "../../components/Handlers/LoadHandler";

const UpdateGuard = (props) => {
  const id = props.match.params.guard_id;
  const [role] = useState("guard");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [sex, setSex] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [status, setStatus] = useState("");
  const [address, setAddress] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [nextOfKin, setNextOfKin] = useState("");
  const [dateOfBirth, setDOB] = useState("");
  const [shirtsize, setShirtSize] = useState();
  const [shoeSize, setShoeSize] = useState();
  const [district, setDistrict] = useState("");
  const [village, setVillage] = useState();
  const [guardNo, setGuardNo] = useState();
  const [payGrade, setPayGrade] = useState("");
  const [dateJoined, setDateJoined] = useState("");
  const [emergencyNo, setEmergencyNo] = useState();


  const user = JSON.parse(localStorage.getItem("user")).user;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const hideAlert = () => setShowAlert(false);

  const getGuard = async (id) => {
    setLoading(true);
    try {
      const res = await API.get(`/api/guard/${id}`);
      console.log("Guard Backend ===>", res);
      setFName(res.data.fname);
      setLName(res.data.lname);
      setPhone(res.data.phone);
      setSex(res.data.sex);
      setEmail(res.data.email);
      setStatus(res.data.status);
      setAddress(res.data.address);
      setDistrict(res.data.district);
      setVillage(res.data.village);
      setGuardNo(res.data.guardNo);
      setPayGrade(res.data.payGrade);
      setDateJoined(res.data.dateJoined);
      setEmergencyNo(res.data.emergencyNo);
      setNationalId(res.data.nationalId);
      setNextOfKin(res.data.nextOfKin);
      setShirtSize(res.data.size);
      setShoeSize(res.data.shoeSize);
      setDOB(res.data.dateOfBirth);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("Error fetching guard", error);
    }
  };

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await API.patch(`/api/guard/${id}`, {fname: fName,
        lname: lName,
        sex,
        email,
        phone: parseInt(phone),
        role,
        maritalStatus: status,
        address,
        nationalId,
        nextOfKin,
        size:shirtsize,
        shoeSize,
        district,
        village,
        guardNo:parseInt(guardNo),
        payGrade,
        dateJoined,
        emergencyNo: parseInt(emergencyNo),});
      setLoading(false);
      setSuccess(true);
      setShowAlert(true);
      setTimeout(() => {
        history.push(`/admin/${user.id}/guards`);
      }, 2000);
      console.log("Guard updated successfully", res);
    } catch (err) {
      setLoading(false);
      setError(true);
      setShowAlert(true);
      console.log("Failed to update guard details", err);
    }
  };

  useEffect(() => {
    getGuard(id);
  }, [id]);

  

  return (
    <Guards>
      {showAlert && success && (
        <SweetAlert
          success
          onConfirm={() => hideAlert()}
          onCancel={() => hideAlert()}
          title="Details Updated"
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
                <h4 className="ml-3 mb-sm-0 font-size-16">
                  Update {fName} {lName}'s Form
                </h4>
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title mb-5">Guard Bio Data Form</h4>
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
                        />
                      </div>
                      <div className="mb-3">
                        <label>Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          value={lName}
                          onChange={(e) => setLName(e.target.value)}
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
                        <label>Phone Number</label>
                        <input
                          type="text"
                          className="form-control"
                          maxLength="10"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label>Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label>Date of Birth</label>
                        <input
                          type="date"
                          className="form-control"
                          value={dateOfBirth}
                          onChange={(e) => setDOB(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label>Area of Residence</label>
                        <input
                          type="text"
                          className="form-control"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
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
                      <div className="mb-3">
                        <label>Next Of Kin [Name]</label>
                        <input
                          type="text"
                          className="form-control"
                          value={nextOfKin}
                          onChange={(e) => setNextOfKin(e.target.value)}
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
                        />
                      </div>
                      <div className="mb-3">
                        <label>District of Origin</label>
                        <input
                          type="text"
                          className="form-control"
                          value={district}
                          onChange={(e) => setDistrict(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label>Village</label>
                        <input
                          type="text"
                          className="form-control"
                          value={village}
                          onChange={(e) => setVillage(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label>NIN Number</label>
                        <input
                          type="text"
                          className="form-control"
                          value={nationalId}
                          onChange={(e) => setNationalId(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label>Pay Grade</label>
                        <select
                          className="form-control select2 select2-hidden-accessible"
                          value={payGrade}
                          onChange={(e) => setPayGrade(e.target.value)}
                        >
                          <option value="Supervisor">Supervisor</option>
                          <option value="Guard">Guard</option>
                          <option value="Driver">Driver</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label>Guard Number</label>
                        <input
                          type="text"
                          className="form-control"
                          value={guardNo}
                          onChange={(e) => setGuardNo(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label>Date Joined</label>
                        <input
                          type="date"
                          className="form-control"
                          value={dateJoined}
                          onChange={(e) => setDateJoined(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label>Shirt Size</label>
                        <input
                          type="number"
                          className="form-control"
                          value={shirtsize}
                          onChange={(e) => setShirtSize(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label>Shoe Size</label>
                        <input
                          type="number"
                          className="form-control"
                          value={shoeSize}
                          onChange={(e) => setShoeSize(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap gap-2 mt-3">
                    <button type="submit" className="btn btn-primary">
                      {loading ? <LoadHandler /> : "Update"}
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

export default UpdateGuard;
