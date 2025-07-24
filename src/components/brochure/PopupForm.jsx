import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './Brochure.css';

const PopupForm = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plotRange: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    const link = document.createElement('a');
    link.href = '../../assets/Galleria-Gardens-brochure.pdf';
    link.download = 'Urbanrise-Brochure.pdf';
    link.click();
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Book a Free Site Visit</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Select Your Plot Range</Form.Label>
            <Form.Select
              name="plotRange"
              value={formData.plotRange}
              onChange={handleChange}
              required
            >
              <option value="">Select Range</option>
              <option value="range1">165 - 200 Sq. Yds</option>
              <option value="range2">200 - 300 Sq. Yds</option>
              <option value="range3">300 - 400 Sq. Yds</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3 form-check">
            <Form.Check
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              label="I agree and authorize the team to contact me. This will override the registry with DNC / NDNC."
              required
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" type="submit">
            Download Brochure
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default PopupForm;
