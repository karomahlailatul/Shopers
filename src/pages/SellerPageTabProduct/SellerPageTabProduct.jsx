import { Fragment, useEffect, useState, useMemo, useRef, forwardRef } from "react";

import "./SellerPageTabProduct.css";
import Table from "react-bootstrap/Table";

import axios from "axios";
import searchIcon from "../../assets/images/icons/search.svg";
import Select from "react-select";

import { useTable, usePagination, useRowSelect, useGlobalFilter, useAsyncDebounce } from "react-table";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "./SellerPageTabProduct.css"

import BoxBig from "../../assets/images/icons/box5.svg";

const SellerPageTabProduct = (id) => {
  
  const token = localStorage.getItem("token");

  const [productSeller, setProductSeller] = useState([]);

  const [updateProductSeller, setUpdateProductSeller] = useState([]);

  const [dataCategory, setDataCategory] = useState([]);

  const [showListProduct, setShowListProduct] = useState(true);

  const [conditionNew, setConditionNew] = useState();
  const [conditionUsed, setConditionUsed] = useState();

  const [statusEnable, setStatusEnable] = useState();
  const [statusDisable, setStatusDisable] = useState();

  const [showModalDeleteSelected, setShowModalDeleteSelected] = useState(false);
  const handleCloseModalDeleteSelected = () => setShowModalDeleteSelected(false);
  const handleShowModalDeleteSelected = () => setShowModalDeleteSelected(true);

  const [showModalDelete, setShowModalDelete] = useState(false);
  const handleCloseModalDelete = () => setShowModalDelete(false);
  const handleShowModalDelete = () => setShowModalDelete(true);

  const [preview, setPreview] = useState();

  const [newPhoto, setNewPhoto] = useState(null);

  const [tags, setTags] = useState();

  const [diplayButton, setDisplayButton] = useState(true);

  const getAllProduct = async () => {
    await axios
      .get(process.env.REACT_APP_API_BACKEND + "product/byseller/" + id.id)
      .then((response) => {
        setProductSeller(response.data.data);
        // console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

  const [data, setData] = useState({
    name: updateProductSeller.name,
    brand: updateProductSeller.brand,
    price: updateProductSeller.price,
    stock: updateProductSeller.stock,
    photo: updateProductSeller.photo,
    color: updateProductSeller.color,
    size: updateProductSeller.size,
    condition: updateProductSeller.condition,
    description: updateProductSeller.description,
    status: updateProductSeller.status,
    seller_id: updateProductSeller.seller_id,
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

  const handleDisplay = () => {
    setDisplayButton(!diplayButton);
  };

  // console.log(diplayButton)

  const dataTable = productSeller;

  // Define a default UI for filtering
  function GlobalFilter({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) {
    const [value, setValue] = useState(globalFilter);
    const onChange = useAsyncDebounce((value) => {
      setGlobalFilter(value || undefined);
    }, 200);

    return (
      <Fragment>
        <div className="col-12 d-flex justify-content-between">
          <div className="col-10 d-flex border border-1 rounded-pill ">
            <input
              className="form-control rounded-pill border-0 "
              value={value || ""}
              onChange={(e) => {
                setValue(e.target.value);
                onChange(e.target.value);
              }}
              placeholder={`Search Product`}
              style={{
                fontSize: "1.1rem",
                border: "0",
              }}
            ></input>

            <img className="ico-search" src={searchIcon} alt="" />
          </div>

          <div className="col-2" style={{ display: dataCheckList.length === 0 ? "none" : "block" }}>
            <button className="btn btn-danger mx-3 rounded-pill" onClick={handleShowModalDeleteSelected}>
              Delete
            </button>
            <Modal show={showModalDeleteSelected} onHide={handleCloseModalDeleteSelected} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title>Delete</Modal.Title>
              </Modal.Header>
              <Modal.Body>Are sure want to delete selected product ?</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModalDeleteSelected}>
                  Close
                </Button>
                <Button variant="danger" onClick={handleDeleteSelected}>
                  Delete
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </Fragment>
    );
  }

  const columns = useMemo(
    () => [
      {
        Header: "Product Name",
        accessor: "name",
        Cell: (item) => {
          return (
            <Fragment>
              {/* <img className="img-thumbnails" crossOrigin="anonymous" src={item.row.original.photo} alt="" /> */}
              <h6 className="text-dark fw-bold title-product-table ">{item.row.original.name}</h6>
            </Fragment>
          );
        },
        // accessor is the "key" in the data
      },
      {
        Header: "Stock",
        accessor: "stock",
      },
      {
        Header: "Price",
        accessor: "price",
        Cell: (item) => {
          return <div>$ {item.row.original.price}</div>;
        },
      },
      {
        Header: "Photo",
        accessor: "photo",
        Cell: (item) => {
          return (
            <div>
              <img className="img-thumbnails" 
              // crossOrigin="anonymous"
              referrerPolicy="no-referrer"
              src={item.row.original.photo} alt="" />
            </div>
          );
        },
      },
      {
        Header: "Action",
        accessor: "action",
        Cell: (item) => {
          return (
            <div className="d-flex justify-content-center">
              <button
                className="btn btn btn-danger rounded-pill"
                onClick={(e) => {
                  const getDetailProduct = async () => {
                    await axios
                      .get(process.env.REACT_APP_API_BACKEND + "product/" + item.row.original.id)
                      .then((res) => {
                        setUpdateProductSeller(res.data.data[0]);

                        setTags(res.data.data[0].category_id);

                        setConditionNew(res.data.data[0].condition.toString() === "new" ? true : false);
                        setConditionUsed(res.data.data[0].condition.toString() === "used" ? true : false);

                        setStatusEnable(res.data.data[0].status.toString() === "enable" ? true : false);
                        setStatusDisable(res.data.data[0].status.toString() === "disable" ? true : false);

                        // setPreview(URL.createObjectURL(res.data.data[0].photo.toString()));

                        // console.log(res.data.data[0].condition.toString())
                        // console.log(tags)
                        // console.log(updateProductSeller.status)
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                  };

                  getDetailProduct();
                  // console.log(item.row.original.id)
                  setShowListProduct(false);
                }}
                // style={{ marginRight: "10px" }}
              >
                {"Detail"}
              </button>
            </div>
          );
        },
      },
    ],
    []
  );

  const IndeterminateCheckbox = forwardRef(({ indeterminate, ...rest }, ref) => {
    const defaultRef = useRef();
    const resolvedRef = ref || defaultRef;

    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <input type="checkbox" ref={resolvedRef} onChange={(e) => handleDisplay} checked={diplayButton} {...rest} />
      </>
    );
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    selectedFlatRows,
    state: { globalFilter },
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data: dataTable,
    },

    useGlobalFilter,
    usePagination,
    useRowSelect, // useGlobalFilter!
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "id",

          Header: ({ getToggleAllPageRowsSelectedProps, row }) => (
            <div>
              <IndeterminateCheckbox
                {...getToggleAllPageRowsSelectedProps({
                  // onChange: () => {
                  //    const selected = row.isSelected; // get selected status of current row.
                  //    toggleAllRowsSelected(false); // deselect all.
                  //    row.toggleRowSelected(!selected); // reverse selected status of current row.
                  //    console.log(row.original.id)
                  //  }
                })}
              />
            </div>
          ),
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox
                {...row.getToggleRowSelectedProps({
                  //  onChange: (e) => {
                  // const selected = row.isSelected; // get selected status of current row.
                  //   // toggleAllRowsSelected(false); // deselect all.
                  // row.toggleRowSelected(!selected); // reverse selected status of current row.
                  // console.log(row.original.id)
                  // selected ? console.log("unchek") : console.log("check")
                  // },
                })}
              />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );

  const dataCheckList = selectedFlatRows.map((d) => `'${d.original.id}'`);
  // console.log(dataCheckList.toString());
  // dataCheckList.length === 0 ? console.log("kosong") : console.log("ada isi");

  const handleDeleteSelected = () => {
    const handleDeleteSelect = async () => {
      await axios
        .delete(process.env.REACT_APP_API_BACKEND + "product/selected/" + dataCheckList
        , {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
        )
        .then((res) => {
          // alert("delete success");
          toast.success("Delete Selected Success", { autoClose: 2500 });
          setShowModalDeleteSelected(false);
          getAllProduct();
        })
        .catch((err) => {
          // alert("delete failed");
          toast.success(err, { autoClose: 2500 });
          setShowModalDeleteSelected(false);
        });
    };
    handleDeleteSelect();
  };

  const handleDelete = () => {
    const handleDeleted = async () => {
      await axios
        .delete(process.env.REACT_APP_API_BACKEND + "product/" + updateProductSeller.id
        , {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
        )
        .then((res) => {
          // alert("delete success");
          toast.success("Delete Selected Success", { autoClose: 2500 });
          setShowModalDelete(false);
          getAllProduct();
        })
        .catch((err) => {
          // alert("delete failed");
          toast.success(err, { autoClose: 2500 });
          setShowModalDelete(false);
        });
    };
    handleDeleted();
  };

  const seller_id = id.id;
  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name === undefined ? updateProductSeller.name : data.name);
    formData.append("brand", data.brand === undefined ? updateProductSeller.brand : data.brand);
    formData.append("price", data.price === undefined ? updateProductSeller.price : data.price);
    formData.append("stock", data.stock === undefined ? updateProductSeller.stock : data.stock);
    formData.append("photo", newPhoto === undefined ? updateProductSeller.photo : newPhoto);
    formData.append("color", data.color === undefined ? updateProductSeller.color : data.color);
    formData.append("size", data.size === undefined ? updateProductSeller.size : data.size);
    formData.append("condition", data.condition === undefined ? updateProductSeller.condition : data.condition);
    formData.append("description", data.description === undefined ? updateProductSeller.description : data.description);
    formData.append("status", data.status === undefined ? updateProductSeller.status : data.status);
    formData.append("category_id", tags === undefined ? updateProductSeller.category_id : tags);
    formData.append("seller_id", seller_id);

    const updateProductSellerPage = async () => {
      await axios
        .put(process.env.REACT_APP_API_BACKEND + "product/" + updateProductSeller.id, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          // console.log(res);
          setNewPhoto();
          setPreview();
          setConditionNew();
          setConditionUsed();
          setStatusEnable();
          setStatusDisable();
          toast.success("Update Product Success", { autoClose: 2500 });

          // alert("product update");
        })
        .catch((err) => {
          console.log(err);
          toast.warning(err.response.data.message, { autoClose: 2500 });
          // alert(err);
        });
    };
    updateProductSellerPage();
  };

  useEffect(() => {
    getAllProduct();
    getCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <div className="tab-pane" id="v-pills-product" role="tabpanel" aria-labelledby="v-pills-product-tab" data-toggle="button">
        <div className="container-fluid container-nav-pills container-tab-product">
          {showListProduct ? (
            <Fragment>
              <div className="col-12 justify-content-start">
                <h4 className="modal-title fw-bold " id="modalProfileLabel">
                  My Product
                </h4>
              </div>
              <div className="nav d-flex-column nav-pills justify-content-start mt-2" id="v-pills-tab" role="tablist" aria-orientation="horizontal">
                <button className="nav-link active" id="v-pills-allitem-tab" data-bs-toggle="pill" data-bs-target="#v-pills-allitem" type="button" role="tab" aria-controls="v-pills-allitem" aria-selected="true">
                  All items
                </button>
                <button className="nav-link" id="v-pills-soldout-tab" data-bs-toggle="pill" data-bs-target="#v-pills-soldout" type="button" role="tab" aria-controls="v-pills-soldout" aria-selected="true">
                  Sold Out
                </button>
                <button className="nav-link" id="v-pills-archive-tab" data-bs-toggle="pill" data-bs-target="#v-pills-archive" type="button" role="tab" aria-controls="v-pills-archive" aria-selected="true">
                  Archived
                </button>
                <button className="nav-link" id="v-pills-archive-tab" data-bs-toggle="pill" data-bs-target="#v-pills-detail-product" type="button" role="tab" aria-controls="v-pills-archive" aria-selected="true"></button>
              </div>
              <hr />

              <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane active" id="v-pills-allitem" role="tabpanel" aria-labelledby="v-pills-allitem-tab" data-toggle="button">
                  <div className="">
                    {/* <div className="d-flex my-3 justify-content-between">
                      <div className="col-4">
                        <form className="form-search d-flex border border-1 rounded-pill ">
                          <input className="form-control rounded-pill border-0 " type="search" placeholder="Search" aria-label="Search" />
                          <button className="btn-search" type="submit">
                            <img className="" src={searchIcon} alt="search" />
                          </button>
                        </form>
                      </div>

                      <div style={{ display: dataCheckList.length === 0 ? "none" : "block" }}>
                        <button
                          className="btn btn-danger  rounded-pill"
                          // style={{ marginRight: "10px" }}
                          onClick={handleShowModalDeleteSelected}
                        >
                          Delete
                        </button>
                        <Modal show={showModalDeleteSelected} onHide={handleCloseModalDeleteSelected} animation={false}>
                          <Modal.Header closeButton>
                            <Modal.Title>Delete</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>Are sure want to delete selected product ?</Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseModalDeleteSelected}>
                              Close
                            </Button>
                            <Button variant="danger" onClick={handleDeleteSelected}>
                              Delete
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </div>
                    </div> */}

                    {/* <table className="table table-hover table-product" {...getTableProps()}> */}
                    <Table responsive striped bordered hover {...getTableProps()}>
                      <thead>
                        <tr>
                          <th colSpan={visibleColumns.length}>
                            <GlobalFilter preGlobalFilteredRows={preGlobalFilteredRows} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
                          </th>
                        </tr>
                        {headerGroups.map((headerGroup) => (
                          <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                            ))}
                          </tr>
                        ))}
                      </thead>
                      <tbody {...getTableBodyProps()}>
                        {page.map((row, i) => {
                          prepareRow(row);
                          return (
                            <tr {...row.getRowProps()}>
                              {row.cells.map((cell) => {
                                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                              })}
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>

                    {/* </table> */}

                    <div className=" d-xl-flex d-lg-flex d-md-grid d-sm-grid pagination ">
                      <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 d-flex justify-content-between align-items-center my-2">
                        <button className="btn btn-danger rounded-pill" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                          {"<<"}
                        </button>{" "}
                        <button className="btn btn-danger rounded-pill px-3" onClick={() => previousPage()} disabled={!canPreviousPage}>
                          {"<"}
                        </button>{" "}
                        <button className="btn btn-danger rounded-pill px-3" onClick={() => nextPage()} disabled={!canNextPage}>
                          {">"}
                        </button>{" "}
                        <button className="btn btn-danger rounded-pill" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                          {">>"}
                        </button>{" "}
                      </div>
                      <div className="col-xl-1 col-lg-1"></div>
                      <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 d-flex justify-content-between align-items-center my-2">
                        <span>
                          Page{" "}
                          <strong>
                            {pageIndex + 1} of {pageOptions.length}
                          </strong>{" "}
                        </span>
                        <span>
                          | Go to page:{" "}
                          <input
                            type="number"
                            defaultValue={pageIndex + 1}
                            onChange={(e) => {
                              const page = e.target.value ? Number(e.target.value) - 1 : 0;
                              gotoPage(page);
                            }}
                            style={{ width: "100px" }}
                          />
                        </span>{" "}
                        <select
                          value={pageSize}
                          onChange={(e) => {
                            setPageSize(Number(e.target.value));
                          }}
                        >
                          {[10, 20, 30, 40, 50].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                              Show {pageSize}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tab-pane" id="v-pills-soldout" role="tabpanel" aria-labelledby="v-pills-soldout-tab" data-toggle="button">
                  <div className="vh-100">
                    <div className="col-4 my-3">
                      <form className="form-search d-flex border border-1 rounded-pill ">
                        <input className="form-control rounded-pill border-0 " type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn-search" type="submit">
                          <img className="" src={searchIcon} alt="search" />
                        </button>
                      </form>
                    </div>
                    <table className="table table-hover table-product">
                      <thead>
                        <tr>
                          <th>Product Name</th>
                          <th>Price</th>
                          <th>Stock</th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                </div>

                <div className="tab-pane" id="v-pills-archive" role="tabpanel" aria-labelledby="v-pills-archive-tab" data-toggle="button">
                  <div className="vh-100">
                    <div className="col-4 my-3">
                      <form className="form-search d-flex border border-1 rounded-pill ">
                        <input className="form-control rounded-pill border-0 " type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn-search" type="submit">
                          <img className="" src={searchIcon} alt="search" />
                        </button>
                      </form>
                    </div>
                    <table className="table table-hover table-product">
                      <thead>
                        <tr>
                          <th>Product Name</th>
                          <th>Price</th>
                          <th>Stock</th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <div className="col-12 justify-content-start">
                <div className="col-12 d-flex justify-content-between">
                  <h4 className="modal-title fw-bold " id="modalProfileLabel">
                    Edit Product
                  </h4>
                  <div>
                    <button
                      className="btn btn-primary"
                      onClick={(e) => {
                        setShowListProduct(true);
                        getAllProduct();
                        setUpdateProductSeller([]);
                        setNewPhoto();
                        setPreview();
                        setConditionNew();
                        setConditionUsed();
                        setStatusEnable();
                        setStatusDisable();
                      }}
                      style={{ marginRight: "10px" }}
                    >
                      {"<"}&nbsp;Back
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={(e) => {
                        getAllProduct();
                        handleShowModalDelete();
                      }}
                      style={{ marginRight: "10px" }}
                    >
                      Delete
                    </button>
                    <Modal show={showModalDelete} onHide={handleCloseModalDelete} animation={false}>
                      <Modal.Header closeButton>
                        <Modal.Title>Delete</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>Are sure want to delete selected product ?</Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModalDelete}>
                          Close
                        </Button>
                        <Button
                          variant="danger"
                          onClick={(e) => {
                            handleDelete();
                            setShowListProduct(true);
                          }}
                        >
                          Delete
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
                <div className="col-12 d-flex justify-content-between"></div>
                <hr />
                <div className="">
                  <form onSubmit={handleUpdate}>
                    <div className="container-fluid">
                      <div className="col-12 justify-content-start mt-1 mb-4">
                        <div className="col-12 d-flex justify-content-between my-3">
                          <label className="fs-6 text-muted form-label my-auto">ID :</label>
                          <label className="fs-6 text-muted form-label my-auto">{updateProductSeller.id}</label>
                        </div>
                        <hr />
                        <div className="col-12 justify-content-start border border-1 my-3">
                          <div className="container-fluid">
                            <div className="d-flex justify-content-center align-items-center my-3">
                              <div className="img-display d-flex justify-content-center">
                                <img className="mx-xl-3 mx-lg-2 mx-md-2 mx-sm-1 my-3"
                                //  crossOrigin="anonymous" 
                                referrerPolicy="no-referrer"
                                src={preview === undefined ? (updateProductSeller.photo === undefined ? BoxBig : updateProductSeller.photo) : preview} alt="" />
                              </div>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-center my-4 upload-btn-wrapper">
                              <button type="button" className="btn btn-outline-secondary rounded-pill">
                                Select Image
                              </button>
                              <input className="form-control" type="file" id="formFile" name="photo" onChange={handleUpload} defaultValue={newPhoto === undefined ? updateProductSeller.photo : newPhoto} />
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="col-12 justify-content-start my-3">
                          <label htmlFor="name" className="fs-6 text-muted form-label my-auto">
                            Name Product
                          </label>
                          <input id="name" type="text" name="name" className="form-control" placeholder="Name Product" onChange={handleChange} defaultValue={updateProductSeller.name} />
                        </div>
                        <hr />

                        <div className="col-12 my-3">
                          <label className="fs-6 text-muted form-label my-auto">Category Product</label>
                          <Select
                            name="category_id"
                            placeholder={updateProductSeller.category_name}
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
                            defaultValue={updateProductSeller.brand}
                            // disabled={statusEdit === true ? false : true}
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
                            defaultValue={updateProductSeller.price}
                            // disabled={statusEdit === true ? false : true}
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
                            defaultValue={updateProductSeller.stock}
                            // disabled={statusEdit === true ? false : true}
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
                            defaultValue={updateProductSeller.color}
                            // disabled={statusEdit === true ? false : true}
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
                            defaultValue={updateProductSeller.size}
                            // disabled={statusEdit === true ? false : true}
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
                                defaultChecked={conditionNew}
                                //  checked={updateProductSeller.condition === "new" ? true : false}
                                //  defaultChecked={updateProductSeller.condition == 'new' ? false : true}
                              />
                              <label
                                className="text-muted"
                                // onClick={handleClick}
                                htmlFor="new"
                              >
                                &nbsp; New
                              </label>
                              {/* <p>{updateProductSeller.condition}</p> */}
                            </div>
                            <div className="d-flex justify-content-center  mx-auto">
                              <input
                                type="radio"
                                defaultValue="used"
                                onChange={handleChange}
                                name="condition"
                                className="form-check-input"
                                id="used"
                                defaultChecked={conditionUsed}
                                //  checked={updateProductSeller.condition !== "new" ? true : false}
                                //  defaultChecked={updateProductSeller.condition !== "new"? false : true}
                              />
                              <label
                                className="text-muted"
                                // onClick={handleClick}
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
                              <input type="radio" defaultValue="enable" onChange={handleChange} name="status" className="form-check-input" id="enable" defaultChecked={statusEnable} />

                              <label
                                className="text-muted"
                                // onClick={handleClick}
                                htmlFor="enable"
                              >
                                &nbsp; Enable
                              </label>
                            </div>
                            <div className="d-flex justify-content-center mx-auto">
                              <input type="radio" defaultValue="disable" onChange={handleChange} name="status" className="form-check-input" id="disable" defaultChecked={statusDisable} />
                              <label
                                className="text-muted"
                                // onClick={handleClick}
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
                            defaultValue={updateProductSeller.description}
                            // disabled={statusEdit === true ? false : true}
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-12 d-flex justify-content-center my-3">
                        <button
                          type="submit"
                          className="btn btn-danger rounded-pill w-100 px-3"
                          onClick={(e) => {
                            setTimeout(() => {
                              setShowListProduct(true);
                              getAllProduct();
                              setUpdateProductSeller([]);
                              setNewPhoto();
                              setPreview();
                            }, 500);
                          }}
                        >
                          Save Product
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </Fragment>
          )}
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default SellerPageTabProduct;
