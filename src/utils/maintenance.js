import React from "react";
import maintenance from "../assets/img/maintenance.svg"
import logo from "../assets/img/plainlogo.png"

const Maintenance = () => {
  return (
    <div>
      <div className="home-btn d-none d-sm-block">
        <a href="index.html" className="text-dark">
          <i className="fas fa-home h2"></i>
        </a>
      </div>
      <section className="my-5 pt-sm-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="home-wrapper">
                <div className="mb-5">
                  <a href="#" className="d-block auth-logo">
                    <img
                      src={logo}
                      alt=""
                      height="20"
                      className="auth-logo-dark mx-auto"
                    />
                  </a>
                </div>
                <div className="row justify-content-center">
                  <div className="col-sm-4">
                    <div className="maintenance-img">
                      <img
                        src={maintenance}
                        alt=""
                        className="img-fluid mx-auto d-block"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="mt-5">Site is Under Maintenance</h3>
                <p>Please check back in sometime.</p>
                <div className="row">
                  <div className="col-md-4">
                    <div className="card mt-4 maintenance-box">
                      <div className="card-body">
                        <i className="fas  fa-broadcast-tower mb-4 h1 text-primary"></i>
                        <h5 className="font-size-15 text-uppercase">
                          Why is the Site Down?
                        </h5>
                        <p className="text-muted mb-0">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mt-4 maintenance-box">
                      <div className="card-body">
                        <i className="fa fa-clock mb-4 h1 text-primary"></i>
                        <h5 className="font-size-15 text-uppercase">
                          What is the Downtime?
                        </h5>
                        <p className="text-muted mb-0">
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mt-4 maintenance-box">
                      <div className="card-body">
                        <i className="fa fa-envelope mb-4 h1 text-primary"></i>
                        <h5 className="font-size-15 text-uppercase">
                          Do you need Support?
                        </h5>
                        <p className="text-muted mb-0">
                          If you are going to use a passage of Lorem Ipsum, you
                          need to be sure there isnt anything embar..{" "}
                          <a
                            href="#"
                            className="text-decoration-underline"
                          >
                            no-reply@domain.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Maintenance;
