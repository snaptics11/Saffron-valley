import React from 'react';
import villaPlotImage from '../../assets/gallery4.jpg';
import treeIcon from '../../assets/tree-icon.png';
import locationIcon from '../../assets/location-icon.png';
import builderIcon from '../../assets/builder-icon.png';
import landIcon from '../../assets/land-icon.png';
import plotIcon from '../../assets/plot-icon.png';
import areaIcon from '../../assets/area-icon.png';
import amenitiesIcon from '../../assets/amenities-icon.png';

function About() {
  return (
    <div id="About project">
      <div className="px-3 px-sm-4 px-md-5 py-5" style={{ backgroundColor: '#d0e9fda5' }}>
        {/* Top Section */}
        <div className="row align-items-center gy-4">
          {/* Text Content */}
          <div className="col-12 col-md-6">
            <h1 className="fw-bold text-dark text-uppercase">Villas That Define Luxury and Serenity</h1>
            <p className="mt-4">
              Saffron Valley offers ready luxury villas in a premium gated community at Masaipet, Toopran.
              Surrounded by lush greenery and waterbodies, it is designed for those who seek peace, privacy,
              and world-class amenities just minutes from the city.
            </p>
            <ul className="list-unstyled mt-4">
              <li className="d-flex align-items-center mb-3">
                <img src={treeIcon} alt="Lifestyle Opportunity" className="me-3" style={{ width: '40px', height: '40px' }} />
                <span>A Lifestyle Beyond Ordinary</span>
              </li>
              <li className="d-flex align-items-center mb-3">
                <img src={locationIcon} alt="Well Connected Location" className="me-3" style={{ width: '40px', height: '40px' }} />
                <span>A Well-Connected Location</span>
              </li>
              <li className="d-flex align-items-center mb-3">
                <img src={builderIcon} alt="Trusted Developer" className="me-3" style={{ width: '40px', height: '40px' }} />
                <span>From a Trusted Real Estate Developer</span>
              </li>
            </ul>
          </div>

          {/* Image */}
          <div className="col-12 col-md-6 text-center">
            <img
              src={villaPlotImage}
              alt="Saffron Valley View"
              className="img-fluid rounded shadow"
              style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
            />
          </div>
        </div>

        {/* Statistics Section */}
        <div className="row mt-5 g-4 justify-content-center text-center">
          <div className="col-6 col-sm-6 col-md-3">
            <div className="p-3 border border-2 border-dark rounded-2 h-100">
              <img src={landIcon} alt="Acres" style={{ width: '40px', height: '40px' }} className="mb-2" />
              <div className="h4">18</div>
              <small className="text-muted">Acres</small>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-3">
            <div className="p-3 border border-2 border-dark rounded-2 h-100">
              <img src={plotIcon} alt="Villas" style={{ width: '40px', height: '40px' }} className="mb-2" />
              <div className="h4">76</div>
              <small className="text-muted">Villas</small>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-3">
            <div className="p-3 border border-2 border-dark rounded-2 h-100">
              <img src={areaIcon} alt="Sq. yds" style={{ width: '40px', height: '40px' }} className="mb-2" />
              <div className="h4">605</div>
              <small className="text-muted">Sq. yds. Each</small>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-3">
            <div className="p-3 border border-2 border-dark rounded-2 h-100">
              <img src={amenitiesIcon} alt="Clubhouse" style={{ width: '40px', height: '40px' }} className="mb-2" />
              <div className="h4">1.5</div>
              <small className="text-muted">Acre Clubhouse</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
