import React, { useEffect, useState } from "react";
import LoadHandler from "../../components/Handlers/LoadHandler";
import LoadSpinner from "../../components/Handlers/Loadspinner";
import API from "../../helpers/api";

const AssignGun = ({ close, guards, id }) => {
  const [gun, setGun] = useState();
  const [guns, setGuns] = useState([]);

  const [loading, setLoading] = useState(false);

  const getGuns = async () => {
    setLoading(true);
    try {
      const res = await API.get("/api/gun");
      console.log("Guns Backend ===>", res);
      setGuns(res.data.guns);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = { gun };

    try {
      const response = await API.patch(`/api/guard/${id}/assignGun`, data);
      console.log("Posted Data ===>", response);
      setLoading(false);
      setGun();
      close();
      guards();
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  useEffect(()=>{
      getGuns();
  },[id])
  return (
    <>
      <div className="card">
        <div className="card-body gun">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Gun</label>
              <select
                className="form-control select2 select2-hidden-accessible"
                value={gun}
                onChange={(e) => setGun(e.target.value)}
              >
                {guns.length > 0 ? (
                  guns.map((gun) => (
                    <option key={gun._id} value={gun._id}>
                      {gun.name}
                    </option>
                  ))
                ) : (
                  <LoadSpinner />
                )}
              </select>
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

export default AssignGun;
