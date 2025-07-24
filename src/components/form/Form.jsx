import React, { useState } from 'react';
import brochureFile from '../../assets/Galleria-Gardens-brochure.pdf';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    plotRange: '',
    agree: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionError('');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log('Form Data:', formData);
      const link = document.createElement('a');
      link.href = brochureFile;
      link.download = 'Urbanrise_Brochure.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setFormData({ name: '', email: '', mobile: '', plotRange: '', agree: false });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionError('Failed to process your request. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-5 px-3" style={{ backgroundColor: '#b2ffa7cf' }}>
      <div className="container">
        <div className="row g-5 align-items-center">
          {/* Form Column */}
          <div className="col-12 col-md-6 col-lg-5">
            <div className="bg-light px-4 px-md-5 py-5 rounded shadow">
              <h2 className="mb-4 text-center">Download Brochure</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="form-label">Name*</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">Email ID*</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="mobile" className="form-label">Mobile Number*</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="plotRange" className="form-label">Select Your Plot Range</label>
                  <select
                    className="form-select"
                    id="plotRange"
                    name="plotRange"
                    value={formData.plotRange}
                    onChange={handleChange}
                  >
                    <option value="">Select Range</option>
                    <option value="range1">165 - 200 Sq. Yds</option>
                    <option value="range2">200 - 300 Sq. Yds</option>
                    <option value="range3">300 - 400 Sq. Yds</option>
                  </select>
                </div>
                <div className="mb-4 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="agree"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="agree">
                    I agree and authorize the team to contact me. This will override the registry with DNC / NDNC.
                  </label>
                </div>
                {submissionError && (
                  <div className="alert alert-danger">{submissionError}</div>
                )}
                <button
                  type="submit"
                  className="btn btn-outline-success w-100"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>

          {/* Description Column */}
          <div className="col-12 col-md-6 col-lg-6 offset-lg-1">
            <div className="pt-3 pt-md-0">
              <h2 className="text-uppercase fw-bold mb-4" style={{ color: '#000' }}>
                Build Your Dream Villa for the Future
              </h2>
              <p style={{ fontSize: '18px' }}>
                Urbanrise Galleria Gardens, a luxury villa plots project at the high-growth corridor,
                is located on the Hyderabad - Bangalore Highway. Shadnagar is the fastest growing
                real estate opportunity around Hyderabad. Own your villa plot in the premium gated
                community, just adjacent to the proposed RRR. MUDA & DTCP-approved villa plots at
                Shadnagar. Buy now & witness ultimate appreciation in the future!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
