import React from "react";
import Reports from ".";

const ReportPage = () => {
  return (
    <Reports>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
              <h4 className="mb-sm-0 font-size-18">Reports</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-9 mb-3 mt-3">
          <div className="card">
            <div className="card-body">
              <div className="row justify-content-between">
                <div className="col">
                  <h5 className="text-truncate font-size-16">Hourly Reports</h5>
                  <p className="text-muted mb-2">
                    See hourly reports sent by the guards
                  </p>
                </div>
                <span className="mr-3 mt-3">
                    <i className="fas fa-angle-right text-primary font-size-22"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-9 mb-3 mt-3">
          <div className="card">
            <div className="card-body">
              <div className="row justify-content-between">
                <div className="col">
                  <h5 className="text-truncate font-size-16">Vandalism Alerts</h5>
                  <p className="text-muted mb-2">
                    See Vandalism alerts sent by the guards
                  </p>
                </div>
                <span className="mr-3 mt-3">
                    <i className="fas fa-angle-right text-primary font-size-22"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-9 mb-3 mt-3">
          <div className="card">
            <div className="card-body">
              <div className="row justify-content-between">
                <div className="col">
                  <h5 className="text-truncate font-size-16">Suspicious Activity</h5>
                  <p className="text-muted mb-2">
                    See which guard logged a suspicious activity alert
                  </p>
                </div>
                <span className="mr-3 mt-3">
                    <i className="fas fa-angle-right text-primary font-size-22"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-9 mb-3 mt-3">
          <div className="card">
            <div className="card-body">
              <div className="row justify-content-between">
                <div className="col">
                  <h5 className="text-truncate font-size-16">Payroll Reports</h5>
                  <p className="text-muted mb-2">
                    See how payments have been made
                  </p>
                </div>
                <span className="mr-3 mt-3">
                    <i className="fas fa-angle-right text-primary font-size-22"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-9 mb-3 mt-3">
          <div className="card">
            <div className="card-body">
              <div className="row justify-content-between">
                <div className="col">
                  <h5 className="text-truncate font-size-16">Incident Reports</h5>
                  <p className="text-muted mb-2">
                    See incident reports recorded by the guards
                  </p>
                </div>
                <span className="mr-3 mt-3">
                    <i className="fas fa-angle-right text-primary font-size-22"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reports>
  );
};

export default ReportPage;
