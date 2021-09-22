import React from "react";
import Tracking from ".";

const LiveTracking = () => {
  return (
    <Tracking>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
              <h4 className="mb-sm-0 font-size-18">Live Tracking</h4>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-12 map">
          <div className="card">
            <div className="card-body">
              <iframe
                title="Tracking map"
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d31918.04568774052!2d32.57318163464358!3d0.3209824771300535!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sug!4v1632315481731!5m2!1sen!2sug"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Tracking>
  );
};

export default LiveTracking;
