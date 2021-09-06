import React, { useEffect, useState } from "react";
import LoadHandler from "../../components/Handlers/LoadHandler";
import API from "../../helpers/api";
import SweetAlert from "react-bootstrap-sweetalert";

const UpdateGun = ({close, guns, id, show}) => {
  const [name, setName] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [status, setStatus] = useState("Active");
  const [isAssigned, setisAssigned] = useState(false);
  const [update, setUpdate] = useState({});
  const [data, setData] = useState({})

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const hideAlert = () => setShowAlert(false);

  const getGun = async () => {
    setLoading(true);
    if(id !== undefined && show === true){
      try {
        const res = await API.get(`/api/gun/${id}`)
          console.log('Fetched gun', res)
          setLoading(false);
          setData({
            name: res.data.name,
            serialNumber: res.data.serialNumber,
            status: res.data.status,
            isAssigned: res.data.isAssigned,
          });
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
      name, serialNumber, status, isAssigned
    }
    setUpdate(newData);
    setLoading(true);

    try{
    const res = await API.patch(`/api/gun/${id}`, update)
    setLoading(false);
    console.log('Updated gun', res);
    close();
    setSuccess(true);
    setShowAlert(true);
    guns();
    }
    catch(err){
      console.log('Gun update error', err);
      setLoading(false);
      setError(true);
      setShowAlert(true);
    }
  }

  useEffect(()=>{
    getGun();
  })

  return (
    <div>
      {showAlert && success && (
        <SweetAlert
          success
          onConfirm={() => hideAlert()}
          onCancel={() => hideAlert()}
          title="Gun Details Updated"
          timeout={3000}
        />
      )}
      {showAlert && error && (
        <SweetAlert
          danger
          onConfirm={() => hideAlert()}
          onCancel={() => hideAlert()}
          title="There was an error. Please try again!"
          timeout={3000}
        />
      )}
      <div className="card">
        <div className="card-body gun">
          <form onSubmit={handleSubmit}>
          <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                value={data.name}
                onChange={(e)=>{
                  setName(e.target.value)
                }}
               required/>
            </div>
            <div className="form-group">
              <label>Serial Number</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                name="serialNumber"
                value={data.serialNumber}
                onChange={(e)=>{
                  setSerialNumber(e.target.value)
                }}
                required/>
            </div>
            <div className="form-group">
              <label>Assigned</label>
              <select
                className="form-control select2 select2-hidden-accessible"
                value={data.isAssigned}
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
                value={data.status}
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
