import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import "./Highlights.css";
import clubhouse from "../../assets/clubhouse.png";

const Highlights = () => {
  return (
    <div id="Highlights">
      <div className="project py-5" style={{ backgroundColor: "#c3d7e99a" }}>
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} className="mb-4">
              <h1 className="section-title">PROJECT HIGHLIGHTS</h1>
              <ul className="custom-list">
                <li>
                  <FaCheckCircle className="check-icon" />
                  Total land area of 18 acres
                </li>
                <li>
                  <FaCheckCircle className="check-icon" />
                  76 luxury villas
                </li>
                <li>
                  <FaCheckCircle className="check-icon" />
                  Villas set on 605 sq. yds. plots
                </li>
                <li>
                  <FaCheckCircle className="check-icon" />
                  1.5-acre clubhouse with premium amenities
                </li>
                <li>
                  <FaCheckCircle className="check-icon" />
                  3 Villa Types: Kerala-inspired Ground Floor Farm Villas & European-inspired Duplex Villas (East & West)
                </li>
                <li>
                  <FaCheckCircle className="check-icon" />
                  Fully secured gated community with 24/7 digital security & solar fencing
                </li>
                <li>
                  <FaCheckCircle className="check-icon" />
                  Waterfront walking trails and landscaped parks
                </li>
                <li>
                  <FaCheckCircle className="check-icon" />
                  30+ lifestyle amenities including Tower Top Restaurant, swimming pools, sports courts, organic farming & more
                </li>
              </ul>
            </Col>
            <Col xs={12} md={6}>
              <img
                src={clubhouse}
                className="img-fluid rounded"
                alt="Club House"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Highlights;
