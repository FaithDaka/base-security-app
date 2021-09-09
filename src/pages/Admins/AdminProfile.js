import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadSpinner from "../../components/Handlers/Loadspinner";
import Layout from "../../components/Layout";
import API from "../../helpers/api";
import avatar from "../../assets/img/plainlogo.png";

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
                <Link to="/admins">
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
          <div className="col-sm-12 col-xl-12">
            <div className="card">
              <div
                className="card-header bg-info"
                style={{ height: "50px" }}
              ></div>
              <div className="card-body profile-body">
                <div className="d-flex flex-row">
                  <div className="col">
                    <div className="">
                      <div className="mt-5">
                        <img
                          className="avatar-md profile-user-wid mb-4 rounded-circle"
                          alt="profile"
                          src={avatar}
                        ></img>
                        <div className="row mt-3">
                          <h5> Name: </h5>
                          <p className="text-wrap">
                            {fName} {lName}
                          </p>
                        </div>
                        <div className="row mt-3">
                          <h5> Phone Number: </h5>
                          <p className="text-wrap">0{phone}</p>
                        </div>
                        <div className="row mt-3">
                          <h5> Email: </h5>
                          <p className="text-wrap nc">{email}</p>
                        </div>
                        <div className="row mt-3 text-justify">
                          <h5> Password: </h5>
                          <p className="text-break nc">{password}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col ml-5 mt-3">
                    <div className="">
                      <div className="mt-3">
                        <div className="row mt-3">
                          <h5> Sex: </h5>
                          <p className="text-wrap">{sex}</p>
                        </div>
                        <div className="row mt-3">
                          <h5> Marital Status: </h5>
                          <p className="text-wrap">{status}</p>
                        </div>
                        <br />
                      </div>
                    </div>
                  </div>
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
