// components/CreditCardForm.js
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import 'bootstrap/dist/css/bootstrap.min.css';

const validationSchema = Yup.object({
  amount: Yup.number().required("Amount is required").positive("Amount must be positive"),
  cardHolderName: Yup.string().required("Card holder name is required"),
  cardNumber: Yup.string().required("Card number is required").matches(/^[0-9]{16}$/, "Card number is not valid"),
  expDate: Yup.string().required("Expiration date is required").matches(/^(0[1-9]|1[0-2])\/[0-9]{2}$/, "Expiration date is not valid"),
  cvv: Yup.string().required("CVV is required").matches(/^[0-9]{3,4}$/, "CVV is not valid"),
  phoneNumber: Yup.string().required("Phone number is required").matches(/^[0-9]{10}$/, "Phone number is not valid"),
  billingAddress: Yup.string().required("Billing address is required"),
  emailId: Yup.string().required("Email is required").email("Invalid email address"),
});

const PaymentMethod = () => {
  const formik = useFormik({
    initialValues: {
      amount: '',
      cardHolderName: '',
      cardNumber: '',
      expDate: '',
      cvv: '',
      phoneNumber: '',
      billingAddress: '',
      emailId: '',
      saveCard: false,
    },
    validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="container color mb-4 rounded shadow-lg p-4 bg-white">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading mb-4">
              <h3 className="text-center fw-bold">Payment Details</h3>
              <div className="text-center">
                <img
                  className="img-fluid small-image mx-2"
                  src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Mastercard-Curved.png"
                  alt="Mastercard"
                  width={40}
                  height={25}
                />
                <img
                  className="img-fluid small-image mx-2"
                  src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Visa-Curved.png"
                  alt="VisaCard"
                  width={40}
                  height={25}
                />
                <img
                  className="img-fluid small-image mx-2"
                  src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Discover-Curved.png"
                  alt="Discover"
                  width={40}
                  height={25}
                />
                <img
                  className="img-fluid small-image mx-2"
                  src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Paypal-Curved.png"
                  alt="Paypal"
                  width={40}
                  height={25}
                />
                <img
                  className="img-fluid small-image mx-2"
                  src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/American-Express-Curved.png"
                  alt="American Express"
                  width={40}
                  height={25}
                />
              </div>
            </div>
            <div className="panel-body">
              <form onSubmit={formik.handleSubmit}>
                <div className="form-group mb-3">
                  <label>AMOUNT</label>
                  <input
                    type="text"
                    className={`form-control rounded ${formik.touched.amount && formik.errors.amount ? 'is-invalid' : ''}`}
                    name="amount"
                    placeholder="Amount"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.amount}
                  />
                  {formik.touched.amount && formik.errors.amount ? (
                    <div className="invalid-feedback">{formik.errors.amount}</div>
                  ) : null}
                </div>
                <div className="form-group mb-3">
                  <label>CARD HOLDER NAME</label>
                  <input
                    type="text"
                    className={`form-control rounded ${formik.touched.cardHolderName && formik.errors.cardHolderName ? 'is-invalid' : ''}`}
                    name="cardHolderName"
                    placeholder="Card holder name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.cardHolderName}
                  />
                  {formik.touched.cardHolderName && formik.errors.cardHolderName ? (
                    <div className="invalid-feedback">{formik.errors.cardHolderName}</div>
                  ) : null}
                </div>
                <div className="form-group mb-3">
                  <label>CARD NUMBER</label>
                  <input
                    type="text"
                    className={`form-control rounded ${formik.touched.cardNumber && formik.errors.cardNumber ? 'is-invalid' : ''}`}
                    name="cardNumber"
                    placeholder="Valid Card Number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.cardNumber}
                  />
                  {formik.touched.cardNumber && formik.errors.cardNumber ? (
                    <div className="invalid-feedback">{formik.errors.cardNumber}</div>
                  ) : null}
                </div>
                <div className="form-row mb-3">
                  <div className="col-md-7">
                    <div className="form-group">
                      <label>EXP DATE</label>
                      <input
                        type="text"
                        className={`form-control rounded ${formik.touched.expDate && formik.errors.expDate ? 'is-invalid' : ''}`}
                        name="expDate"
                        placeholder="MM / YY"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.expDate}
                      />
                      {formik.touched.expDate && formik.errors.expDate ? (
                        <div className="invalid-feedback">{formik.errors.expDate}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="form-group">
                      <label>CVV</label>
                      <input
                        type="text"
                        className={`form-control rounded ${formik.touched.cvv && formik.errors.cvv ? 'is-invalid' : ''}`}
                        name="cvv"
                        placeholder="CVV"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.cvv}
                      />
                      {formik.touched.cvv && formik.errors.cvv ? (
                        <div className="invalid-feedback">{formik.errors.cvv}</div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="form-group mb-3">
                  <label>PHONE NUMBER</label>
                  <input
                    type="text"
                    className={`form-control rounded ${formik.touched.phoneNumber && formik.errors.phoneNumber ? 'is-invalid' : ''}`}
                    name="phoneNumber"
                    placeholder="Phone no"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phoneNumber}
                  />
                  {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                    <div className="invalid-feedback">{formik.errors.phoneNumber}</div>
                  ) : null}
                </div>
                <div className="form-group mb-3">
                  <label>BILLING ADDRESS</label>
                  <input
                    type="text"
                    className={`form-control rounded ${formik.touched.billingAddress && formik.errors.billingAddress ? 'is-invalid' : ''}`}
                    name="billingAddress"
                    placeholder="Billing address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.billingAddress}
                  />
                  {formik.touched.billingAddress && formik.errors.billingAddress ? (
                    <div className="invalid-feedback">{formik.errors.billingAddress}</div>
                  ) : null}
                </div>
                <div className="form-group mb-3">
                  <label>EMAIL ID</label>
                  <input
                    type="email"
                    className={`form-control rounded ${formik.touched.emailId && formik.errors.emailId ? 'is-invalid' : ''}`}
                    name="emailId"
                    placeholder="Email id"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.emailId}
                  />
                  {formik.touched.emailId && formik.errors.emailId ? (
                    <div className="invalid-feedback">{formik.errors.emailId}</div>
                  ) : null}
                </div>
                <div className="form-group mb-4 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="saveCard"
                    name="saveCard"
                    onChange={formik.handleChange}
                    checked={formik.values.saveCard}
                  />
                  <label className="form-check-label" htmlFor="saveCard">Save card details for future payments</label>
                </div>
                <button type="submit" className="btn btn-success btn-lg btn-block rounded">Confirm Payment</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <img
            className="img-fluid large-image rounded shadow"
            src='https://devguide.payu.in/website-assets/uploads/2022/08/payuin-payment-gateway-1.webp'
            alt="Right Side Image"
            width={500}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
