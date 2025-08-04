import React, { useState } from 'react';
import { Accordion, Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import './LocationHighlights.css';
import mapImage from '../../assets/locationmap.jpg';

const LocationHighlights = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const brochureUrl = '../../assets/Galleria-Gardens-brochure.pdf';
    const link = document.createElement('a');
    link.href = brochureUrl;
    link.download = 'brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowModal(false);
  };

  return (
    <div id="location-highlights" className="py-5" style={{ backgroundColor: 'beige' }}>
      <Container>
        <h2 className="fw-bold mb-4 text-center">LOCATION HIGHLIGHTS</h2>
        <p className="text-muted text-center mb-5" style={{ fontSize: '1.25rem' }}>
          When it comes to land, location is everything. Saffron Valley is a premium luxury villa community located at Masaipet @ Toopran, one of the fastest-growing neighbourhoods near Hyderabad.
        </p>

        <Row className="g-4 align-items-start">
          {/* Accordion Section */}
          <Col xs={12} md={6}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Major Landmarks</Accordion.Header>
                <Accordion.Body>
                  <ul className="list-unstyled mb-0">
                    {[
                      ['Haldi Reservoir', '1 KM'],
                      ['NH44', '2 KM'],
                      ['Regional Ring Road (RRR)', '3 KM'],
                      ['Toopran', '8 KM'],
                      ['Outer Ring Road (ORR)', '30 KM'],
                      ['Kompally', '45 KM'],
                    ].map(([place, distance], i) => (
                      <li key={i} className="d-flex justify-content-between py-1">
                        <span>{place}</span>
                        <span className="text-success fw-semibold">{distance}</span>
                      </li>
                    ))}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <div className="mt-3 d-flex justify-content-center justify-content-md-center">
              <Button variant="success" className="px-4 py-2" onClick={() => setShowModal(true)}>
                ENQUIRE NOW
              </Button>
            </div>
          </Col>

          {/* Map & Enquiry Button */}
          <Col xs={12} md={6}>
            <img src={mapImage} alt="map" className="img-fluid rounded shadow-sm w-100" />
            
          </Col>
        </Row>
      </Container>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Enquire & Download Brochure</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>

            <Form.Group controlId="formPhone" className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="tel" placeholder="Enter your phone number" required />
            </Form.Group>

            <Button variant="success" type="submit" className="w-100">
              Submit & Download
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default LocationHighlights;
