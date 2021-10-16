import React, { useEffect, useState } from "react";

import LoadHandler from "../../components/Handlers/LoadHandler";
import LoadSpinner from "../../components/Handlers/Loadspinner";
import API from "../../helpers/api";

const Deploy = ({ close, guardId }) => {
  const [site, setSite] = useState("");
  const [client, setClient] = useState("");
  const [clients, setClients] = useState([]);
  const [location, setLocation] = useState("");
  // const [deployed, setDeployed] = useState([]);
  // const [guards, setGuards] = useState([]);
  const [loading, setLoading] = useState(false);

  const getClients = async () => {
    setLoading(true);
    try {
      const res = await API.get("/api/client");
      console.log("Clients Backend ===>", res);
      setClients(res.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  // const handleToggle = (c) => () => {
  //   const clickedGuard = deployed.indexOf(c);
  //   const all = [...deployed];

  //   if (clickedGuard === -1) {
  //     all.push(c);
  //   } else {
  //     all.splice(clickedGuard, 1);
  //   }
  //   console.log(all);
  //   setDeployed(all);
  // };

  // const getGuards = async () => {
  //   setLoading(true);
  //   try {
  //     const res = await API.get("/api/guard");
  //     console.log("Guard Backend ===>", res);
  //     setGuards(res.data);
  //     setLoading(false);
  //   } catch (error) {
  //     setLoading(false);
  //     console.log("error", error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      client,
      site,
      location,
      guard: guardId,
    };

    try {
      const response = await API.post("/api/deployment", data);
      console.log("Posted Data ===>", response);
      setSite("");
      setLocation("");
      // setDeployed("");
      setLoading(false);
    } catch (error) {
      console.log("Deployment Post Error", error);
      setLoading(false);
    }
    close();
  };

  useEffect(() => {
    getClients();
  }, [guardId]);
  return (
    <div>
      <div className="card">
        <div className="card-body gun">
          <form onSubmit={handleSubmit}>
          <div className="mb-3">
              <label>Client</label>
              <select
                className="form-control select2 select2-hidden-accessible"
                value={client}
                onChange={(e) => setClient(e.target.value)}
              >
                <option>Select a client</option>
                {clients.length > 0 ? (
                  clients.map((c) => (
                    <option key={c._id} value={c._id}>
                      {c.fname} {c.lname}
                    </option>
                  ))
                ) : (
                  <LoadSpinner />
                )}
              </select>
            </div>
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
            {/* <label className="font-size-17">Select Guards to deploy</label>
            <fieldset
              style={{
                backgroundColor: "#eee",
                borderLeft: "4px solid green",
                padding: "5px",
                overflowY: "scroll",
              }}
            >
              {guards.length > 0 ? (
                guards.map((guard) => (
                  <div key={guard._id}>
                    <input
                      type="checkbox"
                      id="deployment"
                      name="deployment"
                      value={deployed}
                      onChange={handleToggle(guard._id)}
                    />
                    <label for={guard._id} className="ml-2 font-size-16">
                      {guard.fname} {guard.lname}
                    </label>
                  </div>
                ))
              ) : (
                <LoadSpinner />
              )}
            </fieldset> */}
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
