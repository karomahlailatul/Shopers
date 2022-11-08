// import { Fragment, useEffect, useState } from "react";
// import "./SellerPageTabProduct.css";
// import axios from "axios";
// import searchIcon from "../../assets/images/icons/search.svg";
// import Select from "react-select";

// // import SellerPageTabProductAllItem from "../SellerPageTabProductAllItem/SellerPageTabProductAllItem";

// // import ModalEdit from "../../components/ModalUpdate";
// import ModalDelete from "../../components/ModalDelete";

// const SellerPageTabProduct = (id) => {

//   const [productSeller, setProductSeller] = useState([]);

//   const [getIdProductSeller, setGetIdProductSeller] = useState([]);

//   const [updateProductSeller, setUpdateProductSeller] = useState([]);
  
//   const [dataCategory, setDataCategory] = useState([]);

//   const [showListProduct, setShowListProduct] = useState(true);


//   const getAllProduct = async () => {
//     await axios
//       .get(process.env.REACT_APP_API_BACKEND + "product/byseller/" + id.id)
//       .then((response) => {
//         setProductSeller(response.data.data);
//         // console.log(response.data.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const getDetailProduct = async  () => {
//     // if ( getIdProductSeller !== null ) { 
//       //  await axios
//       // .get(process.env.REACT_APP_API_BACKEND + "product/" + getIdProductSeller)
//       // .then((res) => {
//       //   setUpdateProductSeller(res.data.data[0]);
//       //   // console.log(res.data.data);
        
//       // })
//       // .catch((error) => {
//       //   console.log(error);
//       // });
//     // }
  
//   };

//   const getCategory = async () => {
//     await axios
//       .get(process.env.REACT_APP_API_BACKEND + "category")
//       .then((response) => {
//         setDataCategory(response.data.data);
//         // console.log(response.data.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
  
//   console.log(getIdProductSeller + "         kosong");

  


//   useEffect(() => {
//     // setTimeout(() => {
//     //   console.log(id.id)
//     //   getAllProduct()
//     // }, 60);
//     getAllProduct();
//     getDetailProduct();
//     getCategory()
    
//     // setUpdateProductSeller('');
//     // getDetailProduct()
//     // setTags(dataCategory.category_id);

//     // if (dataCategory === undefined)
//     // {
//     //   getCategory()
//     // }  else
//     // if (productSeller === undefined )
//     // {
//     //   getAllProduct()
//     // }  
//     //else if  (productSeller === undefined )
//     // {
//     //   getDetailProduct()
//     // }
//     // else if (tags == '') 
//     // {
//     //   setTags(dataCategory.category_id);
//     // }
  
//   }, []);

//   // console.log(updateProductSeller)
//   const [tags, setTags] = useState('');

//   return (
//     <Fragment>
//       <div className="tab-pane" id="v-pills-product" role="tabpanel" aria-labelledby="v-pills-product-tab" data-toggle="button">
//         <div className="container-fluid container-nav-pills">
//           {showListProduct ? (
//             <Fragment>
//               <div className="col-12 justify-content-start">
//                 <h4 className="modal-title fw-bold " id="modalProfileLabel">
//                   My Product
//                 </h4>
//               </div>
//               <div className="nav d-flex-column nav-pills justify-content-start mt-2" id="v-pills-tab" role="tablist" aria-orientation="horizontal">
//                 <a className="nav-link active" id="v-pills-allitem-tab" data-bs-toggle="pill" data-bs-target="#v-pills-allitem" type="button" role="tab" aria-controls="v-pills-allitem" aria-selected="true">
//                   All items
//                 </a>
//                 <a className="nav-link" id="v-pills-soldout-tab" data-bs-toggle="pill" data-bs-target="#v-pills-soldout" type="button" role="tab" aria-controls="v-pills-soldout" aria-selected="true">
//                   Sold Out
//                 </a>
//                 <a className="nav-link" id="v-pills-archive-tab" data-bs-toggle="pill" data-bs-target="#v-pills-archive" type="button" role="tab" aria-controls="v-pills-archive" aria-selected="true">
//                   Archived
//                 </a>
//                 <a className="nav-link" id="v-pills-archive-tab" data-bs-toggle="pill" data-bs-target="#v-pills-detail-product" type="button" role="tab" aria-controls="v-pills-archive" aria-selected="true"></a>
//               </div>
//               <hr />
//               <div className="tab-content" id="v-pills-tabContent">
//                 <div className="tab-pane active" id="v-pills-allitem" role="tabpanel" aria-labelledby="v-pills-allitem-tab" data-toggle="button">
//                   <div className="vh-100">
//                     <div className="col-4 my-3">
//                       <form className="form-search d-flex border border-1 rounded-pill ">
//                         <input className="form-control rounded-pill border-0 " type="search" placeholder="Search" aria-label="Search" />
//                         <button className="btn-search" type="submit">
//                           <img className="" src={searchIcon} alt="search" />
//                         </button>
//                       </form>
//                     </div>
//                     <table className="table table-hover table-product">
//                       <thead>
//                         <tr>
//                           <th>Product Name</th>
//                           <th>Price</th>
//                           <th>Stock</th>
//                           <th>Photo</th>
//                           <th>Action</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {productSeller.map((item, index) => (
//                           <tr className="" key={item.id}>
//                             <td>{item.name}</td>
//                             <td>$ {item.price}</td>
//                             <td>{item.stock}</td>
//                             <td>
//                               <img className="img-thumbnails" crossOrigin="anonymous" src={item.photo}></img>
//                             </td>
//                             <td>
//                               {/* <Link to={`product/${id.id.id}`}> */}
//                               <button
//                                 className="btn btn-primary"
//                                 onClick={(e) => {
                                  
//                                   setGetIdProductSeller(item.id);
                                  
//                                   getDetailProduct();
                                  
//                                   setShowListProduct(false);
                                  

//                                 }}
//                                 style={{ marginRight: "10px" }}
//                               >
//                                 Detail
//                               </button>
//                               {/* </Link> */}
//                               {/* <ModalEdit id={productSeller.id} name={productSeller.name} stock={productSeller.stock} price={productSeller.price} description={productSeller.description} /> */}
//                               <ModalDelete id={productSeller.id} name={productSeller.name} />
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>

//                 <div className="tab-pane" id="v-pills-soldout" role="tabpanel" aria-labelledby="v-pills-soldout-tab" data-toggle="button">
//                   <div className="vh-100">
//                     <div className="col-4 my-3">
//                       <form className="form-search d-flex border border-1 rounded-pill ">
//                         <input className="form-control rounded-pill border-0 " type="search" placeholder="Search" aria-label="Search" />
//                         <button className="btn-search" type="submit">
//                           <img className="" src={searchIcon} alt="search" />
//                         </button>
//                       </form>
//                     </div>
//                     <table className="table table-hover table-product">
//                       <thead>
//                         <tr>
//                           <th>Product Name</th>
//                           <th>Price</th>
//                           <th>Stock</th>
//                         </tr>
//                       </thead>
//                       <tbody></tbody>
//                     </table>
//                   </div>
//                 </div>

//                 <div className="tab-pane" id="v-pills-archive" role="tabpanel" aria-labelledby="v-pills-archive-tab" data-toggle="button">
//                   <div className="vh-100">
//                     <div className="col-4 my-3">
//                       <form className="form-search d-flex border border-1 rounded-pill ">
//                         <input className="form-control rounded-pill border-0 " type="search" placeholder="Search" aria-label="Search" />
//                         <button className="btn-search" type="submit">
//                           <img className="" src={searchIcon} alt="search" />
//                         </button>
//                       </form>
//                     </div>
//                     <table className="table table-hover table-product">
//                       <thead>
//                         <tr>
//                           <th>Product Name</th>
//                           <th>Price</th>
//                           <th>Stock</th>
//                         </tr>
//                       </thead>
//                       <tbody></tbody>
//                     </table>
//                   </div>
//                 </div>
//               </div>
//             </Fragment>
//           ) : (
//             <Fragment>
//               <div className="col-12 justify-content-start">
//                 <div className="col-12 d-flex justify-content-between">
//                   <h4 className="modal-title fw-bold " id="modalProfileLabel">
//                     Edit Product
//                   </h4>
//                   <div>
//                     <button
//                       className="btn btn-primary"
//                       onClick={(e) => {
//                         setShowListProduct(true);
//                         getAllProduct();
//                         // setUpdateProductSeller('');

//                         // setShowEditDetailsProduct(false);
//                       }}
//                       style={{ marginRight: "10px" }}
//                     >
//                       Back
//                     </button>
//                     <button
//                       className="btn btn-danger"
//                       onClick={(e) => {
//                         setShowListProduct(true);
//                         getAllProduct();
//                       }}
//                       style={{ marginRight: "10px" }}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
                
//                 <hr />
//                 <div className="col-12 d-flex justify-content-between">
//                   {/* <h4 className="modal-title fw-bold " id="modalProfileLabel">
//                     {idProductSeller}
//                   </h4> */}
                
//                 <div className="vh-100">
//                   <div className="container-fluid">
//                     <div className="col-12 justify-content-start mt-1 mb-4">
//                       <div className="col-12 d-flex justify-content-between my-3">
                      
//                         <label className="fs-6 text-muted form-label my-auto">
//                         ID Product : 
//                        </label> 
//                        <label className="fs-6 text-muted form-label my-auto">
//                          {updateProductSeller.id}
//                        </label> 
                       
//                       </div>
//                     <hr />
//                     <div className="col-12 justify-content-start my-3">
//                       <label htmlFor="name" className="fs-6 text-muted form-label my-auto">
//                         Name Product
//                       </label>
//                         <input 
//                         id="name"
//                         type="text" 
//                         name="name"
//                         className="form-control" 
//                         placeholder="Name Product" 
//                         // onChange={handleChange}
//                         defaultValue={updateProductSeller.name}
//                         // disabled={statusEdit === true ? false : true}
//                         />
//                       </div>
//                     <hr />

//                     <div className="col-12 my-3">
                      
//                     <label className="fs-6 text-muted form-label my-auto">
//                         Category Product  
//                     </label> 
//                     {/* <select 
                    
//                     defaultValue={tags === undefined ? updateProductSeller.category_id : tags }
//                     onChange={(e) => setTags(e.target.value)}
//                     className="select-category form-control" >
//                      {dataCategory.map((item, index) => (
//                       <option 
//                       key={item.id} 
//                       defaultValue = {item.id}
//                       selected = {updateProductSeller.category_id === item.id ? true : false }>{item.name} 
//                       </option>
//                   ))}
                  
//                   </select>   */}
//                     {/* <Select
//                       // id="react-select-tag"
                      
//                       isSearchable={true}
//                       options={options}
//                       getOptionLabel={(option) => option.name}
//                       getOptionValue={(option) => option.category_id}
                      
//                       defaultValue={tags}
//                       onChange={(e) => setTags(e.id)}
//                     /> */}
//                     </div>
//                     <hr/>

//                     <div className="col-12 justify-content-start my-3">
//                       <label htmlFor="brand" className="fs-6 text-muted form-label my-auto">
//                         Brand Product
//                       </label>
//                         <input 
//                         id="brand"
//                         type="text" 
//                         name="brand"
//                         className="form-control" 
//                         placeholder="Brand Product" 
//                         // onChange={handleChange}
//                         defaultValue={updateProductSeller.brand}
//                         // disabled={statusEdit === true ? false : true}
//                         />
//                       </div>
//                     <hr />

//                     <div className="col-12 justify-content-start my-3">
//                       <label htmlFor="price" className="fs-6 text-muted form-label my-auto">
//                        Price
//                       </label>
//                         <input 
//                         id="price"
//                         type="text" 
//                         name="price"
//                         className="form-control" 
//                         placeholder="Price" 
//                         // onChange={handleChange}
//                         defaultValue={updateProductSeller.price}
//                         // disabled={statusEdit === true ? false : true}
//                         />
//                       </div>
//                     <hr />

//                     <div className="col-12 justify-content-start my-3">
//                       <label htmlFor="stock" className="fs-6 text-muted form-label my-auto">
//                        Stock Product
//                       </label>
//                         <input 
//                         id="stock"
//                         type="text" 
//                         name="stock"
//                         className="form-control" 
//                         placeholder="Stock Product" 
//                         // onChange={handleChange}
//                         defaultValue={updateProductSeller.stock}
//                         // disabled={statusEdit === true ? false : true}
//                         />
//                       </div>
//                     <hr />

//                     <div className="col-12 justify-content-start my-3">
//                       <label htmlFor="color" className="fs-6 text-muted form-label my-auto">
//                        Color Product
//                       </label>
//                         <input 
//                         id="color"
//                         type="text" 
//                         name="color"
//                         className="form-control" 
//                         placeholder="Color Product" 
//                         // onChange={handleChange}
//                         defaultValue={updateProductSeller.color}
//                         // disabled={statusEdit === true ? false : true}
//                         />
//                       </div>
//                     <hr />

//                     <div className="col-12 justify-content-start my-3">
//                       <label htmlFor="size" className="fs-6 text-muted form-label my-auto">
//                        Size Product
//                       </label>
//                         <input 
//                         id="size"
//                         type="text" 
//                         name="size"
//                         className="form-control" 
//                         placeholder="Size Product" 
//                         // onChange={handleChange}
//                         defaultValue={updateProductSeller.size}
//                         // disabled={statusEdit === true ? false : true}
//                         />
//                       </div>
//                     <hr />
//                     <div className="col-12 my-3">
//                     <label className="fs-6 text-muted form-label my-auto">
//                        Condition Product
//                       </label>
//                       <div className="d-flex ">
//                     <input 
//                     type="radio" 
//                     value="new" 
//                     // onChange={handleChange} 
//                     name="condition" 
//                     className="form-check-input" 
//                     id="new" 
                    
//                     defaultChecked= {updateProductSeller.condition !== "new" ? false : true }
                    
//                     />
//                     <label className="text-muted" 
//                     // onClick={handleClick} 
//                     htmlFor="new">
//                       New
//                     </label>

//                     <input 
//                     type="radio" 
//                     value="used" 
//                     // onChange={handleChange} 
//                     name="condition" 
//                     className="form-check-input" 
//                     id="used"

//                     defaultChecked= {updateProductSeller.condition !== "used" ? false : true }
                   
//                     />
//                     <label className="text-muted" 
//                     // onClick={handleClick} 
//                     htmlFor="used">
//                       Used
//                     </label>
//                   </div>
//                     </div>
//                     <hr />
//                     <div className="col-12 my-3">
//                     <label className="fs-6 text-muted form-label my-auto">
//                        Status Product
//                       </label>
//                       <div className="d-flex ">
//                     <input 
//                     type="radio" 
//                     value="enable" 
//                     // onChange={handleChange} 
//                     name="status" 
//                     className="form-check-input" 
//                     id="enable" 
                    
//                     defaultChecked= {updateProductSeller.status !== "enable" ? false : true }
                    
//                     />
//                     <label className="text-muted" 
//                     // onClick={handleClick} 
//                     htmlFor="enable">
//                       Enable
//                     </label>

//                     <input 
//                     type="radio" 
//                     value="disable" 
//                     // onChange={handleChange} 
//                     name="status" 
//                     className="form-check-input" 
//                     id="disable"

//                     defaultChecked= {updateProductSeller.status !== "disable" ? false : true }
                   
//                     />
//                     <label className="text-muted" 
//                     // onClick={handleClick} 
//                     htmlFor="disable">
//                       Disable
//                     </label>
//                   </div>
//                     </div>
//                     <hr />

                    
                    

//                     </div>




//                     {/* <div className="col-12 justify-content-start my-4">
//                       <div className="col-12 justify-content-start">
//                         <h4 className="modal-title fw-bold " id="modalProfileLabel">
//                           Item Details
//                         </h4>
//                       </div>
//                       <div className="col-6 justify-content-start my-3">
//                         <label hmtlFor="exampleFormControlInput1" className="fs-6 text-muted form-label my-auto">
//                           Unit Price
//                         </label>
//                         <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="" />
//                       </div>
//                       <div className="col-6 justify-content-start my-3">
//                         <label hmtlFor="exampleFormControlInput1" className="fs-6 text-muted form-label my-auto">
//                           Stock
//                         </label>
//                         <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="" />
//                       </div>

//                       <div className="col-6 justify-content-start my-3">
//                         <label hmtlFor="exampleFormControlInput1" className="fs-6 text-muted form-label my-auto ">
//                           Stock
//                         </label>
//                         <div className="my-2">
//                           <div className="form-check form-check-inline">
//                             <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
//                             <label className="form-check-label my-auto" hmtlFor="inlineRadio1">
//                               New
//                             </label>
//                           </div>
//                           <div className="form-check form-check-inline">
//                             <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
//                             <label className="form-check-label my-auto" hmtlFor="inlineRadio2">
//                               Used
//                             </label>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <hr />
//                     <div className="col-12 justify-content-start my-4">
//                       <div className="col-12 justify-content-start">
//                         <h4 className="modal-title fw-bold " id="modalProfileLabel">
//                           Photo of goods
//                         </h4>
//                       </div>

//                       <div className="col-12 justify-content-start border border-1 my-3">
//                         <div className="container-fluid">
//                           <div className="d-flex justify-content-center align-items-center my-3">
//                             <img className="img-display mx-xl-3 mx-lg-2 mx-md-2 mx-sm-1 my-3" src="/assets/images/seller/photo_big.svg" alt="" />
//                             <img className="img-tumbnails  mx-xl-3 mx-lg-2 mx-md-2 mx-sm-1 my-3" src="/assets/images/seller/photo_small.svg" alt="" />
//                             <img className="img-tumbnails  mx-xl-3 mx-lg-2 mx-md-2 mx-sm-1 my-3" src="/assets/images/seller/photo_small.svg" alt="" />
//                             <img className="img-tumbnails  mx-xl-3 mx-lg-2 mx-md-2 mx-sm-1 my-3" src="/assets/images/seller/photo_small.svg" alt="" />
//                             <img className="img-tumbnails  mx-xl-3 mx-lg-2 mx-md-2 mx-sm-1 my-3" src="/assets/images/seller/photo_small.svg" alt="" />
//                           </div>
//                           <hr />
//                           <div className="d-flex justify-content-center my-4">
//                             <button type="button" className="btn btn-outline-secondary rounded-pill" data-bs-toggle="modal" data-bs-target="#modalAddress">
//                               Upload Photos{" "}
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <hr />
//                     <div className="col-12 justify-content-start my-4">
//                       <div className="col-12 justify-content-start">
//                         <h4 className="modal-title fw-bold " id="modalProfileLabel">
//                           Description
//                         </h4>
//                       </div>
//                       <div className="col-12 justify-content-start my-3">
//                         <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
//                       </div>
//                     </div>
//                     <hr />
//                     <div className="col-12 d-flex justify-content-end my-4">
//                       <button type="button" className="btn-sell rounded-pill" data-bs-toggle="modal" data-bs-target="#modalAddress">
//                         Sell
//                       </button>
//                     </div> */}
//                   </div>
//                 </div></div>
//               </div>
//             </Fragment>
//           )}
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default SellerPageTabProduct;
