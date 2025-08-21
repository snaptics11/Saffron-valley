import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal, Form } from "react-bootstrap";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Project_details.css";
import brochureFile from "../../assets/Saffron_Brochure_2025.pdf";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  plotRange: "",
  agree: false,
};

const ProjectDetails = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setFormData(initialForm);
    setShow(false);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.plotRange || !formData.agree) {
      alert("Please fill out all fields and accept the terms.");
      return;
    }

    setIsSubmitting(true);

    try {
      const isLocal = window.location.hostname === "localhost";
      const url = isLocal
        ? "http://localhost/Elegant-group/htdocs/backend/send-email.php"
        : "https://myelegantgroup.com/landing/send-email.php";

      const formBody = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        mobile: formData.phone,
        plotRange: formData.plotRange,
      });

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formBody,
      });

      const result = await response.text();

      if (result.trim().toLowerCase() === "success") {
        alert("Form submitted successfully! Your brochure is downloading...");

        // Download brochure
        const link = document.createElement("a");
        link.href = brochureFile;
        link.download = "Saffron_Brochure_2025.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Redirect
        navigate("/thank-you");
        handleClose();
      } else {
        alert("Submission failed: " + result);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Something went wrong. Please try again.");
    }

    setIsSubmitting(false);
  };

  const plotData = [
    { size: "G + 1 Villa (East) – 605 Sq. yds., 2035 s.ft" },
    { size: "G + 1 Villa (West) – 605 Sq. yds., 1950 s.ft" },
    { size: "Ground Floor Farm Villa (East & West) – 605 Sq. yds., 900 s.ft" },
  ];

  return (
    <div className="future-section py-5 px-3">
      <Container className="text-center">
        <h2 className="section-title  mb-4">The Future is Here</h2>
        <Row className="justify-content-center">
          {plotData.map((plot, index) => (
            <Col key={index} lg={3} md={4} sm={6} xs={12} className="mb-4">
              <Card className="glass-card text-dark h-100 shadow-sm">
                <Card.Body>
                  <FaMapMarkerAlt size={30} className="mb-2 text-success" />
                  <Card.Title>{plot.size}</Card.Title>
                  <Button variant="success" className="mt-2" onClick={handleShow}>
                    Unlock Price
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal Form */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Download Brochure</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                pattern="[0-9]{10}"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your 10-digit phone number"
              />
              <Form.Text className="text-muted">Numbers only, no country code.</Form.Text>
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
                <option value="165 - 200 Sq. Yds">165 - 200 Sq. Yds</option>
                <option value="200 - 300 Sq. Yds">200 - 300 Sq. Yds</option>
                <option value="300 - 400 Sq. Yds">300 - 400 Sq. Yds</option>
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
            <Button variant="success" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Download"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default ProjectDetails;
