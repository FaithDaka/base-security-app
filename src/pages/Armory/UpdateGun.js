import React, { useEffect, useState } from "react";
import LoadHandler from "../../components/Handlers/LoadHandler";
import API from "../../helpers/api";

const UpdateGun = ({close, guns, id, show}) => {
  const [name, setName] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [status, setStatus] = useState("Active");
  const [isAssigned, setisAssigned] = useState(false);

  const [loading, setLoading] = useState(true);

  const getGun = async () => {
    setLoading(true);
    if(id !== undefined && show === true){
      try {
        const res = await API.get(`/api/gun/${id}`)
          console.log('Fetched gun', res)
          setLoading(false);
          setName(res.data.name)
          setSerialNumber(res.data.serialNumber)
          setStatus(res.data.status)
          setisAssigned(res.data.isAssigned)
      } catch (error) {
        console.log("Fetch gun details error", error);
        setLoading(false)
      }
    }
    else setLoading(false);
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const newData = {
      name, serialNumber, isAssigned, status
    }
    setLoading(true);

    try{
    const res = await API.patch(`/api/gun/${id}`, newData)
    setLoading(false);
    console.log('Updated gun', res);
    close();
    guns();
    }
    catch(err){
      console.log('Gun update error', err);
      setLoading(false);
    }
  }

  useEffect(()=>{
    getGun();
  },[id])

  return (
    <div>
      <div className="card">
        <div className="card-body gun">
          <form onSubmit={handleSubmit}>
          <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)
                }
               required/>
            </div>
            <div className="form-group">
              <label>Serial Number</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                name="serialNumber"
                value={serialNumber}
                onChange={(e) => setSerialNumber(e.target.value)}
                required/>
            </div>
            <div className="form-group">
              <label>Assigned</label>
              <select
                className="form-control select2 select2-hidden-accessible"
                value={isAssigned}
                onChange={(e) => setisAssigned(e.target.value)}
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
            <div className="form-group">
              <label>Gun Status</label>
              <select
                className="form-control select2 select2-hidden-accessible"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              {loading ? <LoadHandler /> : 'Update Gun'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateGun;
