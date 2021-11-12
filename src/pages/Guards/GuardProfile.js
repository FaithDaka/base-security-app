/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import avatar from "../../assets/img/avatar.jpg";
import { Link } from "react-router-dom";
import AssignGun from "./AssignGun";
import DeployGuard from "../Clients/Deploy";
import API from "../../helpers/api";
import Modal from "../../components/Modal";
import LoadSpinner from "../../components/Handlers/Loadspinner";

const GuardProfile = (props) => {
  const id = props.match.params.guard_id;
  const [userId, setUserId] = useState();
  const [guard, setGuard] = useState({})
  const [loading, setLoading] = useState(false);
 

  const [add, setAdd] = useState();
  const [assign, setAssign] = useState();

  const openAdd = () => setAdd(true);
  const closeAdd = () => setAdd(false);
  const openAssign = () => setAssign(true);
  const closeAssign = () => setAssign(false);

  const user = JSON.parse(localStorage.getItem("user")).user;

  const getGuard = async (id) => {
    setLoading(true);
    try {
      const res = await API.get(`/api/guard/${id}`);
      console.log("Guard Backend ===>", res);
      setUserId(res.data.userId);
      setGuard(res.data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching guard", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getGuard(id);
  }, [id]);

  return (
    <Layout>
      <Modal show={add} close={closeAdd} title="Deploy Guard To Site">
        <DeployGuard close={closeAdd} guardId={id} />
      </Modal>
      <Modal show={assign} close={closeAssign} title="Assign Gun">
        <AssignGun close={closeAssign} guardId={id} />
      </Modal>
      <div class="">
        <div class="page-header">
          <div class="row">
            <div class="col-sm-12">
              <h3 class="page-title">Guard Profile</h3>
            </div>
          </div>
        </div>
        <div class="card mb-0">
          <div class="card-body">
            <div class="row">
              <div class="col-md-12">
                <div class="profile-view">
                  <div class="profile-img-wrap">
                    <div class="profile-img">
                      <a href="#">
                        <img alt="" src="/assets/images/avatar.jpg" />
                      </a>
                    </div>
                  </div>
                  <div class="profile-basic">
                    <div class="row">
                      <div class="col-md-5">
                        <div class="profile-info-left">
                          <h3 class="user-name m-t-0 mb-0">{guard.firstname} {guard.lastname}</h3>
                          <h6 class="text-muted">{guard.department}</h6>
                          <small class="text-muted">{guard.gender}</small>
                          <div class="staff-id">Employee ID : FT-{guard.employeeID}</div>
                          <div class="small doj text-muted">
                            Date of Join : {guard.joiningDate}
                          </div>
                          <div className="d-flex">
                          <div class="staff-msg">
                            <button class="btn btn-custom" onClick={openAdd}>
                              Deploy Guard
                            </button>
                          </div>
                          {guard.isAssignedGun ? <div class="staff-msg ml-3">
                            <button class="btn btn-custom" onClick={openAssign}>
                              Return Gun
                            </button>
                          </div> : <div class="staff-msg ml-3">
                            <button class="btn btn-custom" onClick={openAssign}>
                              Assign Gun
                            </button>
                          </div>}
                          
                          </div>
                        </div>
                      </div>
                      <div class="col-md-7">
                        <ul class="personal-info">
                          <li>
                            <div class="title-profile">Phone:</div>
                            <div class="text">
                              <a href="">0{guard.phoneNo}</a>
                            </div>
                          </li>
                          <li>
                            <div class="title-profile">isDeployed:</div>
                            <div class="text">
                              <a href="">{guard.isDeployed ? 'YES' : 'NO'}</a>
                            </div>
                          </li>
                          <li>
                            <div class="title-profile">Assigned Gun:</div>
                            <div class="text">{guard.isAssignedGun ? 'YES' : 'NO'}</div>
                          </li>
                          <li>
                            <div class="title-profile">Post Site:</div>
                            <div class="text">
                              {guard.postsite}
                            </div>
                          </li>
                          <li>
                            <div class="title-profile">Gender:</div>
                            <div class="text">{guard.gender}</div>
                          </li>
                          <li>
                            <div class="title-profile">Reports to:</div>
                            <div class="text">
                              <div class="avatar-box">
                                <div class="avatar avatar-xs">
                                  <img src="/assets/images/avatar.jpg" alt="" />
                                </div>
                              </div>
                              <a href="profile.html">Ronald Mugisha</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="pro-edit">
                    <a
                      data-target="#profile_info"
                      data-toggle="modal"
                      class="edit-icon"
                      href="#"
                    >
                      <i class="fas fa-pen"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-box">
          <div class="row user-tabs">
            <div class="col-lg-12 col-md-12 col-sm-12 line-tabs">
              <div class="card">
                <ul class="nav nav-tabs nav-tabs-bottom">
                  <li class="nav-item">
                    <a
                      href="#emp_profile"
                      data-toggle="tab"
                      class="nav-link active"
                    >
                      Profile
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#emp_projects" data-toggle="tab" class="nav-link">
                      Pay Slips
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="#bank_statutory"
                      data-toggle="tab"
                      class="nav-link"
                    >
                      Bank &amp; Statutory{" "}
                      <small class="text-danger">(Admin Only)</small>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="tab-content">
            <div
              id="emp_profile"
              class="pro-overview tab-pane fade show active"
            >
              <div class="row">
                <div class="col-md-6 d-flex">
                  <div class="card profile-box flex-fill">
                    <div class="card-body">
                      <h3 class="card-title">
                        Indentification Information{" "}
                        <a
                          href="#"
                          class="edit-icon"
                          data-toggle="modal"
                          data-target="#personal_info_modal"
                        >
                          <i class="fas fa-pen"></i>
                        </a>
                      </h3>
                      <ul class="personal-info">
                      <li>
                          <div class="title-profile-tab">National ID.</div>
                          <div class="text">{guard.nin}</div>
                        </li>
                        <li>
                          <div class="title-profile-tab">Passport No.</div>
                          <div class="text">{guard.passport}</div>
                        </li>
                        <li>
                          <div class="title-profile-tab">Nationality</div>
                          <div class="text">{guard.nationality}</div>
                        </li>
                        <li>
                          <div class="title-profile-tab">Religion</div>
                          <div class="text">Christian</div>
                        </li>
                        <li>
                          <div class="title-profile-tab">Marital status</div>
                          <div class="text">{guard.maritalStatus}</div>
                        </li>
                        <li>
                          <div class="title-profile-tab">
                            District
                          </div>
                          <div class="text">{guard.district}</div>
                        </li>
                        <li>
                          <div class="title-profile-tab">Sub County</div>
                          <div class="text">{guard.county}</div>
                        </li>
                        <li>
                          <div class="title-profile-tab">
                            Parish
                          </div>
                          <div class="text">{guard.parish}</div>
                        </li>
                        <li>
                          <div class="title-profile-tab">Village</div>
                          <div class="text">{guard.village}</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 d-flex">
                  <div class="card profile-box flex-fill">
                    <div class="card-body">
                      <h3 class="card-title">
                        Emergency Contact{" "}
                        <a
                          href="#"
                          class="edit-icon"
                          data-toggle="modal"
                          data-target="#emergency_contact_modal"
                        >
                          <i class="fas fa-pen"></i>
                        </a>
                      </h3>
                      <h5 class="section-title">Primary</h5>
                      <ul class="personal-info">
                        <li>
                          <div class="title-profile-tab">Name</div>
                          <div class="text">John Doe</div>
                        </li>
                        <li>
                          <div class="title-profile-tab">Relationship</div>
                          <div class="text">Father</div>
                        </li>
                        <li>
                          <div class="title-profile-tab">Phone </div>
                          <div class="text">9876543210, 9876543210</div>
                        </li>
                      </ul>
                      <hr />
                      <h5 class="section-title-profile-tab">Secondary</h5>
                      <ul class="personal-info">
                        <li>
                          <div class="title-profile-tab">Name</div>
                          <div class="text">Karen Wills</div>
                        </li>
                        <li>
                          <div class="title-profile-tab">Relationship</div>
                          <div class="text">Brother</div>
                        </li>
                        <li>
                          <div class="title-profile-tab">Phone </div>
                          <div class="text">9876543210, 9876543210</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 d-flex">
                  <div class="card profile-box flex-fill">
                    <div class="card-body">
                      <h3 class="card-title">Payroll information</h3>
                      <ul class="personal-info">
                        <li>
                          <div class="title-profile-tab">Bank name</div>
                          <div class="text">Housing Finance Bank</div>
                        </li>
                        <li>
                          <div class="title-profile-tab">Bank account No.</div>
                          <div class="text">159843014641</div>
                        </li>
                        <li>
                          <div class="title-profile-tab">Gross Pay</div>
                          <div class="text">{guard.grossPay}</div>
                        </li>
                        <li>
                          <div class="title-profile-tab">Employer NSSF</div>
                          <div class="text">{guard.employerNssf}</div>
                        </li>
                        <li>
                          <div class="title-profile-tab">Employee NSSF</div>
                          <div class="text">{guard.employeeNssf}</div>
                        </li>
                        <li>
                          <div class="title-profile-tab">PAYE</div>
                          <div class="text">{guard.paye}</div>
                        </li>
                        <li>
                          <div class="title-profile-tab">Deductions</div>
                          <div class="text">{guard.deductions}</div>
                        </li>
                        <li>
                          <div class="title-profile-tab">Net Pay</div>
                          <div class="text">{guard.netPay}</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 d-flex">
                  <div class="card profile-box flex-fill">
                    <div class="card-body">
                      <h3 class="card-title">
                        Family Informations{" "}
                        <a
                          href="#"
                          class="edit-icon"
                          data-toggle="modal"
                          data-target="#family_info_modal"
                        >
                          <i class="fas fa-pen"></i>
                        </a>
                      </h3>
                      <div class="table-responsive">
                        <table class="table table-nowrap">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Relationship</th>
                              <th>Date of Birth</th>
                              <th>Phone</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Leo</td>
                              <td>Brother</td>
                              <td>Feb 16th, 2019</td>
                              <td>9876543210</td>
                              <td class="text-right">
                                <div class="dropdown dropdown-action">
                                  <a
                                    aria-expanded="false"
                                    data-toggle="dropdown"
                                    class="action-icon dropdown-toggle"
                                    href="#"
                                  >
                                    <i class="fas fa-ellipsis-v"></i>
                                  </a>
                                  <div class="dropdown-menu dropdown-menu-right">
                                    <a href="#" class="dropdown-item">
                                      <i class="far fa-edit m-r-5"></i> Edit
                                    </a>
                                    <a href="#" class="dropdown-item">
                                      <i class="far fa-trash-alt m-r-5"></i>{" "}
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="row">
                <div class="col-md-6 d-flex">
                  <div class="card profile-box flex-fill">
                    <div class="card-body">
                      <h3 class="card-title">
                        Education Informations{" "}
                        <a
                          href="#"
                          class="edit-icon"
                          data-toggle="modal"
                          data-target="#education_info"
                        >
                          <i class="fa fa-pencil"></i>
                        </a>
                      </h3>
                      <div class="experience-box">
                        <ul class="experience-list">
                          <li>
                            <div class="experience-user">
                              <div class="before-circle"></div>
                            </div>
                            <div class="experience-content">
                              <div class="timeline-content">
                                <a href="#/" class="name">
                                  International College of Arts and Science (UG)
                                </a>
                                <div>Bsc Computer Science</div>
                                <span class="time">2000 - 2003</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="experience-user">
                              <div class="before-circle"></div>
                            </div>
                            <div class="experience-content">
                              <div class="timeline-content">
                                <a href="#/" class="name">
                                  International College of Arts and Science (PG)
                                </a>
                                <div>Msc Computer Science</div>
                                <span class="time">2000 - 2003</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 d-flex">
                  <div class="card profile-box flex-fill">
                    <div class="card-body">
                      <h3 class="card-title">
                        Experience{" "}
                        <a
                          href="#"
                          class="edit-icon"
                          data-toggle="modal"
                          data-target="#experience_info"
                        >
                          <i class="fa fa-pencil"></i>
                        </a>
                      </h3>
                      <div class="experience-box">
                        <ul class="experience-list">
                          <li>
                            <div class="experience-user">
                              <div class="before-circle"></div>
                            </div>
                            <div class="experience-content">
                              <div class="timeline-content">
                                <a href="#/" class="name">
                                  Web Designer at Zen Corporation
                                </a>
                                <span class="time">
                                  Jan 2013 - Present (5 years 2 months)
                                </span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="experience-user">
                              <div class="before-circle"></div>
                            </div>
                            <div class="experience-content">
                              <div class="timeline-content">
                                <a href="#/" class="name">
                                  Web Designer at Ron-tech
                                </a>
                                <span class="time">
                                  Jan 2013 - Present (5 years 2 months)
                                </span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="experience-user">
                              <div class="before-circle"></div>
                            </div>
                            <div class="experience-content">
                              <div class="timeline-content">
                                <a href="#/" class="name">
                                  Web Designer at Dalt Technology
                                </a>
                                <span class="time">
                                  Jan 2013 - Present (5 years 2 months)
                                </span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>

            <div class="tab-pane fade" id="emp_projects">
              <div class="row staff-grid-row">
                <div class="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                  <div class="profile-widget">
                    <div class="profile-img">
                      <a href="profile.html" class="avatar">
                        <img src="/assets/images/avatar.jpg" alt="" />
                      </a>
                    </div>
                    <div class="dropdown profile-action">
                      <a
                        href="#"
                        class="action-icon dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="fas fa-ellipsis-v"></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-right" >
                        <a
                          class="dropdown-item"
                          href="#"
                          data-toggle="modal"
                          data-target="#edit_employee"
                        >
                          <i class="far fa-edit"></i> Edit
                        </a>
                        <a
                          class="dropdown-item"
                          href="#"
                          data-toggle="modal"
                          data-target="#delete_employee"
                        >
                          <i class="far fa-trash-alt"></i> Delete
                        </a>
                      </div>
                    </div>
                    <h4 class="user-name m-t-10 mb-0 text-ellipsis">
                      <a href="profile.html">John Doe</a>
                    </h4>
                    <div class="small text-muted">Web Designer</div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                  <div class="profile-widget">
                    <div class="profile-img">
                      <a href="profile.html" class="avatar">
                        <img src="/assets/images/avatar.jpg" alt="" />
                      </a>
                    </div>
                    <div class="dropdown profile-action">
                      <a
                        href="#"
                        class="action-icon dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="fas fa-ellipsis-v"></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-right" >
                        <a
                          class="dropdown-item"
                          href="#"
                          data-toggle="modal"
                          data-target="#edit_employee"
                        >
                          <i class="far fa-edit"></i> Edit
                        </a>
                        <a
                          class="dropdown-item"
                          href="#"
                          data-toggle="modal"
                          data-target="#delete_employee"
                        >
                          <i class="far fa-trash-alt"></i> Delete
                        </a>
                      </div>
                    </div>
                    <h4 class="user-name m-t-10 mb-0 text-ellipsis">
                      <a href="profile.html">John Doe</a>
                    </h4>
                    <div class="small text-muted">Web Designer</div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                  <div class="profile-widget">
                    <div class="profile-img">
                      <a href="profile.html" class="avatar">
                        <img src="/assets/images/avatar.jpg" alt="" />
                      </a>
                    </div>
                    <div class="dropdown profile-action">
                      <a
                        href="#"
                        class="action-icon dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="fas fa-ellipsis-v"></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-right" >
                        <a
                          class="dropdown-item"
                          href="#"
                          data-toggle="modal"
                          data-target="#edit_employee"
                        >
                          <i class="far fa-edit"></i> Edit
                        </a>
                        <a
                          class="dropdown-item"
                          href="#"
                          data-toggle="modal"
                          data-target="#delete_employee"
                        >
                          <i class="far fa-trash-alt"></i> Delete
                        </a>
                      </div>
                    </div>
                    <h4 class="user-name m-t-10 mb-0 text-ellipsis">
                      <a href="profile.html">John Doe</a>
                    </h4>
                    <div class="small text-muted">Web Designer</div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                  <div class="profile-widget">
                    <div class="profile-img">
                      <a href="profile.html" class="avatar">
                        <img src="/assets/images/avatar.jpg" alt="" />
                      </a>
                    </div>
                    <div class="dropdown profile-action">
                      <a
                        href="#"
                        class="action-icon dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="fas fa-ellipsis-v"></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-right" >
                        <a
                          class="dropdown-item"
                          href="#"
                          data-toggle="modal"
                          data-target="#edit_employee"
                        >
                          <i class="far fa-edit"></i> Edit
                        </a>
                        <a
                          class="dropdown-item"
                          href="#"
                          data-toggle="modal"
                          data-target="#delete_employee"
                        >
                          <i class="far fa-trash-alt"></i> Delete
                        </a>
                      </div>
                    </div>
                    <h4 class="user-name m-t-10 mb-0 text-ellipsis">
                      <a href="profile.html">John Doe</a>
                    </h4>
                    <div class="small text-muted">Web Designer</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="tab-pane fade" id="bank_statutory">
             <p>Bank Details Go Here!!!</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GuardProfile;
