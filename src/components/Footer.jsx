import React from "react";
import "./Footer.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const Footer = () => {
  return (
    <div className="footer-bg text-white mt-5 pt-5 pb-4">
      <div className="container">
        <div className="row align-items-center mb-4">
          <div className="col-md-4 mb-3 mb-md-0">
            <h1 className="fw-bold">Positivus</h1>
          </div>

          <div className="col-md-5 mb-3 mb-md-0 text-center footer-links">
            <a href="#">About us</a>
            <a href="#">Services</a>
            <a href="#">Use Cases</a>
            <a href="#">Pricing</a>
            <a href="#">Blog</a>
          </div>

          <div className="col-md-3 text-md-end text-center">
            <i className="fa-brands fa-linkedin footer-icon"></i>
            <i className="fa-brands fa-facebook ms-3 footer-icon"></i>
            <i className="fa-brands fa-twitter ms-3 footer-icon"></i>
          </div>
        </div>

        <div className="row footer-box p-4 mt-4 rounded-4">
          <div className="col-md-6 mb-4 mb-md-0">
            <button className="btn contact-btn mb-3">Contact us</button>

            <p>Email: info@Positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p>
              Address: 1234 Main St <br />
              Moonstone City, Stardust State 12345
            </p>
          </div>

          <div className="col-md-6 d-flex align-items-center right justify-content-end flex-wrap gap-3">
            <FloatingLabel controlId="emailInput" label="Email">
              <Form.Control
                type="email"
                placeholder="Email"
                className="email-input"
              />
            </FloatingLabel>

            <button className="btn subscribe-btn">Subscribe</button>
          </div>
        </div>
      </div>
      <hr />
      <p className="text-center">
        &copy;2023 Positivus all rights reserved{" "}
        <a style={{ color: "white" }} href="">
          Privacy policy
        </a>
      </p>
    </div>
  );
};

export default Footer;
