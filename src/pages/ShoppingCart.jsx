import React from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { Image } from "antd";
import { DeleteOutlined } from '@ant-design/icons'; // Ant Design delete icon
import "../App.css";

export default function ShoppingCart() {
  let Cartdata = JSON.parse(localStorage.getItem("E-Commerce-CartItems"));
  let cartedData = [...Cartdata];

  function updateQunatity(data, operator) {
    // Logic to update quantity
  }

  function removeItem(data) {
    // Logic to remove item
  }

  return (
    <section className="h-100" style={{ backgroundColor: "#eee", paddingTop: "60px" }}>
      <MDBRow className="justify-content-center align-items-center h-100" style={{ width: "100%" }}>
        <MDBCol md="12" sm={12}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
              Shopping Cart
            </MDBTypography>
            <div>
              <p className="mb-0">
                <span className="text-muted">Sort by:</span>
                <a href="#!" className="text-body">
                  price <i className="fas fa-angle-down mt-1"></i>
                </a>
              </p>
            </div>
          </div>

          <div className="row mx-auto d-flex justify-content-center align-items-center" style={{ width: "100%" }}>
            {cartedData.map((data, index) => (
              <div
                className="cart-card d-flex flex-column justify-content-start p-3"
                key={index}
                style={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  marginBottom: "10px",
                  width: "100%" // Ensures full width for the card
                }}
              >
                {/* Row 1: Image and Product Info */}
                <div className="d-flex align-items-center mb-2" style={{ flexWrap: "wrap" }}>
                  <div className="image-div" style={{ marginRight: "10px" }}>
                    <Image style={{ width: "50px", height: "auto", objectFit: "cover" }} src={data.image[0]} />
                  </div>
                  <div className="d-flex flex-column" style={{ flexGrow: 1 }}>
                    <p className="mb-1 fw-bold">{data.name}</p>
                    <p className="text-muted mb-0">Category</p>
                  </div>
                </div>

                {/* Row 2: Quantity Controls and Dustbin Icon */}
                <div className="d-flex justify-content-between align-items-center mt-2" style={{ flexWrap: "wrap" }}>
                  <div className="d-flex align-items-center">
                    <button
                      onClick={() => updateQunatity(data, "plus")}
                      className="btn btn-sm btn-dark me-2"
                      style={{ minWidth: "32px", height: "32px" }}
                    >
                      +
                    </button>
                    <p
                      style={{
                        textAlign: "center",
                        marginLeft: "5px",
                        marginRight: "15px",
                        marginTop: "15px",
                      }}
                    >
                      {data.quantity}
                    </p>
                    <button
                      onClick={() => updateQunatity(data, "minus")}
                      className="btn btn-sm btn-dark me-2"
                      style={{ minWidth: "32px", height: "32px" }}
                    >
                      -
                    </button>
                  </div>
                  <DeleteOutlined
                    onClick={() => removeItem(data)}
                    style={{ fontSize: "20px", color: "red", cursor: "pointer", marginLeft: "15px" }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Apply Coupon Section */}
          <MDBCard className="mb-4">
            <MDBCardBody className="p-4 d-flex flex-row">
              <input type="text" className="form-control flex-fill me-2" placeholder="Discount code" />
              <MDBBtn>Apply</MDBBtn>
            </MDBCardBody>
          </MDBCard>

          {/* Checkout Button */}
          <MDBCard>
            <MDBCardBody>
              <MDBBtn className="ms-3" color="warning" block size="lg">
                Checkout
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
  );
}
