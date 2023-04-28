import React from "react";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../assets/page-misc-under-maintenance.png";
import img2 from "../assets/bg-shape-image-light.png";
import "../css/page-misc.css";
const Landing = () => {
  return (
    <div>
      <div className="container-xxl container-p-y">
        <div className="misc-wrapper">
          <h2 className="mb-1 mt-4">Welcome :)</h2>
          <p className="mb-4 mx-2">I hope to enjoy my page</p>
          <Link to={"/login"} className="btn btn-primary mb-4">
            LOGIN
          </Link>
          <div className="mt-4">
            <img
              src={img1}
              alt="page-misc-error"
              width="225"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid misc-bg-wrapper">
        <img src={img2} alt="page-misc-error" />
      </div>
    </div>
  );
};

export default Landing;
