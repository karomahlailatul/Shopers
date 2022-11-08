import React, { Fragment, useState ,useEffect} from "react";

// import { useParams, useNavigate } from "react-router-dom";

import "./SellerPageTabProfile.css";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SellerPageTabProfile = ({ id, name_store, logo, address, phone, description, statusEdit, setStatusEdit, setSellerPage }) => {
  const [data, setData] = useState({
    id,
    name_store,
    logo,
    address,
    phone,
    description,
  });

  

  const [preview, setPreview] = useState();

  const [newLogo, setNewLogo] = useState(null);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    // console.log(data);
  };

  const handleUpload = (e) => {
    setNewLogo(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name_store", data.name_store === undefined ? name_store : data.name_store);
    formData.append("logo", newLogo === undefined ? logo : newLogo);
    formData.append("address", data.address === undefined ? address : data.address);
    formData.append("phone", data.phone === undefined ? phone : data.phone);
    formData.append("description", data.description === undefined ? description : data.description);

    const updateSellerPage = async () => {
      await axios
        .put(process.env.REACT_APP_API_BACKEND + "seller/" + id, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          // console.log(res);
          setSellerPage();
          setStatusEdit(false)
          toast.success("Update Profile Seller Success", { autoClose: 2500 });
          // alert("product update");
        })
        .catch((err) => {
          console.log(err);

          toast.danger(err, { autoClose: 2500 });
          // alert(err);
        });
    };
    updateSellerPage();
  };

  // console.log("ini dari address :" + address);
  // console.log("ini dari data.address :"+data.address);

  // useEffect(() => {
  // }, []);

  return (
    <Fragment>
      <div className="tab-pane active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" data-toggle="button">
        <div className="">
          <div className="container-fluid">
            <div className="col-12 justify-content-start">
              <h4 className="modal-title fw-bold " id="modalProfileLabel">
                My Profile Store
              </h4>
              <h6 className="text-muted my-2" id="modalProfileLabel">
                Manage your profile information
              </h6>
            </div>
            <hr />
            <form onSubmit={handleUpdate}>
              <div className="col-12 d-xl-flex d-lg-flex flex-xl-row-reverse flex-lg-row-reverse d-md-grid d-sm-grid justify-content-start my-3">
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                  <div className="col-12 d-flex justify-content-center my-3 logo-profile-big">
                    <img className="" 
                    // crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                    src={preview === undefined ? logo : preview} alt="" />
                  </div>
                  <div className="col-12 d-flex justify-content-center upload-btn-wrapper">
                    <button type="button" className="btn btn-outline-secondary rounded-pill">
                      Select Image
                    </button>
                    <input className="form-control" type="file" id="formFile" name="logo" onChange={handleUpload} defaultValue={newLogo === undefined ? logo : newLogo} disabled={statusEdit === true ? false : true} />
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                  <div className="col-12 d-flex justify-content-start my-3">
                    <div className="col-5 d-flex justify-content-start ">
                      <label htmlFor="name_store" className="fs-6 text-muted form-label my-auto ms-2">
                        Name Store
                      </label>
                    </div>
                    <input
                      id="name_store"
                      type="text"
                      className="form-control"
                      placeholder="Name Store"
                      name="name_store"
                      onChange={handleChange}
                      defaultValue={data.name_store === undefined ? name_store : data.name_store}
                      disabled={statusEdit === true ? false : true}
                    />
                  </div>
                  <div className="col-12 d-flex justify-content-start my-3">
                    <div className="col-5 d-flex justify-content-start ">
                      <label htmlFor="store_address" className="fs-6 text-muted form-label my-auto ms-2">
                        Address Store
                      </label>
                    </div>

                    <input
                      id="store_address"
                      type="text"
                      className="form-control"
                      placeholder="Store Address"
                      name="address"
                      onChange={handleChange}
                      defaultValue={data.address === undefined ? (address === 'null' || null ? '' : address) : (data.address === 'null' || null ? "" : data.address) }
                      disabled={statusEdit === true ? false : true}
                    />
                  </div>
                  <div className="col-12 d-flex justify-content-start my-3">
                    <div className="col-5 d-flex justify-content-start ">
                      <label htmlFor="phone_store" className="fs-6 text-muted form-label my-auto ms-2">
                        Phone Store
                      </label>
                    </div>
                    <input
                      id="phone_store"
                      type="text"
                      className="form-control"
                      name="phone_store"
                      placeholder="Store Phone"
                      onChange={handleChange}
                      defaultValue={data.phone === undefined ? (phone === 'null' || null ? '' : phone) : (data.phone === 'null' || null ? "" : data.phone) }
                      disabled={statusEdit === true ? false : true}
                    />
                  </div>
                  <div className="col-12 d-flex justify-content-start my-3">
                    <div className="col-5 d-flex justify-content-start ">
                      <label htmlFor="store_description" className="fs-6 text-muted form-label my-auto ms-2">
                        Description Store
                      </label>
                    </div>
                    <textarea
                      className="form-control"
                      id="store_description"
                      rows="5"
                      name="description"
                      placeholder="Store Description"
                      onChange={handleChange}
                      defaultValue={data.description === undefined ? (description === 'null' || null ? '' : description) : (data.description === 'null' || null ? "" : data.description)}
                      disabled={statusEdit === true ? false : true}
                    ></textarea>
                  </div>
                  <div className="col-12 d-flex justify-content-center my-4">
                    <button type="submit" className="btn btn-danger rounded-pill px-3" 
                    // onClick={(e)=>
                    //   setSellerPage() }
                     disabled={statusEdit === true ? false : true}>
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer />
    </Fragment>
  );
};

export default SellerPageTabProfile;
