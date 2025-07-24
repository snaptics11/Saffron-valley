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
            <h1 className="fw-bold text-dark text-uppercase">Villa Plots that bring you pride and fulfillment</h1>
            <p className="mt-4">
              Luxury Villa Plots for Sale in Shadnagar - Nestled in the
              embrace of nature, Urbanrise Galleria Gardens is a luxurious
              villa plots for sale near Hyderabad; perfectly situated in a
              strategic location. Here, within this idyllic landscape, envision
              crafting your dream villa plot, a sanctuary that embodies
              both peace and security. Come, explore this open plots sale
              in Shadnagar, Hyderabad.
            </p>
            <ul className="list-unstyled mt-4">
              <li className="d-flex align-items-center mb-3">
                <img src={treeIcon} alt="Lifestyle Opportunity" className="me-3" style={{ width: '40px', height: '40px' }} />
                <span>A Lifestyle Opportunity</span>
              </li>
              <li className="d-flex align-items-center mb-3">
                <img src={locationIcon} alt="Well Developed Location" className="me-3" style={{ width: '40px', height: '40px' }} />
                <span>A Well Developed Location</span>
              </li>
              <li className="d-flex align-items-center mb-3">
                <img src={builderIcon} alt="Real Estate Developer" className="me-3" style={{ width: '40px', height: '40px' }} />
                <span>From South India's Largest Real Estate Developer</span>
              </li>
            </ul>
          </div>

          
          <div className="col-12 col-md-6 text-center">
            <img
              src={villaPlotImage}
              alt="Villa Plot Aerial View"
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
              <div className="h4">34</div>
              <small className="text-muted">Acres</small>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-3">
            <div className="p-3 border border-2 border-dark rounded-2 h-100">
              <img src={plotIcon} alt="Plots" style={{ width: '40px', height: '40px' }} className="mb-2" />
              <div className="h4">322</div>
              <small className="text-muted">Plots</small>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-3">
            <div className="p-3 border border-2 border-dark rounded-2 h-100">
              <img src={areaIcon} alt="Sq. yds" style={{ width: '40px', height: '40px' }} className="mb-2" />
              <div className="h4">165–400</div>
              <small className="text-muted">Sq. yds</small>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-3">
            <div className="p-3 border border-2 border-dark rounded-2 h-100">
              <img src={amenitiesIcon} alt="Amenities" style={{ width: '40px', height: '40px' }} className="mb-2" />
              <div className="h4">3.5</div>
              <small className="text-muted">Acre of Amenities</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
