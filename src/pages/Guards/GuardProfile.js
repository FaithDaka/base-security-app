import React from "react";
import Layout from "../../components/Layout";
import avatar from "../../assets/img/plainlogo.png";
import { Link } from "react-router-dom";

const GuardProfile = () => {
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
                <h4 className="ml-3 mb-sm-0 font-size-16">Profile</h4>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container profile">
        <div className="row justify-content-center">
          <div className="col-sm-10 col-xl-12">
            <div className="card">
                <div className="card-header bg-info" style={{height:'70px'}}></div>
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
                          <p className="text-wrap">John Doe</p>
                        </div>
                        <div className="row mt-3">
                          <h5> Phone Number: </h5>
                          <p className="text-wrap">0777777009</p>
                        </div>
                        <div className="row mt-3">
                          <h5> Email: </h5>
                          <p className="text-wrap nc">johndoe@gmail.com</p>
                        </div>
                        <div className="row mt-3">
                          <h5> Password: </h5>
                          <p className="text-wrap nc">john123doe</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="">
                      <div className="mt-3">
                        <div className="row mt-3">
                          <h5> Sex: </h5>
                          <p className="text-wrap">Other</p>
                        </div>
                        <br />
                        <div className="row mt-3">
                          <h5> Next of Kin: </h5>
                          <p className="text-wrap">Sarah Doe</p>
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
                          <p className="text-wrap"></p>
                        </div>
                        <br />
                        <div className="row mt-3">
                          <h5> Gun Assigned: </h5>
                          <p className="text-wrap"></p>
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
