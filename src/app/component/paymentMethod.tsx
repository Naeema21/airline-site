import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const validationSchema = Yup.object({
  amount: Yup.number()
    .required("Amount is required")
    .positive("Amount must be positive"),
  cardHolderName: Yup.string().required("Card holder name is required"),
  cardNumber: Yup.string()
    .required("Card number is required")
    .matches(/^[0-9]{16}$/, "Card number is not valid"),
  expDate: Yup.string()
    .required("Expiration date is required")
    .matches(/^(0[1-9]|1[0-2])\/[0-9]{2}$/, "Expiration date is not valid"),
  cvv: Yup.string()
    .required("CVV is required")
    .matches(/^[0-9]{3,4}$/, "CVV is not valid"),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Phone number is not valid"),
  billingAddress: Yup.string().required("Billing address is required"),
  emailId: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
});

const PaymentMethod = () => {
  const [show, setShow] = useState(false);

  const formik = useFormik({
    initialValues: {
      amount: "",
      cardHolderName: "",
      cardNumber: "",
      expDate: "",
      cvv: "",
      phoneNumber: "",
      billingAddress: "",
      emailId: "",
      saveCard: false,
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <button
        className="btn btn-search mt-4 mb-6"
        onClick={() => setShow(true)}
      >
        Book Ticket
      </button>
      <div
        className={`modal fade ${show ? "show d-block" : ""}`}
        id="exampleModalCenter"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="flight booking"
        aria-hidden={!show}
        style={{
          display: show ? "block" : "none",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1050, // Adjusted z-index for modal background
          position: "fixed", // Ensure it covers the entire viewport
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
          style={{ zIndex: 1060 }}
        >
          <div className="modal-content popup-bg">
            <div className="modal-header justify-content-end border-0 p-0">
              <button
                type="button"
                className="close mx-2"
                onClick={handleClose}
                aria-label="Close"
                style={{
                  fontSize: "1.5rem",
                  border: "none",
                  background: "none",
                }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body text-center d-flex flex-column align-items-center py-4">
              <h3>Thank you for booking with us!</h3>
            </div>
            
            <div className="card p-4">
              <div className="card-header text-center mb-4">
                <div className="text-center">
                  <span>Secured Payment with the following methods:</span>
                  <div className="d-flex justify-content-center mt-2">
                    <img
                      className="img-fluid mx-2"
                      src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Mastercard-Curved.png"
                      alt="Mastercard"
                      width={40}
                      height={25}
                    />
                    <img
                      className="img-fluid mx-2"
                      src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Visa-Curved.png"
                      alt="VisaCard"
                      width={40}
                      height={25}
                    />
                    <img
                      className="img-fluid mx-2"
                      src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Discover-Curved.png"
                      alt="Discover"
                      width={40}
                      height={25}
                    />
                    <img
                      className="img-fluid mx-2"
                      src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Paypal-Curved.png"
                      alt="Paypal"
                      width={40}
                      height={25}
                    />
                    <img
                      className="img-fluid mx-2"
                      src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/American-Express-Curved.png"
                      alt="American Express"
                      width={40}
                      height={25}
                    />
                  </div>
                </div>
              </div>
              
              <div className="card-body">
                <form onSubmit={formik.handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          className={`form-control ${
                            formik.touched.amount && formik.errors.amount
                              ? "is-invalid"
                              : ""
                          }`}
                          name="amount"
                          placeholder="Amount"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.amount}
                        />
                        {formik.touched.amount && formik.errors.amount ? (
                          <div className="invalid-feedback">
                            {formik.errors.amount}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          className={`form-control ${
                            formik.touched.cardHolderName &&
                            formik.errors.cardHolderName
                              ? "is-invalid"
                              : ""
                          }`}
                          name="cardHolderName"
                          placeholder="Card Holder Name"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.cardHolderName}
                        />
                        {formik.touched.cardHolderName &&
                        formik.errors.cardHolderName ? (
                          <div className="invalid-feedback">
                            {formik.errors.cardHolderName}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className={`form-control ${
                        formik.touched.cardNumber && formik.errors.cardNumber
                          ? "is-invalid"
                          : ""
                      }`}
                      name="cardNumber"
                      placeholder="Valid Card Number"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.cardNumber}
                    />
                    {formik.touched.cardNumber && formik.errors.cardNumber ? (
                      <div className="invalid-feedback">
                        {formik.errors.cardNumber}
                      </div>
                    ) : null}
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          className={`form-control ${
                            formik.touched.expDate && formik.errors.expDate
                              ? "is-invalid"
                              : ""
                          }`}
                          name="expDate"
                          placeholder="MM / YY"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.expDate}
                        />
                        {formik.touched.expDate && formik.errors.expDate ? (
                          <div className="invalid-feedback">
                            {formik.errors.expDate}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          className={`form-control ${
                            formik.touched.cvv && formik.errors.cvv
                              ? "is-invalid"
                              : ""
                          }`}
                          name="cvv"
                          placeholder="CVV"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.cvv}
                        />
                        {formik.touched.cvv && formik.errors.cvv ? (
                          <div className="invalid-feedback">
                            {formik.errors.cvv}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          className={`form-control ${
                            formik.touched.phoneNumber &&
                            formik.errors.phoneNumber
                              ? "is-invalid"
                              : ""
                          }`}
                          name="phoneNumber"
                          placeholder="Phone Number"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.phoneNumber}
                        />
                        {formik.touched.phoneNumber &&
                        formik.errors.phoneNumber ? (
                          <div className="invalid-feedback">
                            {formik.errors.phoneNumber}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <input
                          type="email"
                          className={`form-control ${
                            formik.touched.emailId && formik.errors.emailId
                              ? "is-invalid"
                              : ""
                          }`}
                          name="emailId"
                          placeholder="Email ID"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.emailId}
                        />
                        {formik.touched.emailId && formik.errors.emailId ? (
                          <div className="invalid-feedback">
                            {formik.errors.emailId}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className={`form-control ${
                        formik.touched.billingAddress &&
                        formik.errors.billingAddress
                          ? "is-invalid"
                          : ""
                      }`}
                      name="billingAddress"
                      placeholder="Billing Address"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.billingAddress}
                    />
                    {formik.touched.billingAddress &&
                    formik.errors.billingAddress ? (
                      <div className="invalid-feedback">
                        {formik.errors.billingAddress}
                      </div>
                    ) : null}
                  </div>
                  <button type="submit" className="btn btn-success btn-lg w-100">
                    Confirm Payment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentMethod;
