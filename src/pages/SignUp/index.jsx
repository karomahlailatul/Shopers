import React, { useEffect, useState, Fragment } from "react";

import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/icons/logo-navbar.svg";

import { useDispatch } from "react-redux";
import { postSignUpUser } from "../../app/redux/Slice/SignUpUserSlice";
import { postSignUpSeller } from "../../app/redux/Slice/SignUpSellerSlice";



const UserCreate = () => {
  let navigate = useNavigate();

  const dispatch = useDispatch();
  
  const [toggle, setToggle] = useState(true);
  // const [loading, setLoading] = useState(false);

  const [dataUser, setDataUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "" || "user",
  });

  const [dataSeller, setDataSeller] = useState({
    email: "",
    name_store: "",
    phone: "",
  });

  const handleChange = (e) => {
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value,
    });
    // console.log(dataUser);
    // console.log(dataSeller);

    if (document.getElementById("seller").checked) {
      setDataSeller({
        ...dataSeller,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleCreate = async (e) => {
    await e.preventDefault();
    
 
    dispatch(postSignUpUser(dataUser))
    .unwrap()

    .then((item) => {
        // console.log(item)
        // console.log(item.statusCode)
        if (item.statusCode === 201) {
          setTimeout(() => {
            navigate("../sign-in");
          }, 2000);
        } else {
          console.log("Sign Up Failed");
        }
    });
    
    if (document.getElementById("seller").checked) {
      dispatch(postSignUpSeller(dataSeller));
    } 
   
  };

  const handleClick = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    document.title = "Sign Up | Shopers";
  }, []);

  return (
    <Fragment>
      <div className="register-page">
        <div className="container">
          <div className="row">
            <div onClick={() => navigate("../home")} className="d-flex justify-content-center cursor-pointer">
              <img src={logo} className="App-logo my-5" alt="logo" />
            </div>
            <h5 className="text-banner my-3 text-center">Please sign up with your account</h5>
            <div className=" justify-content-center">
              <form onSubmit={handleCreate}>
                <div className="my-3 mb-3">
                  <div className="mx-5 mb-5 d-flex justify-content-center align-items-center btn-group text-center justify-content-center" role="group">
                    <input type="radio" value="user" onChange={handleChange} name="role" defaultChecked className="btn-check" id="user" />
                    <label className="btn btn-outline-danger label-button d-flex justify-content-center" onClick={handleClick} htmlFor="user">
                      User
                    </label>

                    <input type="radio" value="seller" onChange={handleChange} name="role" className="btn-check" id="seller" />
                    <label className="btn btn-outline-danger  label-button d-flex justify-content-center" onClick={handleClick} htmlFor="seller">
                      Seller
                    </label>
                  </div>
                  <input className="form-control mt-3" type="text" placeholder="name" name="name" value={dataUser.name} onChange={handleChange} />
                  <input className="form-control mt-3" type="text" placeholder="email" name="email" value={dataUser.email || dataSeller.seller || ""} onChange={handleChange} />

                  <div id="seller" className="hide" style={{ display: toggle ? "none" : "block" }}>
                    <input className="form-control mt-3 hidden-textbox" type="text" placeholder="phone" name="phone" value={dataSeller.phone} onChange={handleChange} />
                    <input className="form-control mt-3 hidden-textbox" type="text" placeholder="store name" name="name_store" value={dataSeller.name_store} onChange={handleChange} />
                  </div>

                  <input className="form-control mt-3" type="password" placeholder="password" name="password" value={dataUser.password} onChange={handleChange} />
                </div>
                <div className="d-flex justify-content-end">
                  <Link className="text-danger text-redirect" to="/reset-password">
                    Forgot password?&nbsp;
                  </Link>
                </div>
                <div className="d-grid my-3">
                  <button
                    // onClick={()=>navigate('/sign-in')}
                    type="submit"
                    className="btn btn-danger btn-submit"
                  >
                    PRIMARY
                  </button>
                </div>
                <div className="d-flex justify-content-center">
                  <p className="text-regis">
                    Already have a Tokopedia account?&nbsp;
                    <Link className="text-danger text-redirect" to="/sign-in">
                      Login
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

export default UserCreate;
