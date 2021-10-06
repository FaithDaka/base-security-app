import React from "react";

const Biodata = ({firstname, lastname, gender, email, password, employeeID, phoneNo, joiningDate,
department, designation, shoeSize, shirtSize, setFirstName, setLastName, setGender, setEmail, setPassword,
setEmployeeID, setJoiningDate, setDepartment, setDesignation, setShirtSize, setShoeSize, setPhoneNo}) => {
 

  return (
    <div id="bio-data" class="pro-overview tab-pane fade show active">
      <div class="row">
        <div class="col-sm-4">
          <div class="form-group">
            <label class="col-form-label">
              First Name <span class="text-danger">*</span>
            </label>
            <input
              class="form-control"
              type="text"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label class="col-form-label">Last Name</label>
            <input
              class="form-control"
              type="text"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label class="col-form-label">
              Email <span class="text-danger">*</span>
            </label>
            <input
              class="form-control"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label class="col-form-label">
              Password <span class="text-danger">*</span>
            </label>
            <input
              class="form-control"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label class="col-form-label">Phone Number</label>
            <input
              class="form-control"
              type="text"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label class="col-form-label">Shirt Size</label>
            <input
              class="form-control"
              type="text"
              value={shirtSize}
              onChange={(e) => setShirtSize(e.target.value)}
            />
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label class="col-form-label">
              Employee ID <span class="text-danger">*</span>
            </label>
            <input
              type="text"
              class="form-control"
              value={employeeID}
              onChange={(e) => setEmployeeID(e.target.value)}
            />
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label class="col-form-label">
              Joining Date <span class="text-danger">*</span>
            </label>
            <div class="cal-icon">
              <input
                class="form-control datetimepicker"
                type="date"
                value={joiningDate}
                onChange={(e) => setJoiningDate(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label class="col-form-label">Shoe Size </label>
            <input
              class="form-control"
              type="text"
              value={shoeSize}
              onChange={(e) => setShoeSize(e.target.value)}
            />
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label class="col-form-label">Gender</label>
            <select
              className="form-control select2 select2-hidden-accessible"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option>Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label>
              Department <span class="text-danger">*</span>
            </label>
            <select
              className="form-control select2 select2-hidden-accessible"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option>Department</option>
              <option value="accounts">Accounts</option>
              <option value="security">Security</option>
              <option value="sales">Sales</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label>
              Designation <span class="text-danger">*</span>
            </label>
            <select
              className="form-control select2 select2-hidden-accessible"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            >
              <option>Designation</option>
              <option value="guard">Security Guard</option>
              <option value="driver">Secuirty Driver</option>
              <option value="supervisor">Supervisor</option>
              <option value="manager">Manager</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biodata;
