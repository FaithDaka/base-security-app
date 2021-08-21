import React from "react";
import { Link } from "react-router-dom";

const index = ({ width, xPos }) => {
  return (
    <>
      {width > 0 ? (
        <div
          className="vertical-menu"
          id="vertical-menu"
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
                          <li
                            className="menu-title"
                            id="menu-title"
                            key="t-menu"
                          >
                            BASE ADMIN
                          </li>
                          <li>
                            <Link
                              to="/dashboard"
                              className="waves-effect mm-active"
                              id="icon-link"
                            >
                              <i
                                className="fa fa-home"
                                style={{ fontSize: "18px", marginRight: "8px" }}
                              ></i>
                              <span
                                key="t-dashboards"
                                style={{
                                  fontSize: "16px",
                                  textTransform: "uppercase",
                                }}
                              >
                                Dashboard
                              </span>
                            </Link>
                            <ul
                              className="sub-menu mm-collapse mm-show"
                              aria-expanded="false"
                            >
                              <li className="mm-active">
                                <a
                                  href="#"
                                  key="t-default"
                                  className="active"
                                >
                                  Default
                                </a>
                              </li>
                              <li>
                                <a href="#" key="t-saas">
                                  Saas
                                </a>
                              </li>
                              <li>
                                <a href="#" key="t-crypto">
                                  Crypto
                                </a>
                              </li>
                              <li>
                                <a href="#" key="t-blog">
                                  Blog
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link
                              to="/guards"
                              className="waves-effect"
                              id="icon-link"
                            >
                              <i
                                className="fa fa-table"
                                style={{ fontSize: "18px", marginRight: "8px" }}
                              ></i>
                              <span
                                key="t-dashboards"
                                style={{
                                  fontSize: "16px",
                                  textTransform: "uppercase",
                                }}
                              >
                                Guards
                              </span>
                            </Link>
                          </li>
                          <li>
                          <Link to="/armory" className="waves-effect" id="icon-link" >
                              <i className="fa fa-table"
                              style={{fontSize:'18px', marginRight:'8px'}}></i>
                              <span key="t-dashboards"
                              style={{fontSize:'16px', textTransform:'uppercase'}}>armory</span>
                            </Link>
                          </li>
                          <li>
                          <Link to="/users" className="waves-effect" id="icon-link" >
                              <i className="fa fa-table"
                              style={{fontSize:'18px', marginRight:'8px'}}></i>
                              <span key="t-dashboards"
                              style={{fontSize:'16px', textTransform:'uppercase'}}>users</span>
                            </Link>
                          </li>
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
        <div className="vertical-menu" style={{ width: "80px" }}>
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
                          <li className="mm-active">
                            <a
                              href="javascript: void(0);"
                              className="waves-effect mm-active"
                            >
                              <i className="bx bx-home-circle"></i>
                              <span className="badge rounded-pill bg-info float-end">
                                04
                              </span>
                              <span key="t-dashboards">Dashboards</span>
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
                          <li>
                            <a
                              href="javascript: void(0);"
                              className="has-arrow waves-effect"
                            >
                              <i className="fa fa-receipt"></i>
                              <span key="t-invoices">Invoices</span>
                            </a>
                            <ul
                              className="sub-menu mm-collapse"
                              aria-expanded="false"
                            >
                              <li>
                                <a
                                  href="invoices-list.html"
                                  key="t-invoice-list"
                                >
                                  Invoice List
                                </a>
                              </li>
                              <li>
                                <a
                                  href="invoices-detail.html"
                                  key="t-invoice-detail"
                                >
                                  Invoice Detail
                                </a>
                              </li>
                            </ul>
                          </li>
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
