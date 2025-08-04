import React, { useState } from "react";
import brochureFile from "../../assets/Galleria-Gardens-brochure.pdf";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    plotRange: "",
    agree: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Form Data:", formData);
      const link = document.createElement("a");
      link.href = brochureFile;
      link.download = "Urbanrise_Brochure.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setFormData({
        name: "",
        email: "",
        mobile: "",
        plotRange: "",
        agree: false,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionError(
        "Failed to process your request. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-5 px-3" style={{ backgroundColor: "#b2ffa7cf" }}>
      <div className="container">
        <div className="row g-5 align-items-center">
          {/* Form Column */}
          <div className="col-12 col-md-6 col-lg-5">
            <div className="bg-light px-4 px-md-5 py-5 rounded shadow">
              <h2 className="mb-4 text-center">Download Brochure</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="form-label">
                    Name*
                  </label>
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
                  <label htmlFor="email" className="form-label">
                    Email ID*
                  </label>
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
                  <label htmlFor="mobile" className="form-label">
                    Mobile Number*
                  </label>
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
                  <label htmlFor="plotRange" className="form-label">
                    Select Your Villa Type
                  </label>
                  <select
                    className="form-select"
                    id="plotRange"
                    name="plotRange"
                    value={formData.plotRange}
                    onChange={handleChange}
                  >
                    <option value="">Select Your Villa Type</option>
                    <option value="G + 1 Villa (East)">G + 1 Villa (East)</option>
                    <option value="G + 1 Villa (West)">G + 1 Villa (West)</option>
                    <option value="Ground Floor Farm Villa (East & West)">Ground Floor Farm Villa (East & West)</option>
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
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>

          {/* Description Column */}
          <div className="col-12 col-md-6 col-lg-6 offset-lg-1">
            <div className="pt-3 pt-md-0">
              <h2
                className="text-uppercase fw-bold mb-4"
                style={{ color: "#000" }}
              >
                Live Your Luxury Resort Life, Everyday
              </h2>
              <p style={{ fontSize: "18px" }}>
                Saffron Valley is a premium gated villa community at Masaipet,
                Toopran — a fast-growing neighbourhood near Hyderabad. Spread
                across 18 acres, the project offers 76 ready luxury villas
                designed for nature-inspired living with world-class amenities.
                Located just 1 km from Haldi Reservoir and 2 km from NH44,
                Saffron Valley combines excellent connectivity with unmatched
                serenity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
