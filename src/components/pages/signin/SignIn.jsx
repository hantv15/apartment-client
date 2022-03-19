import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { authenticate, isAuthenticated, signIn } from "../../auth";
import { Redirect } from "react-router-dom";
const SignIn = () => {
  const { data } = isAuthenticated();
  const { register, handleSubmit } = useForm();
  const [success, setSuccess] = useState(false);

  const onSubmit = async (param) => {
    try {
      const { data } = await signIn(param);
      authenticate(data);
      setSuccess(true);
    } catch (error) {
      localStorage.removeItem("client");
      console.log(error.response.data);
    }
  };

  const redirectUser = (data) => {
    if (data != undefined) {
      if (data.role_id == 2) {
        return <Redirect to="/dashboard" />;
      } else {
        localStorage.removeItem("client");
        return <Redirect to="/" />;
      }
    } else {
      localStorage.removeItem("client");
      return <Redirect to="/" />;
    }
  };

  return (
    <>

      <div className="login-page">
        {redirectUser(data)}
        <div className="login-box">
          <div className="login-logo">
            <a href="../../index2.html">
              <b>Admin</b>LTE
            </a>
          </div>
          {/* /.login-logo */}
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign in to start your session</p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    {...register("username")}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    {...register("password")}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary"></div>
                  </div>
                  {/* /.col */}
                  <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block">
                      Sign In
                    </button>
                  </div>
                  {/* /.col */}
                </div>
              </form>
              {/* /.social-auth-links */}
              <p className="mb-1">
                <a href="forgot-password.html">I forgot my password</a>
              </p>
            </div>
            {/* /.login-card-body */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
