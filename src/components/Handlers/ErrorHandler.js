import React from 'react';

const ErrorHandler = ({ message }) => (
  <div>
    <div className="alert alert-danger alert-dismissible fade show" role="alert">
      {message}
      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>

);

export default ErrorHandler;
