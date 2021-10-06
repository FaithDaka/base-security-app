import React from "react";

const Indentification = ({
  nationality,
  nin,
  passport,
  district,
  county,
  village,
  parish,
  dob,
  education,
  birth,
  address,
  maritalStatus,
  setNationality,
  setNIN,
  setPassport,
  setDistrict,
  setCounty,
  setVillage,
  setParish,
  setDOB,
  setEducation,
  setBirth,
  setMaritalStatus,
  setAddress
}) => {
  return (
    <div id="ident-data" class="pro-overview tab-pane fade show active">
      <div class="row">
        <div class="col-sm-4">
          <div class="form-group">
            <label class="col-form-label">
              Nationality <span class="text-danger">*</span>
            </label>
            <select
              className="form-control select2 select2-hidden-accessible"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
            >
              <option>Nationality</option>
              <option value="ugandan">Ugandan</option>
              <option value="kenyan">Kenyan</option>
            </select>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label class="col-form-label">NIN</label>
            <input
              class="form-control"
              type="text"
              value={nin}
              onChange={(e) => setNIN(e.target.value)}
            />
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label class="col-form-label">
              Passport No <span class="text-danger">*</span>
            </label>
            <input
              class="form-control"
              type="text"
              value={passport}
              onChange={(e) => setPassport(e.target.value)}
            />
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label class="col-form-label">
              District <span class="text-danger">*</span>
            </label>
            <input
              class="form-control"
              type="text"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
            />
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label class="col-form-label">Sub County</label>
            <input
              class="form-control"
              type="text"
              value={county}
              onChange={(e) => setCounty(e.target.value)}
            />
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label class="col-form-label">Village</label>
            <input
              class="form-control"
              type="text"
              value={village}
              onChange={(e) => setVillage(e.target.value)}
            />
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label class="col-form-label">
              Parish <span class="text-danger">*</span>
            </label>
            <input
              type="text"
              class="form-control"
              value={parish}
              onChange={(e) => setParish(e.target.value)}
            />
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label class="col-form-label">
              Date of Birth <span class="text-danger">*</span>
            </label>
            <div class="cal-icon">
              <input
                class="form-control datetimepicker"
                type="date"
                value={dob}
                onChange={(e) => setDOB(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label class="col-form-label">Place of Birth </label>
            <input
              class="form-control"
              type="text"
              value={birth}
              onChange={(e) => setBirth(e.target.value)}
            />
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label class="col-form-label">Marital Status</label>
            <select
              className="form-control select2 select2-hidden-accessible"
              value={maritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value)}
            >
              <option>Marital Status</option>
              <option value="married">Married</option>
              <option value="single">Single</option>
              <option value="divorced">Divorced</option>
            </select>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label>
              Education Level <span class="text-danger">*</span>
            </label>
            <select
              className="form-control select2 select2-hidden-accessible"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
            >
              <option>Education</option>
              <option value="certificate">Certificate</option>
              <option value="diploma">Diploma</option>
              <option value="degree">Degree</option>
              <option value="masters">Masters</option>
            </select>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label>
              Residential Address <span class="text-danger">*</span>
            </label>
            <input
              class="form-control"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Indentification;
