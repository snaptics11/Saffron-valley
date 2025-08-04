import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="footer bg-success text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-2" style={{ marginTop: "20px" }}>
            <div className="logo-section">
              <div className="logo-box">
                <img
                  src={logo}
                  alt="Logo"
                  style={{ height: "50px" }}
                  className="img-fluid"
                />
              </div>
              <div className="follow-us mt-2" style={{ textAlign: "center" }}>
                <h6>Follow Us</h6>
                <div
                  className="social-icons"
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <a
                    href="https://www.facebook.com/myelegantgroup"
                    className="social-icon"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/myelegantgroupofficial/"
                    className="social-icon"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/@myelegantgroup"
                    className="social-icon"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/myelegantgroup/"
                    className="social-icon"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3" style={{ marginTop: "20px" }}>
            <h6>Address</h6>
            <p>
              Flat #16, Block 36, <br />
              Ramaraju Nagar, Suchitra,
              <br />
              Hyderabad - 500055
            </p>
          </div>
          <div className="col-md-2" style={{ marginTop: "20px" }}>
            <h6>Sitemap Links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#Home">Home</a>
              </li>
              <li>
                <a href="#About">About Us</a>
              </li>
              <li>
                <a href="#Project">Projects</a>
              </li>
              <li>
                <a href="#Gallery">Gallery</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2" style={{ marginTop: "20px" }}>
            <h6>Other Links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#Amenities">Amenities</a>
              </li>
              <li>
                <a href="#">Location Highlights</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3" style={{ marginTop: "20px" }}>
            <h6>Contact Us</h6>
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-phone-alt me-2"></i>
                +91 9888 63 2222
                <div className="ms-4 mt-2">+91 9888 64 2222</div>
                <div className="ms-4 mt-2">+91 8988 55 5888</div>
              </li>

              <li>
                <i className="bi bi-envelope-fill"></i>:  rvinfradevelopers2018@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <p>&copy; 2025 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
