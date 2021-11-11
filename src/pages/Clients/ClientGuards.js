/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Modal from "../../components/Modal";
import PostGuards from "./PostGuards"
import { Link } from "react-router-dom";
import LoadSpinner from "../../components/Handlers/Loadspinner";
import API from "../../helpers/api";

const ClientGuards = ({ clientId }) => {
  const [deployed, setDeployed] = useState([]);
  const [deploy, setDeploy] = useState();
  const [siteId, setSiteId] = useState();
  const user = JSON.parse(localStorage.getItem("user")).user;
  const [loading, setLoading] = useState(false);

  const id = clientId;
  // const guardId = deployed._id;

  const openDeploy = (id) => setDeploy(true);
  const closeDeploy = () => setDeploy(false);

  const getDeployment = async () => {
    setLoading(true);
    try {
      const res = await API.get(`/api/deployment/client/${id}`);
      // const res = await API.get(`/api/deployment`);
      console.log("Deployment ===>", res);
      setDeployed(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("Error fetching deployed", error);
    }
  };

  useEffect(() => {
    getDeployment();
  }, [clientId]);

  console.log("Backend Stuff ====>", deployed)
  return (
    <div class="row staff-grid-row">
      <Modal show={deploy} close={closeDeploy} title={`Dost Site Guards`}>
        <PostGuards close={closeDeploy} clientId={id} siteId={siteId} deployed={deployed} />
      </Modal>
      {deployed.length > 0 ? (
        deployed.map((deploy) => (
          <div class="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
            <div class="profile-widget">
              <div class="profile-img">
                <button onClick={() => {
                  openDeploy(deploy.site)
                  setSiteId(deploy.site)
                  }} class="avatar">
                  <img src="/assets/images/avatar.jpg" alt="" />
                </button>
              </div>
              <h4 class="user-name m-t-10 mb-0 text-ellipsis">
                <a href="profile.html">{deploy.site}</a>
              </h4>
              <div class="small text-muted">{deploy.site}</div>
            </div>
          </div>
        ))
      ) : (
        <tr>
          <span className="text-muted font-size-15 text-align-center text-capitalize">
            No deployed yet!
          </span>
        </tr>
      )}
    </div>
  );
};

export default ClientGuards;
