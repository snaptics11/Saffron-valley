import React, { useState } from 'react';
import './Contact.css'; // Import your CSS file
import { Container, Row, Col, Button, Form, Modal } from 'react-bootstrap';
import { BiX } from 'react-icons/bi'; // Using a Bootstrap Icon

const Contact = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [showSubmitPopup, setShowSubmitPopup] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        location: '',
    });

    const handleContactUsClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
        setShowSubmitPopup(true);
    };

    const handleCloseSubmitPopup = () => {
        setShowSubmitPopup(false);
        setShowPopup(false);
        setFormData({ name: '', mobile: '', location: '' });
    };

    return (
        <div id="Contact" className="py-5">
            <div>
                <Row className="bg-success text-white text-center py-md-5 py-3">
                    <Col>
                        <h2>Your Dream Villa at Saffron Valley is Just One Call Away!</h2>
                        <Button variant="light" className="mt-md-3 mt-2" onClick={handleContactUsClick}>
                            CONTACT US
                        </Button>
                    </Col>
                </Row>
                <Row className="py-md-5 py-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <Col md={6} className="offset-md-1 mt-md-0 mt-3">
                        <div className="card p-md-4 p-3">
                            <h3 className="text-center mb-md-4 mb-3">Contact Us</h3>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>Name*</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="mobile">
                                    <Form.Label>Mobile Number*</Form.Label>
                                    <Form.Control
                                        type="tel"
                                        placeholder="Mobile Number"
                                        value={formData.mobile}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="location">
                                    <Form.Label>Location</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Your Location"
                                        value={formData.location}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                                <div className="d-grid">
                                    <Button type="submit" variant="success">Submit</Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                    <Col md={4} className="mt-md-0 mt-3">
                        <div className="card p-md-4 p-3">
                            <iframe
                                title="Property Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30456.987654321!2d78.10243!3d16.50033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sWMF%20Peddyspelle%2C%20Telangana!5e0!3m2!1sen!2sus!4v1628787878787!5m2!1sen!2sus"
                                width="100%"
                                height="350"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </Col>
                </Row>
            </div>

            {/* Contact Details Popup */}
            <Modal show={showPopup} onHide={handleClosePopup} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Contact Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><strong>Email:</strong>  rvinfradevelopers2018@gmail.com</p>
                    <p><strong>Phone:</strong> +1 123 456 7890</p>
                    <p><strong>Address:</strong> My Home Hub, 7th Floor, Block 2, Madhapur, Hitechcity, Hyderabad, India</p>
                    <p><strong>Website:</strong><a href='https://myelegantgroup.com/index.html' target="_blank" rel="noopener noreferrer">My Elegant Group</a></p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClosePopup}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Submission Successful Popup */}
            <Modal show={showSubmitPopup} onHide={handleCloseSubmitPopup} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Submitted Successfully!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Thank you for your submission!</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleCloseSubmitPopup}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Contact;