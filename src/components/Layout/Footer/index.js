import React from "react";

const index = () => {
  return (
    <footer className="base-footer">
      <div className="container-fluid">
        <div className="d-flex flex-row justify-content-between">
          <div className="col-5">
            2021 ©
            SailSecurity.
          </div>
          <div className="col-7" style={{textAlign:"right"}}>
            <div className="text-sm-end d-none d-sm-block">
              Developed by Sail Security
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
