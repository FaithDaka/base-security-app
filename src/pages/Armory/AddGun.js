import React, { useState } from "react";
import API from '../../helpers/api';

const AddGun = ({close, guns}) => {
  const [name, setName] = useState('')
  const [serialNumber, setSerialNumber] = useState('')
  const [status, setStatus] = useState('Active')
  const [isAssigned, setisAssigned] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { name, serialNumber, status, isAssigned }

    try {
      const response = await API.post('/api/gun/register', data);
      close()
      guns()
      console.log("Posted Data ===>", response)

    } catch (error) {
      console.log('error', error);
    }
  }
  return (
    <>
      <div className="card">
        <div className="card-header"></div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>Serial Number:</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                value={serialNumber}
                onChange={(e) => setSerialNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Date Registered:</label>
              <input type="date" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary"> Save</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddGun;
