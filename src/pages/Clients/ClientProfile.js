/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../helpers/api";
import PostSite from "./PostSite";
import Modal from "../../components/Modal";
import ClientInvoices from "./ClientInvoices";
import ClientGuards from "./ClientGuards";
import Client from ".";
import PostSiteList from "./PostSiteList";

const ClientProfile = ({ match }) => {
  const id = match.params.client_id;

  const [site, setSite] = useState(false);
  const [deploy, setDeploy] = useState();
  const [client, setClient] = useState({});
  const [loading, setLoading] = useState(false);

  const openDeploy = (id) => setDeploy(true);
  const closeDeploy = () => setDeploy(false);

  const openSite = (id) => setSite(true);
  const closeSite = () => setSite(false);

  const getClient = async (id) => {
    setLoading(true);
    try {
      const res = await API.get(`/api/client/${id}`);
      setClient(res.data);
      console.log("Client Fetch Backend ===>", res);
    } catch (error) {
      console.log("Error fetching guard", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getClient(id);
  }, [id]);
  return (
    <Client>
      <Modal
        show={site}
        close={closeSite}
        title={`Post Site ${client.fname} ${client.lname}`}
      >
        <PostSite close={closeSite} client={id} />
      </Modal>
      <div class="">
        <div class="page-header">
          <div class="row">
            <div class="col-sm-12">
              <h3 class="page-title">Client Profile</h3>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="index.html">Dashboard</a>
                </li>
                <li class="breadcrumb-item active">Profile</li>
              </ul>
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
                          <h3 class="user-name m-t-0 mb-0">
                            {client.fname} {client.lname}
                          </h3>
                          <h6 class="text-muted">{client.company}</h6>
                          <div class="staff-id">Client ID : {client._id}</div>
                          <div class="small doj text-muted">
                            Date of Join : 1st Jan 2013
                          </div>
                          <div className="d-flex">
                            <div class="staff-msg">
                              <button
                                class="btn btn-custom"
                                onClick={() => openSite(client._id)}
                              >
                                Add Post Site
                              </button>
                            </div>
                            <div class="staff-msg ml-2">
                              <Link
                                class="btn btn-custom"
                                to={`/admin/invoices/${client._id}`}
                              >
                                Generate Invoice
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-7">
                        <ul class="personal-info">
                          <li>
                            <div class="title-profile">Phone:</div>
                            <div class="text">
                              <a href="">{client.phone}</a>
                            </div>
                          </li>
                          <li>
                            <div class="title-profile">Email:</div>
                            <div class="text">
                              <a href="">johndoe@example.com</a>
                            </div>
                          </li>
                          <li>
                            <div class="title-profile">Address:</div>
                            <div class="text">{client.address}</div>
                          </li>
                          <li>
                            <div class="title-profile">Location:</div>
                            <div class="text">{client.location}</div>
                          </li>
                          <li>
                            <div class="title-profile">
                              Relationship Manager:
                            </div>
                            <div class="text">
                              <div class="avatar-box">
                                <div class="avatar avatar-xs">
                                  <img src="/assets/images/avatar.jpg" alt="" />
                                </div>
                              </div>
                              <a href="">Jeffery Lalor</a>
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
                    <a href="#sites" data-toggle="tab" class="nav-link active">
                      Post Sites
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#guards" data-toggle="tab" class="nav-link">
                      Guards Deployed
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#invoice" data-toggle="tab" class="nav-link">
                      Invoices
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#payments" data-toggle="tab" class="nav-link">
                      Payments
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="tab-content">
            <div class="tab-pane fade" id="sites">
              <PostSiteList clientId={id} />
            </div>
            <div id="guards" class="pro-overview tab-pane fade show active">
              <div class="row staff-grid-row">
                <ClientGuards clientId={id} />
              </div>
            </div>
            <div class="tab-pane fade" id="invoice">
              <ClientInvoices clientId={id} />
            </div>
          </div>
        </div>
      </div>
    </Client>
  );
};

export default ClientProfile;
