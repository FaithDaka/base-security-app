import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import avatar from "../../assets/img/avatar.jpg";
import { Link } from "react-router-dom";
import API from "../../helpers/api";
import LoadSpinner from "../../components/Handlers/Loadspinner";

const GuardProfile = (props) => {
  const id = props.match.params.guard_id;
  const [userId, setUserId] = useState()
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [sex, setSex] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [status, setStatus] = useState("");
  const [nextOfKin, setNOK] = useState("");
  const [shirtsize, setShirtSize] = useState();
  const [shoeSize, setShoeSize] = useState("");
  const [address, setAddress] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [district, setDistrict] = useState("");
  const [village, setVillage] = useState();
  const [guardNo, setGuardNo] = useState();
  const [payGrade, setPayGrade] = useState("");
  const [dateJoined, setDateJoined] = useState("");
  const [dob, setDOB] = useState("");
  const [emergencyNo, setEmergencyNo] = useState();
  const [assignedGun, setAssignedGun] = useState("");
  const [loading, setLoading] = useState(false);
  const [guns, setGuns] = useState([]);

  const user = JSON.parse(localStorage.getItem("user")).user;

  const getGuard = async (id) => {
    setLoading(true);
    try {
      const res = await API.get(`/api/guard/${id}`);
      console.log("Guard Backend ===>", res);
      setUserId(res.data.userId);
      setFName(res.data.fname);
      setLName(res.data.lname);
      setPhone(res.data.phone);
      setSex(res.data.sex);
      setStatus(res.data.status);
      setAddress(res.data.address);
      setDistrict(res.data.district);
      setVillage(res.data.village);
      setGuardNo(res.data.guardNo);
      setPayGrade(res.data.payGrade);
      setDateJoined(res.data.dateJoined);
      setEmergencyNo(res.data.emergencyNo);
      setNationalId(res.data.nationalId);
      setNOK(res.data.nextOfKin);
      setDOB(res.data.dateOfBirth);
      setShirtSize(res.data.size);
      setShoeSize(res.data.shoeSize);
      setAssignedGun(res.data.assignedGun);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching guard", error);
      setLoading(false);
    }
  };

  const getEmail = async () => {
    setLoading(true);
    try {
      const res = await API.get(`api/user/${userId}`);
      console.log("User backend =>", res);
      setEmail(res.data.email);
    } catch (error) {
      console.log("Error fetching user", error);
      setLoading(false);
    }
  };

  const getGuns = async () => {
    setLoading(true);
    try {
      const res = await API.get("/api/gun");
      console.log("Guns Backend ===>", res);
      setGuns(res.data.guns);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getGuard(id);
    getEmail();
    getGuns();
  }, [id]);

  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
              <span className="col-4 row" title="Go back">
                <Link to={`/admin/${user._id}/guards`}>
                  <i className="fa fa-arrow-left"></i>
                </Link>
                <h4 className="ml-3 mb-sm-0 font-size-16">{fName}'s Profile</h4>
              </span>
            </div>
          </div>
        </div>
      </div>
      {loading && <LoadSpinner />}
      <div className="container-fluid profile">
        <div className="row justify-content-center">
          <div className="col-md-4 col-xl-3 mb-3">
            <div className="card">
              <div
                className="card-header bg-danger"
                style={{ height: "50px", color: "#fff" }}
              >
                Profile
              </div>
              <div className="card-body profile-body">
                <div className="mt-5 text-center">
                  <img
                    className="avatar-md profile-user-wid mb-4 rounded-circle img-fluid"
                    alt="profile"
                    style={{ height: "128px", width: "128px" }}
                    src={avatar}
                  ></img>
                  <h2 className="text-wrap">
                    {fName} {lName}
                  </h2>
                  <p className="text-wrap text-muted">0{phone}</p>
                  <p className="text-wrap text-muted text-uppercase">
                    {payGrade}
                    {":  "}
                    {guardNo}
                  </p>
                  <p className="text-wrap text-muted nc">{email}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-xl-9">
            <div className="card">
              <div
                className="card-header bg-info font-size-20"
                style={{ height: "50px", color: "#fff" }}
              >
                DETAILS
              </div>
              <div className="card-body profile-body">
                <table className="table table-responsive table-borderless">
                  <tbody>
                    <tr>
                      <td className="td-name">Date Joined</td>
                      <td className="text-wrap">{dateJoined}</td>
                    </tr>
                    <tr>
                      <td className="td-name">Gun Assigned</td>
                      {assignedGun !== null ? (
                        <td className="text-wrap">Yes</td>
                      ) : (
                        <td className="text-wrap">No</td>
                      )}
                    </tr>
                    <tr>
                      <td className="td-name">Gun Details</td>
                      {assignedGun !== null ? (
                        guns
                          .filter((gun) => gun._id === assignedGun)
                          .map((guardgun) => (
                            <td className="text-wrap">
                              {guardgun.name}
                              <span>
                              {" || serial number: "}
                              {guardgun.serialNumber}
                              </span>
                            </td>
                          ))
                      ) : (
                        <td className="text-wrap">Not Assigned</td>
                      )}
                    </tr>
                    <tr>
                      <td className="td-name">NIN</td>
                      <td className="text-wrap">{nationalId}</td>
                    </tr>
                    <tr>
                      <td className="td-name">D.O.B</td>
                      <td className="text-wrap">{dob}</td>
                    </tr>
                    <tr>
                      <td className="td-name">Sex</td>
                      <td className="text-wrap">{sex}</td>
                    </tr>
                    <tr>
                      <td className="td-name">Area of Residence</td>
                      <td className="text-wrap">{address}</td>
                    </tr>
                    <tr>
                      <td className="td-name">Area of Origin</td>
                      <td className="text-wrap">
                        {village}
                        {", "}
                        {district}
                      </td>
                    </tr>
                    <tr>
                      <td className="td-name">Marital Status</td>
                      <td className="text-wrap">{status}</td>
                    </tr>
                    <tr>
                      <td className="td-name">Next of Kin</td>
                      <td className="text-wrap">{nextOfKin}</td>
                    </tr>

                    <tr>
                      <td className="td-name">Emergency Contact</td>
                      <td className="text-wrap">{emergencyNo}</td>
                    </tr>
                    <tr>
                      <td className="td-name">Shirt Size</td>
                      <td className="text-wrap">{shirtsize}</td>
                    </tr>
                    <tr>
                      <td className="td-name">Shoe Size</td>
                      <td className="text-wrap">{shoeSize}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GuardProfile;
