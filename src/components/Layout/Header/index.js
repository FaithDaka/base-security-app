import React from "react";
import logo from '../../../assets/img/logo.png'

const Header = ({ toggle, margin, history }) => {
  const logout = () => {
    localStorage.removeItem("user");
    history.push("/")
  };
  return (
    <header>
      {margin >= 0 ? (
        <div className="navbar-header" style={{ marginLeft: `${margin}px` }}>
          <div className="d-flex">
            <div className="navbar-brand-box">
              <a className="logo">
                <span className="logo-sm" >
                  <img src={logo} style={{height:'40px'}}/>
                </span>
                <span className="logo-lg">
                  <img src={logo} 
                  style={{height:'70px'}}/>
                </span>
              </a>
            </div>
            <button
              className="btn btn-sm px-3 font-size-16 header-item waves-effect"
              id="vertical-menu-btn"
              type="button"
              onClick={toggle}
            >
              <i className="fa fa-fw fa-bars"
              style={{fontSize:'20px'}}></i>
            </button>
            <form className="app-search d-lg-block">
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
                {/* <span className="fa fa-search"></span> */}
              </div>
            </form>
          </div>
          <div className="d-flex">
            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item waves-effect"
                id="page-header-user-dropdown"
              >
                <img
                  className="rounded-circle header-profile-user"
                  src={logo}
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
              >
                <i className="fa fa-cog font-size-20"></i>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="navbar-header" style={{ marginLeft:'60px' }}>
          <div className="d-flex">
            <div className="header-logo">
              <a className="logo-link">
                <span className="logo-sm">
                  <img src={logo} style={{height:'65px', marginLeft:'-30%'}}/>
                </span>
                <span className="logo-sm">
                  <img />
                </span>
              </a>
            </div>
            <button
              className="btn btn-sm px-3 font-size-16 header-item waves-effect"
              id="vertical-menu-btn"
              type="button"
              onClick={toggle}
            >
              <i className="fa fa-fw fa-bars"></i>
            </button>
            <form className="app-search d-lg-block">
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
                {/* <span className="bx bx-search-alt"></span> */}
              </div>
            </form>
          </div>
          <div className="d-flex">
            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item waves-effect"
                id="page-header-user-dropdown"
              >
                <img
                  className="rounded-circle header-profile-user"
                  src={logo}
                  alt="avatar"
                />
                <span className="d-none d-xl-inline-block ms-1"></span>
                <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
              </button>
            </div>
            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item noti-icon right-bar-toggle waves-effect"
                onClick={logout}
              >
                <i className="fa fa-cog"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
