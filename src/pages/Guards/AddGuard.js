import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoadHandler from "../../components/Handlers/LoadHandler";
import API from "../../helpers/api";
import Guards from "./index";
import SweetAlert from "react-bootstrap-sweetalert";
import Biodata from "./forms/Biodata";
import Indentification from "./forms/Indentification";
import Payroll from "./forms/Payroll";

const AddGuard = ({ history }) => {
  const [role] = useState("guard");
  
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [employeeID, setEmployeeID] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [joiningDate, setJoiningDate] = useState();
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");
  const [shoeSize, setShoeSize] = useState("");
  const [shirtSize, setShirtSize] = useState();

  const [nationality, setNationality] = useState("");
  const [nin, setNIN] = useState("");
  const [passport, setPassport] = useState("");
  const [district, setDistrict] = useState();
  const [county, setCounty] = useState("");
  const [village, setVillage] = useState("");
  const [parish, setParish] = useState("");
  const [dob, setDOB] = useState();
  const [birth, setBirth] = useState("");
  const [education, setEducation] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [address, setAddress] = useState();

  const [grossPay, setGrossPay] = useState("");
  const [lst, setLST] = useState(25000);
  const [netPay, setNetPay] = useState("");
  const [deductions, setDeductions] = useState();
  const [paye, setPaye] = useState("");
  const [employerNssf, setEmployerNSSF] = useState("");
  const [employeeNssf, setEmployeeNSSF] = useState("");

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
      firstname, lastname, gender, email, password, employeeID, phoneNo, joiningDate,department, 
      designation, shoeSize, shirtSize,role, nationality, nin, passport, district, county, village, 
      parish, dob, education, birth, address, maritalStatus, grossPay, lst, netPay, employeeNssf, 
      employerNssf, deductions, paye
    };

    await API.post("/api/auth/register", data)
      .then((res) => {
        setLoading(false);
        setSuccess(true);
        setShowAlert(true);
        setTimeout(() => {
          history.push(`/admin/${user.id}/guards`);
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
                <h4 className="card-title mb-5">Guard Bio Data Form</h4>
                <div class="tab-box">
                  <div class="row user-tabs">
                    <div class="col-lg-12 col-md-12 col-sm-12 line-tabs">
                      <div class="card">
                        <ul class="nav nav-tabs nav-tabs-bottom">
                          <li class="nav-item">
                            <a
                              href="#bio-data"
                              data-toggle="tab"
                              class="nav-link active"
                            >
                              Bio Data
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              href="#ident-data"
                              data-toggle="tab"
                              class="nav-link"
                            >
                              Indentification Data
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              href="#payroll-data"
                              data-toggle="tab"
                              class="nav-link"
                            >
                              Payroll Data
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="tab-content">
                    <Biodata firstname={firstname} lastname={lastname} gender={gender} email={email}
                    password={password} employeeID={employeeID} phoneNo={phoneNo} joiningDate={joiningDate}
                    department={department} designation={designation} shoeSize={shoeSize} shirtSize={shirtSize}
                    setFirstName={setFirstName} setLastName={setLastName} setGender={setGender} 
                    setEmail={setEmail} setPassword={setPassword} setEmployeeID={setEmployeeID} 
                    setJoiningDate={setJoiningDate} setDepartment={setDepartment} setDesignation={setDesignation}
                    setShirtSize={setShirtSize} setShoeSize={setShoeSize} setPhoneNo={setPhoneNo} />

                    <Indentification nationality={nationality} nin={nin} passport={passport} district={district}
                    county={county} village={village} parish={parish} dob={dob} education={education} birth={birth} 
                    address={address} maritalStatus={maritalStatus} setNationality={setNationality} setNIN={setNIN} 
                    setPassport={setPassport} setDistrict={setDistrict} setCounty={setCounty} setVillage={setVillage} 
                    setParish={setParish} setDOB={setDOB} setEducation={setEducation} 
                    setBirth={setBirth} setMaritalStatus={setMaritalStatus} setAddress={setAddress}/>

                    <Payroll guardSubmit={handleSubmit} grossPay={grossPay} lst={lst} netPay={netPay} 
                    employeeNssf={employeeNssf} employerNssf={employerNssf} deductions={deductions} paye={paye}
                    setEmployeeNSSF={setEmployeeNSSF} setEmployerNSSF={setEmployerNSSF} setGrossPay={setGrossPay}
                    setNetPay={setNetPay} setLST={setLST} setDeductions={setDeductions} setPaye={setPaye} 
                    loading={loading} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Guards>
  );
};

export default AddGuard;
