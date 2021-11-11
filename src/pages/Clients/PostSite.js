import React, { useState } from "react";

import LoadHandler from "../../components/Handlers/LoadHandler";
import LoadSpinner from "../../components/Handlers/Loadspinner";
import API from "../../helpers/api";

const PostSite = ({ close, client }) => {
  const [site, setSite] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      client,
      site,
      location,
    };

    try {
      const response = await API.post("/api/site", data);
      console.log("Post Site Data ===>", response);
      setSite("");
      setLocation("");
      setLoading(false);
    } catch (error) {
      console.log("Deployment Post Error", error);
      setLoading(false);
    }
    close();
  };

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
            <button type="submit" className="btn btn-primary">
              {loading ? <LoadHandler /> : "PostSite"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostSite;
