import React, { useState, Fragment, useEffect } from "react";

import logo from "../../assets/images/icons/logo-navbar.svg";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { getProfileUser } from "../../app/redux/Slice/ProfileUserSlice";
import { getProfileSeller } from "../../app/redux/Slice/ProfileSellerSlice";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import PhotoEmpty from "../../assets/images/icons/ico-user.svg"

const NavigationBar = () => {
  const isAuth = localStorage.getItem("token");

  let location = useLocation();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");

  // const [show, setShow] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.currentTarget.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search !== "") {
      setSearchParams({
        keyword: search,
      });
    }
    //   else {
    //   setSearchParams({});
    // }
  };

  const dispatchProfileUser = () => {
    dispatch(getProfileUser());
  };

  const dispatchProfileSeller = () => {
    dispatch(getProfileSeller());
  };

  const {
    user_id,
    // user_username,
    user_email,
    // user_name,
    // user_gender,
    // user_phone,
    // user_date_of_birth,
    user_picture,
    // user_shipping_address,
    // user_role,
    // user_created_on,
    // user_updated_on
  } = useSelector((state) => state.ProfileUser);
  const {
    seller_id,
    // seller_user_id,
    // seller_name_store,
    seller_logo,
    // seller_address,
    // seller_description,
    //  seller_commision,
    //  seller_created_on,
    //  seller_updated_on,
    //  seller_phone
  } = useSelector((state) => state.ProfileSeller);

  const expand = "lg";

  // let windowsSize = window.innerWidth

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const [windowSize, setWindowSize] = useState(getWindowSize());

  // console.log(tes)
  // console.log(ProfileUser.data)

  function handleWindowResize() {
    setWindowSize(getWindowSize());
  }

  const [show, setShow] = useState(false);
  const toggleOffcanvas = () => {
    setShow(!show);
  };

  const handleSignOut = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
  };

  const pictureThumbnails = (
    <span>
      <img className="pictureThumbnails" 
      // crossOrigin="anonymous" 
      referrerPolicy="no-referrer"
      src={user_picture === null || user_picture === undefined ? PhotoEmpty : user_picture} alt="" />

      {/* <img className="pictureThumbnails" crossOrigin="anonymous" src={user_picture} alt="" /> */}
    </span>
  );


  const logoThumbnails = (
    <span>
      <img className="pictureThumbnails" 
      // crossOrigin="anonymous" 
      referrerPolicy="no-referrer"
      src={seller_logo === null || seller_logo === undefined ? PhotoEmpty : seller_logo} alt="" />
      
      {/* <img className="pictureThumbnails" crossOrigin="anonymous" src={seller_logo} alt="" /> */}
    </span>
  );

  useEffect(() => {
    dispatchProfileUser();
    dispatchProfileSeller();
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <Navbar key={expand} bg="white" expand={expand} className="mb-3 ShadowBox">
        <Container fluid="sm">
          <Navbar.Brand className="me-5">
            <div
              onClick={() => {
                navigate("../home");
              }}
              className="col-lg-3 col-md-3 col-sm-3  cursor-pointer"
            >
              <img className="my-auto" src={logo} alt="" />
            </div>
          </Navbar.Brand>

          <Navbar.Toggle onClick={toggleOffcanvas} aria-controls={`offcanvasNavbar-expand-${expand}`} />

          <Navbar.Offcanvas show={show} id={`offcanvasNavbar-expand-${"expand"}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="bottom">
            <Offcanvas.Header className="ShadowBox">
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="col-12 d-flex justify-content-between">
                <div
                  onClick={() => {
                    if (windowSize.innerWidth <= 992) {
                      toggleOffcanvas();
                      navigate("../home");
                    } else navigate("../home");
                  }}
                  className="col-lg-3 col-md-3 col-sm-3 link-redirect"
                >
                  <img className="my-auto" src={logo} alt="" />
                </div>
                <div className="btn-close-offcanvas " onClick={toggleOffcanvas}></div>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {isAuth ? (
                location.pathname === "/profile/seller" ? (
                  <Fragment>
                    {/* Navbar Seller Auth */}
                    <div className="col-12 d-xl-flex d-lg-flex d-md-grid d-sm-grid ">
                      {windowSize.innerWidth <= 992 ? (
                        <Fragment>
                          <div className="col-xl-8 col-lg-8">
                          </div>

                          <div className="d-grid ">
                            <div className="col-12 d-flex mt-4">
                              <div className="col-2 border border-0 rounded-3 d-flex justify-content-center align-items-center block">
                                <img
                                  className="photoSide"
                                  // crossOrigin="anonymous"
                                  referrerPolicy="no-referrer"
                                  src={(seller_logo === null || seller_logo === undefined ? PhotoEmpty : seller_logo)} alt="" 
                                  />
                              </div>
                              <div className="col-8">
                                <h5 className="fw-bold text-muted">{user_email}</h5>
                                <p className="text-muted">UID Seller : {seller_id}</p>
                              </div>
                              <div className="col-2 d-flex ">
                                <div className="col-6 border border-0 rounded-3 d-flex justify-content-center align-items-center block" type="button">
                                 </div>
                                <div className="col-6 border border-0 rounded-3 d-flex justify-content-center align-items-center block" type="button">
                                </div>
                              </div>
                            </div>

                            <div className="col-12 d-grid mt-4">
                              <Button
                                variant="outline-danger"
                                onClick={() => {
                                  navigate("../profile/seller");
                                  toggleOffcanvas();
                                }}
                                className=" rounded-pill block  "
                                type="button"
                              >
                                <p className="my-auto"> My Profile Seller</p>
                              </Button>
                            </div>

                            <Nav.Link>
                              <div className="col-12 d-grid mt-4">
                                <Button
                                  variant="outline-danger"
                                  onClick={() => {
                                    navigate("../profile/user");
                                    toggleOffcanvas();
                                  }}
                                  className=" rounded-pill block  "
                                  type="button"
                                >
                                  <p className="my-auto"> Switch to User</p>
                                </Button>
                              </div>
                            </Nav.Link>

                            <div className="col-12 d-grid mt-4">
                              <Button
                                variant="danger"
                                onClick={() => {
                                  navigate("../home");
                                  toggleOffcanvas();
                                  handleSignOut();
                                }}
                                className=" rounded-pill block  "
                                type="button"
                              >
                                <p className="my-auto">Sign Out</p>
                              </Button>
                            </div>
                          </div>
                        </Fragment>
                      ) : (
                        <Fragment>
                          <div className="col-xl-10 col-lg-10">
                            
                          </div>

                          <div className="col-xl-2 col-lg-2 d-flex">
                            <div className="col-8 d-flex ">
                              <div className="col-6 border border-0 rounded-3 d-flex justify-content-center align-items-center block" type="button">
                                <img className="ico" src={require("../../assets/images/icons/bell.svg").default} alt="" />
                              </div>
                              <div className="col-6 border border-0 rounded-3 d-flex justify-content-center align-items-center block" type="button">
                                <img className="ico" src={require("../../assets/images/icons/mail.svg").default} alt="" />
                              </div>
                            </div>
                            <div className="col-4 d-flex justify-content-center align-items-center block">
                              <NavDropdown title={logoThumbnails} align="end" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                <NavDropdown.Header className="d-grid ">
                                  <p className="mb-0 fw-bold">{user_email} </p>
                                  <p className="mb-0">
                                    <small> UID Seller : {seller_id}</small>
                                  </p>
                                </NavDropdown.Header>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                  onClick={() => {
                                    navigate("../profile/seller");
                                  }}
                                >
                                  My Profile Seller
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                  onClick={() => {
                                    navigate("../profile/user");
                                  }}
                                >
                                  Switch to User
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                  onClick={() => {
                                    navigate("../home");
                                    handleSignOut();
                                  }}
                                >
                                  Sign Out
                                </NavDropdown.Item>
                              </NavDropdown>
                            </div>
                          </div>
                        </Fragment>
                      )}
                    </div>
                  </Fragment>
                ) : (
                  <Fragment>
                    {/* Navbar User Auth */}
                    <div className="col-12 d-xl-flex d-lg-flex d-md-grid d-sm-grid ">
                      {windowSize.innerWidth <= 992 ? (
                        <Fragment>
                          <div className="col-xl-8 col-lg-8">
                            <Form onSubmit={handleSearchSubmit} className="form-search d-flex">
                              <div className="col-9 d-flex border border-1 rounded-pill form-input">
                                <input className="form-control rounded-pill border-0 " type="search" placeholder="Search" aria-label="Search" onChange={handleSearch} />
                                <Button
                                  onClick={() => {
                                    navigate("../product?" + searchParams);
                                    toggleOffcanvas();
                                  }}
                                  className="bg-transparent border-0 rounded-pill btn-search"
                                  type="submit"
                                >
                                  <img className="" src={require("../../assets/images/icons/search.svg").default} alt="search" />
                                </Button>
                              </div>
                              <div className="col-1 border border-1 rounded-3 d-flex justify-content-center align-items-center block" type="button" data-bs-toggle="modal" data-bs-target="#modalFilter">
                                <img className="ico" src={require("../../assets/images/icons/filter.svg").default} alt="" />
                              </div>
                              <div className="col-2 border border-0 rounded-3 d-flex justify-content-center align-items-center block" type="button">
                                <img className="ico" src={require("../../assets/images/icons/cart.svg").default} alt="" />
                              </div>
                            </Form>
                          </div>

                          <div className="d-grid ">
                            <div className="col-12 d-flex mt-4">
                              <div className="col-2 border border-0 rounded-3 d-flex justify-content-center align-items-center block">
                                <img className="photoSide" 
                                referrerPolicy="no-referrer"
                                // crossOrigin="anonymous" 
                                // src={user_picture} alt="" 
                                src={(user_picture === null || user_picture === undefined ? PhotoEmpty : user_picture)} alt="" 
                                />
                              </div>
                              <div className="col-8">
                                <h5 className="fw-bold text-muted">{user_email}</h5>
                                <p className="text-muted">UID : {user_id}</p>
                              </div>
                              <div className="col-2 d-flex ">
                                <div className="col-6 border border-0 rounded-3 d-flex justify-content-center align-items-center block" type="button">
                                  <img className="ico" src={require("../../assets/images/icons/bell.svg").default} alt="" />
                                </div>
                                <div className="col-6 border border-0 rounded-3 d-flex justify-content-center align-items-center block" type="button">
                                  <img className="ico" src={require("../../assets/images/icons/mail.svg").default} alt="" />
                                </div>
                              </div>
                            </div>

                            <div className="col-12 d-grid mt-4">
                              <Button
                                variant="outline-danger"
                                onClick={() => {
                                  navigate("../profile/user");
                                  toggleOffcanvas();
                                }}
                                className=" rounded-pill block  "
                                type="button"
                              >
                                <p className="my-auto"> My Profile</p>
                              </Button>
                            </div>

                            <Nav.Link>
                              <div className="col-12 d-grid mt-4">
                                <Button
                                  variant="outline-danger"
                                  onClick={() => {
                                    navigate("../profile/seller");
                                    toggleOffcanvas();
                                  }}
                                  className=" rounded-pill block  "
                                  type="button"
                                >
                                  <p className="my-auto"> Switch to Seller</p>
                                </Button>
                              </div>
                            </Nav.Link>

                            <div className="col-12 d-grid mt-4">
                              <Button
                                variant="danger"
                                onClick={() => {
                                  navigate("../home");
                                  toggleOffcanvas();
                                  handleSignOut();
                                }}
                                className=" rounded-pill block  "
                                type="button"
                              >
                                <p className="my-auto">Sign Out</p>
                              </Button>
                            </div>
                          </div>
                        </Fragment>
                      ) : (
                        <Fragment>
                          <div className="col-xl-10 col-lg-10">
                            <Form onSubmit={handleSearchSubmit} className="form-search d-flex">
                              <div className="col-9 d-flex border border-1 rounded-pill form-input">
                                <input className="form-control rounded-pill border-0 " type="search" placeholder="Search" aria-label="Search" onChange={handleSearch} />
                                <Button
                                  onClick={() => {
                                    navigate("../product?" + searchParams);
                                  }}
                                  className="bg-transparent border-0 rounded-pill btn-search"
                                  type="submit"
                                >
                                  <img className="" src={require("../../assets/images/icons/search.svg").default} alt="search" />
                                </Button>
                              </div>
                              <div className="col-1 border border-1 rounded-3 d-flex justify-content-center align-items-center block" type="button" data-bs-toggle="modal" data-bs-target="#modalFilter">
                                <img className="ico" src={require("../../assets/images/icons/filter.svg").default} alt="" />
                              </div>
                              <div className="col-2 border border-0 rounded-3 d-flex justify-content-center align-items-center block" type="button">
                                <img className="ico" src={require("../../assets/images/icons/cart.svg").default} alt="" />
                              </div>
                            </Form>
                          </div>

                          <div className="col-xl-2 col-lg-2 d-flex">
                            <div className="col-8 d-flex ">
                              <div className="col-6 border border-0 rounded-3 d-flex justify-content-center align-items-center block" type="button">
                                <img className="ico" src={require("../../assets/images/icons/bell.svg").default} alt="" />
                              </div>
                              <div className="col-6 border border-0 rounded-3 d-flex justify-content-center align-items-center block" type="button">
                                <img className="ico" src={require("../../assets/images/icons/mail.svg").default} alt="" />
                              </div>
                            </div>
                            <div className="col-4 d-flex justify-content-center align-items-center block">
                              <NavDropdown title={pictureThumbnails} align="end" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                <NavDropdown.Header className="d-grid ">
                                  <p className="mb-0 fw-bold">{user_email} </p>
                                  <p className="mb-0">
                                    <small> UID : {user_id}</small>
                                  </p>
                                </NavDropdown.Header>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                  onClick={() => {
                                    navigate("../profile/user");
                                  }}
                                >
                                  My Profile
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                  onClick={() => {
                                    navigate("../profile/seller");
                                  }}
                                >
                                  Switch to Seller
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                  onClick={() => {
                                    navigate("../home");
                                    handleSignOut();
                                  }}
                                >
                                  Sign Out
                                </NavDropdown.Item>
                              </NavDropdown>
                            </div>
                          </div>
                        </Fragment>
                      )}
                    </div>
                  </Fragment>
                )
              ) : (
                <Fragment>
                  {" "}
                  {/* Navbar User No Auth */}
                  <div className="col-12 d-xl-flex d-lg-flex d-md-grid d-sm-grid ">
                    {windowSize.innerWidth <= 992 ? (
                      <Fragment>
                        <div className="col-xl-8 col-lg-8">
                          <Form onSubmit={handleSearchSubmit} className="form-search d-flex">
                            <div className="col-9 d-flex border border-1 rounded-pill form-input">
                              <input className="form-control rounded-pill border-0 " type="search" placeholder="Search" aria-label="Search" onChange={handleSearch} />
                              <Button
                                onClick={() => {
                                  navigate("../product?" + searchParams);
                                  toggleOffcanvas();
                                }}
                                className="bg-transparent border-0 rounded-pill btn-search"
                                type="submit"
                              >
                                <img className="" src={require("../../assets/images/icons/search.svg").default} alt="search" />
                              </Button>
                            </div>
                            <div className="col-1 border border-1 rounded-3 d-flex justify-content-center align-items-center block" type="button" data-bs-toggle="modal" data-bs-target="#modalFilter">
                              <img className="ico" src={require("../../assets/images/icons/filter.svg").default} alt="" />
                            </div>
                            <div className="col-2 border border-0 rounded-3 d-flex justify-content-center align-items-center block" type="button">
                              <img className="ico" src={require("../../assets/images/icons/cart.svg").default} alt="" />
                            </div>
                          </Form>
                        </div>
                        <div className="d-flex mt-4 ">
                          <div className="col-6 d-grid px-2">
                            <Button
                              variant="danger"
                              onClick={() => {
                                navigate("../sign-in");
                                toggleOffcanvas();
                              }}
                              className=" rounded-pill block "
                              type="button"
                            >
                              <p className="my-auto">Login</p>
                            </Button>
                          </div>
                          <div className="col-6 d-grid">
                            <Button
                              variant="outline-danger"
                              onClick={() => {
                                navigate("../sign-up");
                                toggleOffcanvas();
                              }}
                              className=" rounded-pill block  "
                              type="button"
                            >
                              <p className="my-auto"> Sign Up</p>
                            </Button>
                          </div>
                        </div>
                      </Fragment>
                    ) : (
                      <Fragment>
                        <div className="col-xl-8 col-lg-8">
                          <Form onSubmit={handleSearchSubmit} className="form-search d-flex">
                            <div className="col-9 d-flex border border-1 rounded-pill form-input">
                              <input className="form-control rounded-pill border-0 " type="search" placeholder="Search" aria-label="Search" onChange={handleSearch} />
                              <Button
                                onClick={() => {
                                  navigate("../product?" + searchParams);
                                }}
                                className="bg-transparent border-0 rounded-pill btn-search"
                                type="submit"
                              >
                                <img className="" src={require("../../assets/images/icons/search.svg").default} alt="search" />
                              </Button>
                            </div>
                            <div className="col-1 border border-1 rounded-3 d-flex justify-content-center align-items-center block" type="button" data-bs-toggle="modal" data-bs-target="#modalFilter">
                              <img className="ico" src={require("../../assets/images/icons/filter.svg").default} alt="" />
                            </div>
                            <div className="col-2 border border-0 rounded-3 d-flex justify-content-center align-items-center block" type="button">
                              <img className="ico" src={require("../../assets/images/icons/cart.svg").default} alt="" />
                            </div>
                          </Form>
                        </div>
                        <div className="col-xl-4 col-lg-4 d-flex">
                          <div className="col-6 d-grid px-2">
                            <Button
                              variant="danger"
                              onClick={() => {
                                navigate("../sign-in");
                                toggleOffcanvas();
                              }}
                              className=" rounded-pill block "
                              type="button"
                            >
                              <p className="my-auto">Login</p>
                            </Button>
                          </div>
                          <div className="col-6 d-grid">
                            <Button
                              variant="outline-danger"
                              onClick={() => {
                                navigate("../sign-up");
                                toggleOffcanvas();
                              }}
                              className=" rounded-pill block  "
                              type="button"
                            >
                              <p className="my-auto"> Sign Up</p>
                            </Button>
                          </div>
                        </div>
                      </Fragment>
                    )}
                  </div>
                </Fragment>
              )}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default NavigationBar;
