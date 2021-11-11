import React, { useEffect, useState } from "react";
import LoadHandler from "../../components/Handlers/LoadHandler";
import LoadSpinner from "../../components/Handlers/Loadspinner";
import API from "../../helpers/api";

const ReturnGun = ({ close, guardId }) => {
  const [assignedGun, setAssignedGun] = useState();
  const [bulletsAssigned, setBulletsAssigned] = useState();
  const [gun, setGun] = useState({});

  const [loading, setLoading] = useState(false);

  const getGun = async (id) => {
    setLoading(true);
    try {
      const res = await API.get(`/api/gun/${id}`);
      console.log("Gun Fetch Backend ===>", res);
      setGun(res.data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching guard", error);
      setLoading(false);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await API.patch(`/api/guard/return/${guardId}`, {
        assignedGun, bulletsAssigned
      });
      console.log("Posted Data ===>", response);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
    close();
  };

  useEffect(() => {
    getGun();
  }, [guardId]);
  return (
    <>
      <div className="card">
        <div className="card-body gun">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Gun</label>
              <select
                className="form-control select2 select2-hidden-accessible"
                value={assignedGun}
                onChange={(e) => setAssignedGun(e.target.value)}
              >
                <option>Choose Gun</option>
                {unAssigned.length > 0 ? (
                  unAssigned.map((gun) => (
                    <option key={gun._id} value={gun._id}>
                      {gun.name}
                    </option>
                  ))
                ) : (
                  <LoadSpinner />
                )}
              </select>
            </div>
            <div className="mb-3">
              <label>Bullets / Rounds Assigned</label>
              <input
                type="text"
                className="form-control"
                value={bulletsAssigned}
                onChange={(e) => setBulletsAssigned(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              {loading ? <LoadHandler /> : "Assign"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ReturnGun;
