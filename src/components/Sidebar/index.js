import React from "react";

const index = ({ width, xPos }) => {
  return (
    <>
      {
      width > 0 ? (
        <div
          className="vertical-menu"
          style={{ width: `${width}px`, transform: `translatex(${xPos}px)` }}
        >
          <div className="h-100">
            <div className="simplebar-wrapper">
              <div className="simplebar-height-auto-observer-wrapper">
                <div className="simplebar-height-auto-observer"></div>
              </div>
              <div className="simplebar-mask">
                <div className="simplebar-offset">
                  <div
                    className="simplebar-content-wrapper"
                    style={{ overflow: "hidden scroll", height: "100%" }}
                  >
                    <div className="simplebar-content">
                      <div id="sidebar-menu" className="mm-active">
                        <ul
                          className="metismenu list-unstyled mm-show"
                          id="side-menu"
                        >
                          <li className="menu-title" key="t-menu">
                            Dashboard
                          </li>
                          <li>
                            <a href="" className="waves-effect mm-active">
                              <i className="bx bx-home-circle"></i>
                              <span className="badge rounded-pill bg-info float-end">
                                04
                              </span>
                              <span key="t-dashboards">Dashboard</span>
                            </a>
                            <ul
                              className="sub-menu mm-collapse mm-show"
                              aria-expanded="false"
                            >
                              <li className="mm-active">
                                <a
                                  href="index.html"
                                  key="t-default"
                                  className="active"
                                >
                                  Default
                                </a>
                              </li>
                              <li>
                                <a href="dashboard-saas.html" key="t-saas">
                                  Saas
                                </a>
                              </li>
                              <li>
                                <a href="dashboard-crypto.html" key="t-crypto">
                                  Crypto
                                </a>
                              </li>
                              <li>
                                <a href="dashboard-blog.html" key="t-blog">
                                  Blog
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li></li>
                          <li></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="simplebar-placeholder"
                style={{ width: "auto", height: "1306px" }}
              ></div>
            </div>
            <div
              className="simplebar-track simplebar-horizontal"
              style={{ visibility: "hidden" }}
            >
              <div
                className="simplebar-scrollbar"
                style={{
                  transform: "translate3d(0px, 0px, 0px)",
                  display: "none",
                }}
              ></div>
            </div>
            <div
              className="simplebar-track simplebar-vertical"
              style={{ visibility: "visible" }}
            >
              <div
                className="simplebar-scrollbar"
                style={{
                  height: "301px",
                  transform: "translate3d(0px, 0px, 0px)",
                  display: "block",
                }}
              ></div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="vertical-menu"
          style={{ width: '80px' }}
        >
          <div className="h-100">
            <div className="simplebar-wrapper">
              <div className="simplebar-height-auto-observer-wrapper">
                <div className="simplebar-height-auto-observer"></div>
              </div>
              <div className="simplebar-mask">
                <div className="simplebar-offset">
                  <div
                    className="simplebar-content-wrapper"
                    style={{ overflow: "hidden scroll", height: "100%" }}
                  >
                    <div className="simplebar-content">
                      <div id="sidebar-menu" className="mm-active">
                        <ul
                          className="metismenu list-unstyled mm-show"
                          id="side-menu"
                        >
                            <ul
                              className="sub-menu mm-collapse mm-show"
                              aria-expanded="false"
                            >
                              <li className="mm-active">
                                <a
                                  href="index.html"
                                  key="t-default"
                                  className="active"
                                >
                                  Default
                                </a>
                              </li>
                              <li>
                                <a href="dashboard-saas.html" key="t-saas">
                                  Saas
                                </a>
                              </li>
                              <li>
                                <a href="dashboard-crypto.html" key="t-crypto">
                                  Crypto
                                </a>
                              </li>
                              <li>
                                <a href="dashboard-blog.html" key="t-blog">
                                  Blog
                                </a>
                              </li>
                            </ul>
                          <li></li>
                          <li></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default index;
