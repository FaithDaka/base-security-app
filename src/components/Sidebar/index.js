/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ width, xPos }) => {
  const [tab, setTab] = useState(0);
  const[active, setActive] = useState(false);

  return (
    <>
      {width >= 0 ? (
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
                          <li onClick={() => setTab(1)}>
                            <Link
                              to="/dashboard"
                              className={
                                tab === 1
                                  ? "waves-effect mm-active"
                                  : "waves-effect"
                              }
                              id="icon-link"
                            >
                              <i
                                className="fas fa-house-user"
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
                          </li>
                          <li onClick={() => setTab(2)}>
                            <Link
                              to="/guards"
                              className={
                                tab === 2
                                  ? "waves-effect mm-active"
                                  : "waves-effect"
                              }
                              id="icon-link"
                            >
                              <i
                                className="fas fa-user-ninja"
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
                          <li onClick={() => setTab(3)}>
                            <Link
                              to="/armory"
                              className={
                                tab === 3
                                  ? "waves-effect mm-active"
                                  : "waves-effect"
                              }
                              id="icon-link"
                            >
                              <i
                                className="fas fa-shield-alt"
                                style={{ fontSize: "18px", marginRight: "8px" }}
                              ></i>
                              <span
                                key="t-dashboards"
                                style={{
                                  fontSize: "16px",
                                  textTransform: "uppercase",
                                }}
                              >
                                armory
                              </span>
                            </Link>
                            <ul 
                              className={tab === 3 ? "sub-menu mm-collapse mm-show":"sub-menu mm-collapse"}
                              aria-expanded="false"
                            >
                              <li className="mm-active">
                                <a href="#" key="t-default" className="active">
                                  Assigned Guns
                                </a>
                              </li>
                              <li>
                                <a href="#" key="t-saas">
                                  Unassigned Guns
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li onClick={() => setTab(4)}>
                            <Link
                              to="/reports"
                              className={
                                tab === 4
                                  ? "waves-effect mm-active"
                                  : "waves-effect"
                              }
                              id="icon-link"
                            >
                              <i
                                className="fas fa-server"
                                style={{ fontSize: "18px", marginRight: "8px" }}
                              ></i>
                              <span
                                key="t-dashboards"
                                style={{
                                  fontSize: "16px",
                                  textTransform: "uppercase",
                                }}
                              >
                                reports
                              </span>
                            </Link>
                          </li>
                          <li onClick={() => setTab(5)}>
                            <Link
                              to="/admins"
                              className={
                                tab === 5
                                  ? "waves-effect mm-active"
                                  : "waves-effect"
                              }
                              id="icon-link"
                            >
                              <i
                                className="fas fa-users"
                                style={{ fontSize: "18px", marginRight: "8px" }}
                              ></i>
                              <span
                                key="t-dashboards"
                                style={{
                                  fontSize: "16px",
                                  textTransform: "uppercase",
                                }}
                              >
                                Admins
                              </span>
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
        <div className="vertical-collpsed vertical-menu">
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
                            {/* <ul
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
                            </ul> */}
                          </li>
                          <li>
                            <a href="#" className="has-arrow waves-effect">
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

export default Sidebar;
