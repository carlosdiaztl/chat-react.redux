import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { actionLoginAsync } from "../redux/actions/userActions";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const LoginI = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const isLoggedIn = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(actionLoginAsync(data));
  };

  useEffect(() => {
    if (isLoggedIn.error) {
      Swal.fire(
        "Oops!",
        `Ha ocurrido un error: ${isLoggedIn.errorMessage}`,
        "error"
      );
    } else if (isLoggedIn.user) {
      Swal.fire("Good job!", "Inicio de session exitoso", "success");
      // navigate("/home");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div>
      <div className="container">
        <div className="authentication-wrapper authentication-basic container-p-y">
          <div className="authentication-inner py-4">
            <div className="card">
              <div className="card-body">
                <div className="app-brand justify-content-center mb-4 mt-2">
                  <span className="app-brand-text demo text-body fw-bold ms-1">
                    Carlos app
                  </span>
                </div>

                <h4 className="mb-1 pt-2">Welcome to my app! 👋</h4>
                <p className="mb-4">
                  Please sign-in to your account and start the adventure
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="mb-3">
                  <div className="mb-3">
                    <label className="form-label">Email or Username</label>
                    <input
                      {...register("user", { required: true })}
                      type="text"
                      className="form-control"
                      placeholder="Enter your email or username"
                      autoFocus
                    />
                  </div>
                  <div className="mb-3 form-password-toggle">
                    <div className="d-flex justify-content-between">
                      <label className="form-label">Password</label>
                    </div>
                    <div className="input-group input-group-merge">
                      <input
                        {...register("password", { required: true })}
                        type="password"
                        className="form-control"
                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                        aria-describedby="password"
                      />
                      <span className="input-group-text cursor-pointer">
                        <i className="ti ti-eye-off"></i>
                      </span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="remember-me"
                      />
                      <label className="form-check-label"> Remember Me </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <button
                      className="btn btn-primary d-grid w-100"
                      type="submit"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginI;
