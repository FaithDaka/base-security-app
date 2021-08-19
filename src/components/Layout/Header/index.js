import React from "react";

const index = () => {
  return (
    <header>
      <div className="navbar-header">
        <div className="d-flex">
          <div className="header-logo">
            <a className="logo-link">
              <span className="logo-sm">
                <img src=""/>
              </span>
              <span className="logo-sm">
                <img />
              </span>
            </a>
          </div>
          <button className="btn btn-sm px-3 font-size-16 header-item waves-effect" id="vertical-menu-btn" type="button">
            <i className="fa fa-fw fa-bars"></i>
          </button>
          <form className="app-search d-none d-lg-block">
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
              />
              <span className="bx bx-search-alt"></span>
            </div>
          </form>
        </div>
        <div className="d-flex">
          <div className="dropdown d-inline-block">
            <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown">
              <img className="rounded-circle header-profile-user" 
              src="../../../assets/img/logo512.png"
              alt="avatar"/>
              <span className="d-none d-xl-inline-block ms-1"></span>
              <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
            </button>
          </div>
          <div className="dropdown d-inline-block">
            <button type="button" className="btn header-item noti-icon right-bar-toggle waves-effect">
              <i className="fa fa-cog"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default index;
