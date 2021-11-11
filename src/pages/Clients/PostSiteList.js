import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadSpinner from "../../components/Handlers/Loadspinner";
import API from "../../helpers/api";

const PostSiteList = ({ clientId }) => {
  const [sites, setSites] = useState([]);
  const user = JSON.parse(localStorage.getItem("user")).user;
  const [loading, setLoading] = useState(false);

  const clientSites = sites.filter(
    (site) => site.client === clientId
  );

  const getSites = async () => {
    setLoading(true);
    try {
      const res = await API.get("/api/site");
      console.log("Post Sites ===>", res);
      setSites(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("Error fetching sites", error);
    }
  };

  useEffect(() => {
    getSites();
  }, [clientId]);
  return (
    <div>
      <div className="row mt-3">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table align-middle table-nowrap table-check table-bordered table-striped">
                  {loading && <LoadSpinner />}
                  <thead className="table-dark">
                    <tr className="tr-head">
                      <th className="align-middle"> $</th>
                      <th className="align-middle"> Post Site</th>
                      <th className="align-middle"> Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clientSites.length > 0 ? (
                      clientSites.map((post) => (
                        <tr key={post._id} className="tr-body">
                          <td>
                            <Link
                              to={`/admin/${user._id}/sites/${post._id}`}
                            >
                              {post.site}
                            </Link>
                          </td>
                          <td>{post.site}</td>
                          <td>{post.location}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <span className="text-muted font-size-15 text-align-center text-capitalize">
                          No Post Sites Added Yet!
                        </span>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSiteList;
