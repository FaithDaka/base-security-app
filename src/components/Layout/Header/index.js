import React from "react";
import { useHistory } from "react-router-dom";
import avatar from "../../../assets/img/avatar.jpg";
import logo from "../../../assets/img/base-dashboard-logo.png";
import plain from "../../../assets/img/plainlogo.png";

const Header = ({ toggle, margin }) => {
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("user");
    history.push("/");
  };

  return (
    <header>
      {margin >= 0 ? (
        <div className="navbar-header" style={{ marginLeft: `${margin}px`}}>
          <div className="d-flex">
            <div className="navbar-brand-box" style={{backgroundColor:'#2a3042'}}>
              <a className="logo">
                <span className="logo-sm">
                  <img src={plain} style={{ height: "40px"}} />
                </span>
                <span className="logo-lg">
                  <img src={logo} style={{ height: "65px" }} />
                </span>
              </a>
            </div>
            <button
              className="btn btn-sm px-3 font-size-16 header-item waves-effect"
              id="vertical-menu-btn"
              type="button"
              onClick={toggle}
            >
              <i className="fa fa-fw fa-bars" style={{ fontSize: "20px" }}></i>
            </button>
            <form className="app-search d-lg-block">
              <div class="position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
                <span class="bx bx-search-alt"></span>
              </div>
            </form>
          </div>
          <div className="d-flex ">
            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item waves-effect"
                id="page-header-user-dropdown"
              >
                <img
                  className="rounded-circle header-profile-user"
                  src={avatar}
                  alt="avatar"
                />
                <span className="d-none d-xl-inline-block ms-1"></span>
                <i className="fa fa-chevron-down d-none d-xl-inline-block"></i>
              </button>
            </div>
            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item noti-icon right-bar-toggle waves-effect"
                onClick={logout}
              >
                <i className="fas fa-power-off font-size-24 text-danger"></i>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="navbar-header" style={{backgroundColor:'#2a3042', transition:'all .2s ease-in ', transitionDelay:'.05s'}}>
          <div className="d-flex">
            <button
              className="btn btn-sm px-3 font-size-20 text-light header-item waves-effect waves-light"
              type="button"
              onClick={toggle}
            >
              <i className="fa fa-fw fa-bars"></i>
            </button>
            <div className="navbar-brand-box" style={{backgroundColor:'#2a3042'}}>
              <div className="header-logo">
                <a className="logo-link">
                  <span className="logo-sm">
                    <img
                      src={logo}
                      style={{ height: "64px", marginLeft: "-35%"}}
                    />
                  </span>
                </a>
              </div>
            </div>
            <form class="app-search d-none d-lg-block">
              <div class="position-relative">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search..."
                />
                <span class="bx bx-search-alt"></span>
              </div>
            </form>
            </div>
            <div className="d-flex justify-content-end">
            <div className="dropdown dropdown-mega d-none d-lg-block ms-2">
              <button
                type="button"
                className="btn header-item waves-effect"
                id="page-header-user-dropdown"
              >
                <img
                  className="rounded-circle header-profile-user"
                  src={avatar}
                  alt="avatar"
                />
                <span className="d-none d-xl-inline-block ms-1"></span>
                <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
              </button>
            </div>
            <div className="dropdown d-inline-block">
              <button
                title="logout"
                type="button"
                className="btn header-item noti-icon right-bar-toggle waves-effect"
                onClick={logout}
              >
                <i className="fas fa-power-off font-size-22 text-danger"></i>
              </button>
            </div>
          </div>
          </div>
      )}
    </header>
  );
};

export default Header;
