import React, { useState } from "react";
import API from "../../helpers/api";
import img from "../../assets/img/plainlogo.png";
import LoadSpinner from "../../components/Handlers/Loadspinner";

const Login = ({ history }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email, password };

    API.post("/api/auth/login", data)
      .then((res) => {
        console.log("Login Response Data ====>", res);
        setSuccess(true);
        if (res.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(res.data));
          setLoading(true);
          setTimeout(() => {
            history.push(`/admin/${res.data.user._id}/dashboard`);
          }, 2000);
        }
      })
      .catch((err) => {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000);
        console.log(err.message);
      });
  };

  return (
    <div className="bsa-login">
      <div className="account-pages">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <div className="card overflow-hidden mt-5">
                <div className="bg-danger bg-soft">
                  <div className="row">
                    <div className="col-7">
                      <div className="text-white p-4">
                        <p>Sign In to Continue.</p>
                      </div>
                    </div>
                    <div className="col-5 align-self-end">
                      <img src={img} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                {success && (
                  <div className="alert alert-success" role="alert">
                    Successfully Logged in
                  </div>
                )}
                {error && (
                  <div className="alert alert-danger" role="alert">
                    Login Failed
                  </div>
                )}
                <div className="card-body pt-0">
                  <div className="auth-logo">
                    <a href="#" className="auth-logo-dark">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light bg-soft">
                          <img
                            src={img}
                            alt=""
                            className="rounded-circle"
                            height="34"
                          />
                        </span>
                      </div>
                    </a>
                  </div>
                  {loading && <LoadSpinner />}
                  <div className="p-2">
                    <form className="form-horizontal" onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                          Email
                        </label>
                        <input
                          type="text"
                          name="email"
                          className="form-control"
                          placeholder="Enter username"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <div className="input-group auth-pass-inputgroup">
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Enter password"
                            aria-label="Password"
                            aria-describedby="password-addon"
                            minLength="8"
                            maxLength="20"
                            autoComplete="current-password"
                            pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                          <button className="btn btn-light" type="button">
                            <i className="fas fa-eye"></i>
                          </button>
                        </div>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="remember-check"
                        />
                        <label className="form-check-label">Remember me</label>
                      </div>
                      <div className="mt-3 d-grid">
                        <button className="btn btn-primary waves-effect waves-light">
                          Log In
                        </button>
                      </div>
                      <div className="mt-4"> </div>
                      <div className="mt-3 text-center">
                        <a href="#" className="text-muted">
                          <i className="fa fa-lock me-1"></i> Forgot your
                          password?
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-5 text-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
