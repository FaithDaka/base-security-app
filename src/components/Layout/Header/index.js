import React from "react";

const index = () => {
  return (
    <header>
      <div className="navbar-header">
        <div className="d-flex">
          <div className="header-logo">
            <a className="logo-link">
              <span className="logo-sm">
                <img />
              </span>
              <span className="logo-sm">
                <img />
              </span>
            </a>
          </div>
          <button className="btn btn-sm" id="vertical-menu-btn" type="button">
            <i className="fa fa-bars"></i>
          </button>
          <form className="app-search d-none d-lg-block">
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
              />
              <span className="bx-search-alt"></span>
            </div>
          </form>
        </div>
        <div className="d-flex">
          <div className="dropdown d-inline-block">
            <button type="button" className="btn profile-btn">
              <img className="rounded-circle profile-pic" />
              <span className="profile-name"></span>
            </button>
          </div>
          <div className="dropdown d-inline-block">
            <button type="button" className="btn header-settings">
              <i className="fa fa-cogs"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default index;
