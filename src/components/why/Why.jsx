import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import Savings from '../../assets/savings.png';

const Why = () => {
  return (
    <div id='why'>
      <div className="py-5" style={{ backgroundColor: '#e0e9c39a' }}>
        <Container>
          <Row className="align-items-center g-4">
            {/* Image Column */}
            <Col xs={12} md={6} className="text-center">
              <img
                src={Savings}
                className="img-fluid rounded shadow"
                alt="Saffron Valley"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Col>

            {/* Text Column */}
            <Col xs={12} md={6}>
              <h2 className="fw-bold mb-2">WHY SAFFRON VALLEY?</h2>
              <h5 className="mb-4 text-muted">A Premium Luxury Villa Community</h5>
              <ul className="list-unstyled">
                {[
                  'Safe, Secure & Fully Gated with 24/7 Digital Security',
                  'Located in Fast-Growing Masaipet @ Toopran',
                  'Excellent Connectivity: 1 km from Haldi Reservoir & 2 km from NH44',
                  'Serene Waterfront Living with Landscaped Parks',
                  '30+ World-Class Lifestyle Amenities',
                  '3 Villa Types: Kerala-inspired Ground Floor Farm Villas & European-inspired Duplex Villas (East & West)',
                ].map((item, index) => (
                  <li key={index} className="mb-3 d-flex align-items-start">
                    <FaCheckCircle
                      size={20} // fixed icon size for consistency
                      style={{
                        color: '#008000', // green color
                        flexShrink: 0, // prevent shrinking
                        marginRight: '10px',
                        marginTop: '2px'
                      }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Why;
