import React from "react";

const Content = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
              <h4 className="mb-sm-0 font-size-18">Dashboard</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-4">
          <div className="card overflow-hidden">
            <div className="bg-primary bg-soft">
              <div className="row">
                <div className="col-7">
                  <div className="text-primary p-3">
                    <h5 className="text-primary">Welcome Back !</h5>
                    <p>Skote Dashboard</p>
                  </div>
                </div>
                <div className="col-5 align-self-end">
                  <img src="" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="card-body pt-0">
              <div className="row">
                <div className="col-sm-4">
                  <div className="avatar-md profile-user-wid mb-4">
                    <img
                      src=""
                      alt=""
                      className="img-thumbnail rounded-circle"
                    />
                  </div>
                  <h5 className="font-size-15 text-truncate">Henry Price</h5>
                  <p className="text-muted mb-0 text-truncate">
                    UI/UX Designer
                  </p>
                </div>
                <div className="col-sm-8">
                  <div className="pt-4">
                    <div className="row">
                      <div className="col-6">
                        <h5 className="font-size-15">125</h5>
                        <p className="text-muted mb-0">Projects</p>
                      </div>
                      <div className="col-6">
                        <h5 className="font-size-15">$1245</h5>
                        <p className="text-muted mb-0">Revenue</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <a
                        href="javascript: void(0);"
                        className="btn btn-primary waves-effect waves-light btn-sm"
                      >
                        View Profile{" "}
                        <i className="mdi mdi-arrow-right ms-1"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-8">
          <div className="row">
            <div className="col-md-4">
              <div className="card mini-stats-wid">
                <div className="card-body">
                  <div className="d-flex">
                    <div className="flex-grow-1">
                      <p className="text-muted fw-medium">Orders</p>
                      <h4 className="mb-0">1,235</h4>
                    </div>
                    <div className="flex-shrink-0 align-self-center">
                      <div className="mini-stat-icon avatar-sm rounded-circle bg-primary">
                        <span className="avatar-title">
                          <i className="bx bx-copy-alt font-size-24"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mini-stats-wid">
                <div className="card-body">
                  <div className="d-flex">
                    <div className="flex-grow-1">
                      <p className="text-muted fw-medium">Revenue</p>
                      <h4 className="mb-0">$35, 723</h4>
                    </div>
                    <div className="flex-shrink-0 align-self-center ">
                      <div className="avatar-sm rounded-circle bg-primary mini-stat-icon">
                        <span className="avatar-title rounded-circle bg-primary">
                          <i className="bx bx-archive-in font-size-24"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mini-stats-wid">
                <div className="card-body">
                  <div className="d-flex">
                    <div className="flex-grow-1">
                      <p className="text-muted fw-medium">Average Price</p>
                      <h4 className="mb-0">$16.2</h4>
                    </div>
                    <div className="flex-shrink-0 align-self-center">
                      <div className="avatar-sm rounded-circle bg-primary mini-stat-icon">
                        <span className="avatar-title rounded-circle bg-primary">
                          <i className="bx bx-purchase-tag-alt font-size-24"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-xl-4">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title mb-4">Top Guards</h4>
                <div className="text-center">
                  <div className="mb-4">
                    <i className="fa fa-map-pin text-primary display-4"></i>
                  </div>
                  <h3>100</h3>
                  <p>Kisugu</p>
                </div>
                <div className="table-responsive mt-4">
                  <table className="table align-middle table-nowrap">
                     <tbody>
                        <tr>
                           <td style={{width: '30%'}}>
                              <p className="mb-0">San Francisco</p>
                           </td>
                           <td style={{width: '25%'}}>
                              <h5 className="mb-0">1,456</h5>
                           </td>
                           <td>
                              <div className="progress bg-transparent progress-sm">
                                 <div className="progress-bar bg-primary rounded" role="progressbar" style={{width: '94%'}} aria-valuenow="94" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <p className="mb-0">Los Angeles</p>
                           </td>
                           <td>
                              <h5 className="mb-0">1,123</h5>
                           </td>
                           <td>
                              <div className="progress bg-transparent progress-sm">
                                 <div className="progress-bar bg-success rounded" role="progressbar" style={{width: '82%'}} aria-valuenow="82" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <p className="mb-0">San Diego</p>
                           </td>
                           <td>
                              <h5 className="mb-0">1,026</h5>
                           </td>
                           <td>
                              <div className="progress bg-transparent progress-sm">
                                 <div className="progress-bar bg-warning rounded" role="progressbar" style={{width: '70%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
              </div>
            </div>
          </div>
        </div>*/}
      </div>
    </div>
  );
};

export default Content;
