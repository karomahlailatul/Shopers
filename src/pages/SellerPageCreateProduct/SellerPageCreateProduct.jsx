
import "./SellerPageCreateProduct.css";

import { Fragment, useEffect, useState,  } from "react";


import axios from "axios";
import Select from "react-select";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "./SellerPageTabProduct.css"

import BoxBig from "../../assets/images/icons/box5.svg";

const SellerPageCreateProduct = (id) => {
  
  const [dataCategory, setDataCategory] = useState([]);
  
  const [preview, setPreview] = useState();

  const [newPhoto, setNewPhoto] = useState(null);

  const [tags, setTags] = useState();

  const getCategory = async () => {
    await axios
      .get(process.env.REACT_APP_API_BACKEND + "category")
      .then((response) => {
        setDataCategory(response.data.data);
        // console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const seller_id = id.id;

  const [data, setData] = useState({
    name: "",
    brand: "",
    price: "",
    stock: "",
    photo: "",
    color: "",
    size: "",
    condition: "",
    description: "",
    status: "",
    seller_id: seller_id,
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    // console.log(data);
  };

  const handleUpload = (e) => {
    setNewPhoto(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  const options = dataCategory;

  // console.log(tags)

  const token = localStorage.getItem("token");

  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name );
    formData.append("brand", data.brand );
    formData.append("price", data.price );
    formData.append("stock", data.stock );
    formData.append("photo", newPhoto );
    formData.append("color", data.color );
    formData.append("size", data.size );
    formData.append("condition", data.condition );
    formData.append("description", data.description );
    formData.append("status", data.status );
    formData.append("category_id", tags );
    formData.append("seller_id", seller_id);

    const createProductSellerPage = async () => {
      await axios
      .post(process.env.REACT_APP_API_BACKEND + "product/" , formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        // console.log(res);
        toast.success("Save Product Success", { autoClose: 2500 });
        // alert("product update");
      })
      .catch((err) => {
        console.log(err);
        toast.warning(err.response.data.message, { autoClose: 2500 });
        // alert(err);
      });
    };
    createProductSellerPage();
  };

  useEffect(() => {
    getCategory();
  },[]);

  return (
    <Fragment>
      <div className="tab-pane" id="v-pills-sellproduct" role="tabpanel" aria-labelledby="v-pills-sellproduct-tab" data-toggle="button">
           <div className="container-fluid container-nav-pills container-tab-product">

              <div className="col-12 justify-content-start">
                <div className="col-12 d-flex justify-content-between">
                  <h4 className="modal-title fw-bold " id="modalProfileLabel">
                    Create Product
                  </h4>
                  
                </div>
                <div className="col-12 d-flex justify-content-between"></div>
                <hr />
                <div className="">
                  <form onSubmit={handleUpdate}>
                    <div className="container-fluid">
                      <div className="col-12 justify-content-start mt-1 mb-4">
                        <div className="col-12 d-flex justify-content-between my-3">
                          <label className="fs-6 text-muted form-label my-auto">ID :</label>
                          <label className="fs-6 text-muted form-label my-auto">Automatic by System</label>
                        </div>
                        <hr />
                        <div className="col-12 justify-content-start border border-1 my-3">
                          <div className="container-fluid">
                            <div className="d-flex justify-content-center align-items-center my-3">
                              <div className="img-display d-flex justify-content-center">
                                <img className="mx-xl-3 mx-lg-2 mx-md-2 mx-sm-1 my-3" 
                                // crossOrigin="anonymous"
                                referrerPolicy="no-referrer"
                                src={preview === undefined ? (data.photo === "" ? BoxBig : data.photo) : preview} alt="" />
                              </div>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-center my-4 upload-btn-wrapper">
                              <button type="button" className="btn btn-outline-secondary rounded-pill">
                                Select Image
                              </button>
                              <input className="form-control" type="file" id="formFile" name="photo" onChange={handleUpload} defaultValue={newPhoto === undefined ? data.photo : newPhoto} />
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="col-12 justify-content-start my-3">
                          <label htmlFor="name" className="fs-6 text-muted form-label my-auto">
                            Name Product
                          </label>
                          <input id="name" type="text" name="name" className="form-control" placeholder="Name Product" onChange={handleChange} defaultValue={data.name} />
                        </div>
                        <hr />

                        <div className="col-12 my-3">
                          <label className="fs-6 text-muted form-label my-auto">Category Product</label>
                          <Select
                            name="category_id"
                            placeholder="Category Product"
                            isSearchable={true}
                            options={options}
                            getOptionLabel={(e) => e.name}
                            getOptionValue={(e) => e.id}
                            defaultValue={tags}
                            onChange={(e) => setTags(e.id)}
                          />
                        </div>
                        <hr />

                        <div className="col-12 justify-content-start my-3">
                          <label htmlFor="brand" className="fs-6 text-muted form-label my-auto">
                            Brand Product
                          </label>
                          <input
                            id="brand"
                            type="text"
                            name="brand"
                            className="form-control"
                            placeholder="Brand Product"
                            onChange={handleChange}
                            defaultValue={data.brand}
                           
                          />
                        </div>
                        <hr />

                        <div className="col-12 justify-content-start my-3">
                          <label htmlFor="price" className="fs-6 text-muted form-label my-auto">
                            Price
                          </label>
                          <input
                            id="price"
                            type="text"
                            name="price"
                            className="form-control"
                            placeholder="Price"
                            onChange={handleChange}
                            defaultValue={data.price}
                           
                          />
                        </div>
                        <hr />

                        <div className="col-12 justify-content-start my-3">
                          <label htmlFor="stock" className="fs-6 text-muted form-label my-auto">
                            Stock Product
                          </label>
                          <input
                            id="stock"
                            type="text"
                            name="stock"
                            className="form-control"
                            placeholder="Stock Product"
                            onChange={handleChange}
                            defaultValue={data.stock}
                           
                          />
                        </div>
                        <hr />

                        <div className="col-12 justify-content-start my-3">
                          <label htmlFor="color" className="fs-6 text-muted form-label my-auto">
                            Color Product
                          </label>
                          <input
                            id="color"
                            type="text"
                            name="color"
                            className="form-control"
                            placeholder="Color Product"
                            onChange={handleChange}
                            defaultValue={data.color}
                           
                          />
                        </div>
                        <hr />

                        <div className="col-12 justify-content-start my-3">
                          <label htmlFor="size" className="fs-6 text-muted form-label my-auto">
                            Size Product
                          </label>
                          <input
                            id="size"
                            type="text"
                            name="size"
                            className="form-control"
                            placeholder="Size Product"
                            onChange={handleChange}
                            defaultValue={data.size}
                           
                          />
                        </div>
                        <hr />
                        <div className="col-12 my-3">
                          <label className="fs-6 text-muted form-label my-auto">Condition Product</label>
                          <div className="d-flex justify-content-center">
                            <div className="d-flex justify-content-center  mx-auto">
                              <input
                                type="radio"
                                defaultValue="new"
                                onChange={handleChange}
                                name="condition"
                                className="form-check-input"
                                id="new"
                              />
                              <label
                                className="text-muted"
                                htmlFor="new"
                              >
                                &nbsp; New
                              </label>
                            </div>
                            <div className="d-flex justify-content-center  mx-auto">
                              <input
                                type="radio"
                                defaultValue="used"
                                onChange={handleChange}
                                name="condition"
                                className="form-check-input"
                                id="used"
                              />
                              <label
                                className="text-muted"
                                htmlFor="used"
                              >
                                &nbsp; Used
                              </label>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="col-12 my-3">
                          <label className="fs-6 text-muted form-label my-auto">Status Product</label>

                          <div className="d-flex justify-content-between">
                            <div className="d-flex justify-content-center  mx-auto">
                              <input type="radio" defaultValue="enable" onChange={handleChange} name="status" className="form-check-input" id="enable" />

                              <label
                                className="text-muted"
                                htmlFor="enable"
                              >
                                &nbsp; Enable
                              </label>
                            </div>
                            <div className="d-flex justify-content-center mx-auto">
                              <input type="radio" defaultValue="disable" onChange={handleChange} name="status" className="form-check-input" id="disable"  />
                              <label
                                className="text-muted"
                                htmlFor="disable"
                              >
                                &nbsp;Disable
                              </label>
                            </div>
                          </div>
                        </div>
                        <hr />

                        <div className="col-12 my-3  ">
                          <label htmlFor="product_description" className="fs-6 text-muted form-label">
                            Description Product
                          </label>
                          <textarea
                            className="form-control"
                            id="product_description"
                            rows="5"
                            name="description"
                            placeholder="Product Description"
                            onChange={handleChange}
                            defaultValue={data.description}
                           
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-12 d-flex justify-content-center my-3">
                        <button
                          type="submit"
                          className="btn btn-danger rounded-pill px-3" 
                          // data-bs-toggle="pill"
                          // data-bs-target="#v-pills-product"
                          // role="tab"
                          //         aria-controls="v-pills-product"
                          //         aria-selected="true"
                          onClick={(e) => {
                            setTimeout(() => {
                              setNewPhoto();
                              setPreview();
                            }, 1500);

                          }}
                        >
                          Add Product
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  );
};



export default SellerPageCreateProduct;
