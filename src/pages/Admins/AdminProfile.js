import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadSpinner from "../../components/Handlers/Loadspinner";
import Layout from "../../components/Layout";
import API from "../../helpers/api";
import avatar from "../../assets/img/avatar.jpg";

const AdminProfile = (props) => {
  const id = props.match.params.id;
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [sex, setSex] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem("user")).user;

  const getAdmin = async (id) => {
    console.log("The ID", id);
    setLoading(true);
    try {
      const res = await API.get(`/api/admin/${id}`);
      console.log("Admin Backend ===>", res);
      setFName(res.data.fname);
      setLName(res.data.lname);
      setEmail(res.data.email);
      setPhone(res.data.phone);
      setSex(res.data.sex);
      setStatus(res.data.maritalStatus);
      setPassword(res.data.password);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching user", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAdmin(id);
  }, [id]);

  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
              <span className="col-4 row" title="Go back">
                <Link to={`/admin/${user._id}/admins`}>
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
                className="card-header bg-success"
                style={{ height: "50px", color:'#fff' }}
              >Profile</div>
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
                style={{ height: "50px", color:'#fff' }}
              >DETAILS</div>
              <div className="card-body profile-body">
                <div className="col mt-3">
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
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminProfile;
