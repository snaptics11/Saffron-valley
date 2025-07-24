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
          When it comes to land, location is everything. Urbanrise Galleria Gardens is a community of premium villa plots in Shadnagar, one of Hyderabad's fastest-growing hubs.
        </p>

        <Row className="g-4 align-items-start">
          {/* Accordion Section */}
          <Col xs={12} md={6}>
            <Accordion defaultActiveKey="0">
              {[
                {
                  key: '0',
                  title: 'Major Land Marks',
                  items: [
                    ['Wipro', '30 MIN'],
                    ['Electronic City', '30 MIN'],
                    ['Financial District', '48 MIN'],
                    ['Gachibowli', '50 MIN'],
                    ['Adibatla', '50 MIN'],
                  ],
                },
                {
                  key: '1',
                  title: 'Education',
                  items: [
                    ['Delhi World School Shadnagar', '20 MIN'],
                    ['Oxford High School Shadnagar', '20 MIN'],
                    ['Vivekananda Degree College, Shadnagar', '20 MIN'],
                    ['NMIMS, Jadcherla', '20 MIN'],
                    ['Symbiosys University, Kothur', '30 MIN'],
                  ],
                },
                {
                  key: '2',
                  title: 'Hospitals',
                  items: [
                    ['Kritika Hospitals, Shadnagar', '30 MIN'],
                    ['Vijayajyothi Multi specialty Hospital, Shadnagar', '30 MIN'],
                    ['ABV Multi Speciality Hospital, Shadnagar', '48 MIN'],
                  ],
                },
                {
                  key: '3',
                  title: 'Connectivity',
                  items: [
                    ['Proposed Regional Ring Road', '30 MIN'],
                    ['Shamshabad Airport', '30 MIN'],
                    ['Outer Ring Road', '48 MIN'],
                  ],
                },
                {
                  key: '4',
                  title: 'Weekend Gateways',
                  items: [
                    ['Statue of Equality', '30 MIN'],
                    ['Kanha Shanti Vanam - World Peace Centre', '30 MIN'],
                    ['Wonderla', '48 MIN'],
                    ['JP Dargah', '50 MIN'],
                  ],
                },
              ].map(({ key, title, items }) => (
                <Accordion.Item eventKey={key} key={key}>
                  <Accordion.Header>{title}</Accordion.Header>
                  <Accordion.Body>
                    <ul className="list-unstyled mb-0">
                      {items.map(([name, time], i) => (
                        <li key={i} className="d-flex justify-content-between py-1">
                          <span>{name}</span>
                          <span className="text-success fw-semibold">{time}</span>
                        </li>
                      ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>

          {/* Map & Enquiry Button */}
          <Col xs={12} md={6}>
            <img src={mapImage} alt="map" className="img-fluid rounded shadow-sm w-100" />
            <div className="mt-3 d-flex justify-content-center justify-content-md-start">
              <Button variant="success" className="px-4 py-2" onClick={() => setShowModal(true)}>
                ENQUIRE NOW
              </Button>
            </div>
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
