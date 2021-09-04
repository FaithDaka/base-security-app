import React from "react";

const index = ({margin}) => {
  return (
    <footer className="base-footer" style={{ marginLeft: `${margin}px`, marginTop:'50px' }}>
      <div className="container-fluid">
        <div className="row justify-content-between">
          <div className="col-5" style={{textAlign:'right'}}>
            2021 ©
            SailSecurity.
          </div>
          <div className="col-7" style={{textAlign:'right'}}>
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
