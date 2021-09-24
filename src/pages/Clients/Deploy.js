import React, { useEffect, useState } from "react";
import LoadHandler from "../../components/Handlers/LoadHandler";
import LoadSpinner from "../../components/Handlers/Loadspinner";
import API from "../../helpers/api";

const Deploy = ({ close, clients, id }) => {
  const [site, setSite] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [deployed, setDeployed] = useState([]);
  const [guards, setGuards] = useState([]);

  const [loading, setLoading] = useState(false);

  const getGuards = async () => {
    setLoading(true);
    try {
      const res = await API.get("/api/guard");
      console.log("Guard Backend ===>", res);
      setGuards(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      site,
      location,
      address,
      deployed,
      client: id,
    };

    try {
      const response = await API.post("/api/deployment", data);
      console.log("Posted Data ===>", response);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
    close();
    clients();
  };

  useEffect(() => {
    getGuards();
  }, [id]);
  return (
    <div>
      <div className="card">
        <div className="card-body gun">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Site</label>
              <input
                type="text"
                className="form-control"
                value={site}
                onChange={(e) => setSite(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label>Location</label>
              <input
                type="text"
                className="form-control"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label>Address</label>
              <input
                type="address"
                className="form-control"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label>Guards</label>
              <select
                className="form-control select2 select2-hidden-accessible"
                value={deployed}
                onChange={(e) => setDeployed(e.target.value)}
              >
                <optgroup label="Choose guards">
                  {guards.length > 0 ? (
                    guards.map((guard) => (
                      <option key={guard._id} value={guard._id}>
                        {guard.fname} {guard.lname}
                      </option>
                    ))
                  ) : (
                    <LoadSpinner />
                  )}
                </optgroup>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              {loading ? <LoadHandler /> : "Deploy"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Deploy;
