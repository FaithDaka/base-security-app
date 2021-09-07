import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import avatar from "../../assets/img/plainlogo.png";
import { Link } from "react-router-dom";
import API from "../../helpers/api";
import LoadSpinner from "../../components/Handlers/Loadspinner";

const GuardProfile = (props) => {
  const id = props.match.params.id
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [sex, setSex] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState();
  const [status, setStatus] = useState('');
  const [password, setPassword] = useState('');
  const [isAssigned, setisAssigned] = useState('');
  const[loading, setLoading] = useState(false);
  const [guns, setGuns] = useState([])
  const [gun, setGun] = useState({})

  const getGuard = async (id) => {
    console.log('The ID', id)
    setLoading(true)
    try {
      const res = await API.get(`/api/guard/${id}`);
      console.log("Guard Backend ===>", res);
      setFName(res.data.guard.fname)
      setLName(res.data.guard.lname)
      setEmail(res.data.guard.email)
      setPhone(res.data.guard.phone)
      setSex(res.data.guard.sex)
      setStatus(res.data.guard.maritalStatus)
      setPassword(res.data.guard.password)
      setisAssigned(res.data.isAssignedGun)
      setGun(res.data.gun)
      setLoading(false);
      console.log('Guard Gun',gun)
    } 
    catch (error) {
      console.log("Error fetching guard", error);
      setLoading(false)
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

  useEffect(()=>{
    getGuard(id);
    getGuns();
  },[id])

  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
            <span className="col-4 row" title="Go back">
                <Link to="/guards">
                  <i className="fa fa-arrow-left"></i>
                </Link>
                <h4 className="ml-3 mb-sm-0 font-size-16">{fName}'s Profile</h4>
              </span>
            </div>
          </div>
        </div>
      </div>
      {loading && <LoadSpinner/>}
      <div className="container-fluid profile">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-xl-12">
            <div className="card">
                <div className="card-header bg-info" style={{height:'50px'}}></div>
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
                          <p className="text-wrap">{fName} {lName}</p>
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
                        <div className="row mt-3">
                          <h5> Gun Assigned: </h5>
                          {
                            isAssigned === true ? <p className="text-wrap">Yes</p>:
                            <p className="text-wrap nc">No</p>
                          }
                        </div>
                        <div className="row mt-3">
                          <h5> Gun Details: </h5>
                          {
                            gun !== null ? guns.map((guardgun)=>(
                            guardgun._id === gun._id ? <p className="text-wrap">{gun.name} {gun.serialNumber}</p>:
                            <p className="text-wrap nc">Not Assigned</p>
                            ))
                            :
                            <p className="text-wrap">Not Assigned</p>}
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
                          <h5> Next of Kin: </h5>
                          <p className="text-wrap"></p>
                        </div>
                        <br />
                        <div className="row mt-3">
                          <h5> NOK Contact: </h5>
                          <p className="text-wrap"></p>
                        </div>
                        <br />
                        <div className="row mt-3">
                          <h5>Dependants: </h5>
                          <p className="text-wrap"></p>
                        </div>
                        <br />
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

export default GuardProfile;
