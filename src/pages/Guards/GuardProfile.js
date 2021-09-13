import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import avatar from "../../assets/img/avatar.jpg";
import { Link } from "react-router-dom";
import API from "../../helpers/api";
import LoadSpinner from "../../components/Handlers/Loadspinner";

const GuardProfile = (props) => {
  const id = props.match.params.guard_id;
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [sex, setSex] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [status, setStatus] = useState("");
  const [password, setPassword] = useState("");
  const [isAssigned, setisAssigned] = useState("");
  const [loading, setLoading] = useState(false);
  const [guns, setGuns] = useState([]);
  const [gun, setGun] = useState({});

  const user = JSON.parse(localStorage.getItem("user")).user;

  const getGuard = async (id) => {
    console.log("The ID", id);
    setLoading(true);
    try {
      const res = await API.get(`/api/guard/${id}`);
      console.log("Guard Backend ===>", res);
      setFName(res.data.guard.fname);
      setLName(res.data.guard.lname);
      setEmail(res.data.guard.email);
      setPhone(res.data.guard.phone);
      setSex(res.data.guard.sex);
      setStatus(res.data.guard.maritalStatus);
      setPassword(res.data.guard.password);
      setisAssigned(res.data.isAssignedGun);
      setGun(res.data.gun);
      setLoading(false);
      console.log("Guard Gun", gun);
    } catch (error) {
      console.log("Error fetching guard", error);
      setLoading(false);
    }
  };

  const getGuns = async () => {
    setLoading(true);
    try {
      const res = await API.get("/api/gun");
      console.log("Guns Backend ===>", res);
      setGuns(res.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getGuard(id);
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
                    style={{height:'128px', width:'128px'}}
                    src={avatar}
                  ></img>
                  <h2 className="text-wrap">
                    {fName} {lName}
                  </h2>
                  <p className="text-wrap text-muted">0{phone}</p>
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
                      <td className="td-name">Password</td>
                      <td className="text-break nc">{password}</td>
                    </tr>
                    <tr>
                      <td className="td-name">Sex</td>
                      <td className="text-wrap">{sex}</td>
                    </tr>
                    <tr>
                      <td className="td-name">Marital Status</td>
                      <td className="text-wrap">{status}</td>
                    </tr>
                    <tr>
                      <td className="td-name">Next of Kin</td>
                      <td className="text-wrap"></td>
                    </tr>
                    <tr>
                      <td className="td-name">NOK Contact</td>
                      <td className="text-wrap"></td>
                    </tr>
                    <tr>
                      <td className="td-name">Dependants</td>
                      <td className="text-wrap"></td>
                    </tr>
                    <tr>
                      <td className="td-name">Gun Assigned</td>
                      {isAssigned === true ? (
                        <td className="text-wrap">Yes</td>
                      ) : (
                        <td className="text-wrap">No</td>
                      )}
                    </tr>
                    <tr>
                      <td className="td-name">Gun Details</td>
                      {gun !== null ? (
                        guns.map((guardgun) =>
                          guardgun._id === gun._id ? (
                            <td className="text-wrap">
                              {gun.name} {gun.serialNumber}
                            </td>
                          ) : (
                            <td className="text-wrap nc">Not Assigned</td>
                          )
                        )
                      ) : (
                        <td className="text-wrap">Not Assigned</td>
                      )}
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
