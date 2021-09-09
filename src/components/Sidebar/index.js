/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ width, xPos }) => {
  const [tab, setTab] = useState(1);

  useEffect(() => {
    setTab(tab);
  }, [tab]);

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
                              <i className="fas fa-house-user"></i>
                              <span key="t-dashboards">Dashboard</span>
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
                              <i className="fas fa-user-ninja"></i>
                              <span key="t-dashboards">Guards</span>
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
                              <i className="fas fa-shield-alt"></i>
                              <span key="t-dashboards">armory</span>
                            </Link>
                            <ul
                              className={
                                tab === 3
                                  ? "sub-menu mm-collapse mm-show"
                                  : "sub-menu mm-collapse"
                              }
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
                              <i className="fas fa-server"></i>
                              <span key="t-dashboards">reports</span>
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
                              <i className="fas fa-users"></i>
                              <span key="t-dashboards">Admins</span>
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
        <div className="vertical-collpsed vertical-menu" style={{display:'none'}}>
          {/* <div className="h-100">
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
                          <li onClick={() => setTab(1)}>
                            <Link
                              to="/dashboard"
                              className={
                                tab === 1
                                  ? "mm-active"
                                  : ""
                              }
                            >
                              <i className="fas fa-house-user" style={{fontSize:'18px'}}></i>
                            </Link>
                          </li>
                          <li onClick={() => setTab(2)}>
                            <Link
                              to="/guards"
                              className={
                                tab === 2
                                  ? " mm-active"
                                  : ""
                              }
                            >
                              <i className="fas fa-user-ninja" style={{fontSize:'18px'}}></i>
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
                              <i className="fas fa-shield-alt" style={{fontSize:'18px'}}></i>
                            </Link>
                            <ul
                              className={tab === 3 ? "sub-menu mm-collapse mm-show":"sub-menu mm-collapse"}
                              aria-expanded="false"
                            >
                              <li className="mm-active">
                                <a href="#">
                                  Assigned Guns
                                </a>
                              </li>
                              <li>
                                <a href="#">
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
                              <i className="fas fa-server" style={{fontSize:'18px'}}></i>
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
                              <i className="fas fa-users" style={{fontSize:'18px'}}></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        // <div className="topnav">
        //   <div className="container-fluid">
        //     <nav className="navbar navbar-light navbar-expand-lg topnav-menu">
        //       <div
        //         className="collapse navbar-collapse active"
        //         id="topnav-menu-content"
        //         style={{border:'1px solid red'}}
        //       >
        //         <ul className="navbar-nav active">
        //           <li className="nav-item dropdown">
        //             <Link
        //               to="/dashboard"
        //               className="nav-link dropdown-toggle arrow-none"
        //               id="icon-link"
        //             >
        //               <i className="fas fa-house-user"></i>
        //               <span key="t-dashboards">Dashboard</span>
        //             </Link>
        //           </li>
        //           <li className="nav-item dropdown">
        //             <Link
        //               to="/armory"
        //               className="nav-link dropdown-toggle arrow-none"
        //               id="icon-link"
        //             >
        //               <i className="fas fa-user-ninja"></i>
        //               <span key="t-dashboards">Armory</span>
        //             </Link>
        //           </li>
        //         </ul>
        //       </div>
        //     </nav>
        //   </div>
        // </div>
      )}
    </>
  );
};

export default Sidebar;
