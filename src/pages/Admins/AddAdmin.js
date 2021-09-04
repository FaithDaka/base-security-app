import React, { useState } from "react";
import { Link } from "react-router-dom";
import API from '../../helpers/api';
import Guards from "./index";

const AddAdmin = ({ history }) => {
    const [fname, setFName] = useState('')
    const [lname, setLName] = useState('')
    const [phone, setPhone] = useState('')
    const [location, setLocation] = useState('')
    const [sex, setSex] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('admin')
    const [password, setPassword] = useState('')
    const [maritualStatus, setMaritualStatus] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = { fname, lname, phone, location, sex, email, password, role, maritualStatus }

        try {
            const response = await API.post('/api/auth/register', data);
            console.log("Posted Data ===>", response)
                history.push("/admins");

        } catch (error) {
            console.log('error', error);
        }
    }
    return (
        <Guards>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                            <span className="col-4 row" title="Go back">
                                <Link to="/guards">
                                    <i className="fa fa-arrow-left"></i>
                                </Link>
                                <h4 className="ml-3 mb-sm-0 font-size-16">Add New Admin User</h4>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Basic Information</h4>
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="mb-3">
                                                <label htmlFor="productname">First Name</label>
                                                <input
                                                    id="productname"
                                                    name="productname"
                                                    type="text"
                                                    className="form-control"
                                                    value={fname}
                                                    onChange={(e) => setFName(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="manufacturername">
                                                    Last Name
                                                </label>
                                                <input
                                                    id="manufacturername"
                                                    name="manufacturername"
                                                    type="text"
                                                    className="form-control"
                                                    value={lname}
                                                    onChange={(e) => setLName(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="manufacturerbrand">
                                                    Email
                                                </label>
                                                <input
                                                    id="manufacturerbrand"
                                                    name="manufacturerbrand"
                                                    type="text"
                                                    className="form-control"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="price">Password</label>
                                                <input
                                                    id="price"
                                                    name="price"
                                                    type="text"
                                                    className="form-control"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="mb-3">
                                                <label className="control-label">Phone Number</label>
                                                <input
                                                    id="price"
                                                    name="price"
                                                    type="text"
                                                    className="form-control"
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="productdesc">Location</label>
                                                <input
                                                    id="price"
                                                    name="price"
                                                    type="text"
                                                    className="form-control"
                                                    value={location}
                                                    onChange={(e) => setLocation(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="productdesc">Martial Status</label>
                                                <input
                                                    id="price"
                                                    name="price"
                                                    type="text"
                                                    className="form-control"
                                                    value={maritualStatus}
                                                    onChange={(e) => setMaritualStatus(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="productdesc">Sex</label>
                                                <input
                                                    id="price"
                                                    name="price"
                                                    type="text"
                                                    className="form-control"
                                                    value={sex}
                                                    onChange={(e) => setSex(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-wrap gap-2">
                                        <button
                                            type="submit"
                                            className="btn btn-primary waves-effect waves-light"
                                        >
                                            Save Changes
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div style={{ height: "50px" }}></div>
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title mb-3">Guard Profile Image</h4>
                                <form
                                    action="/"
                                    method="post"
                                    className="dropzone dz-clickable"
                                >
                                    <div
                                        className="dz-message needsclick mt-3"
                                        style={{ textAlign: "center" }}
                                    >
                                        <div className="mb-3 ">
                                            <i className="display-4 text-muted font-size-25 fas fa-upload"></i>
                                        </div>
                                        <h4>Drop files here or click to upload.</h4>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Guards>
    );
};

export default AddAdmin;
