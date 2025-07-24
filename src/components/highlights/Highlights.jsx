import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import './Highlights.css'; 
import clubhouse from "../../assets/clubhouse.png"; 

const Highlights = () => {
  return (
    <div id="Highlights">
      <div className="project py-5" style={{ backgroundColor: '#c3d7e99a' }}>
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} className="mb-4">
              <h1 className="section-title">PROJECT HIGHLIGHTS</h1>
              <ul className="custom-list">
                <li><FaCheckCircle style={{ color: '#059448', marginRight: '10px' }} /> Total land area of 88 acres</li>
                <li><FaCheckCircle style={{ color: '#059448', marginRight: '10px' }} /> Phase 1 – 34 acres</li>
                <li><FaCheckCircle style={{ color: '#059448', marginRight: '10px' }} /> Phase 1 – 322 Lifestyle Villa Plots</li>
                <li><FaCheckCircle style={{ color: '#059448', marginRight: '10px' }} /> Plot sizes ranging from 165 to 400 Sq. Yards</li>
                <li><FaCheckCircle style={{ color: '#059448', marginRight: '10px' }} /> Clubhouse with 3.5 acres of amenities</li>
                <li><FaCheckCircle style={{ color: '#059448', marginRight: '10px' }} /> White-topped roads (cement roads)</li>
                <li><FaCheckCircle style={{ color: '#059448', marginRight: '10px' }} /> Fully secured gated community</li>
                <li><FaCheckCircle style={{ color: '#059448', marginRight: '10px' }} /> 30+ lifestyle amenities</li>
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
