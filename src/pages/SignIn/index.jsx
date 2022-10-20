import React, { useEffect, useState, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../assets/images/icons/logo-navbar.svg";

import { useDispatch } from "react-redux";
import { postSignIn } from "../../app/redux/Slice/SignInSlice";

const UserLogin = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "" ,
    // role: "" || "user",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    // console.log(data);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    dispatch(postSignIn(data))
      .unwrap()

      .then((item) => {
        // console.log(item)
        // console.log(item.statusCode)
        if (item.statusCode === 201) {
          setTimeout(() => {
            navigate("../home");
          }, 2000);
        } else {
          console.log("Sign In Failed");
        }
      });
  };

  useEffect(() => {
    document.title = "Sign In | Shopers";
  }, []);

  return (
    <Fragment>
      <div className="login-page">
        <div className="container">
          <div className="row">
            <div onClick={() => navigate("../home")} className="d-flex justify-content-center cursor-pointer">
              <img src={logo} className="App-logo my-5 " alt="logo" />
            </div>
            <h5 className="text-banner my-3 text-center">Please login with your account</h5>
            <div className=" justify-content-center">
              <form onSubmit={handleLogin}>
                <div className="my-3 mb-3">
                  <input className="form-control mt-3" type="text" placeholder="email" name="email" value={data.email} onChange={handleChange} />
                  <input className="form-control mt-3" type="password" placeholder="password" name="password" value={data.password} onChange={handleChange} />
                </div>
                <div className="d-flex justify-content-end">
                  <Link className="text-danger text-redirect" to="/reset-password">
                    Forgot password?&nbsp;
                  </Link>
                </div>
                <div className="d-grid my-3">
                  <button
                    // onClick={}
                    type="submit"
                    className="btn btn-danger btn-submit"
                  >
                    PRIMARY
                  </button>
                </div>
                <div className="d-flex justify-content-center">
                  <p className="text-regis">
                    Don't have tokopedia account?&nbsp;
                    <Link className="text-danger text-redirect" to="/sign-up">
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserLogin;
