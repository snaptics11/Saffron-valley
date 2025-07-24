import React, { useState } from 'react';
import Masterplan from '../../assets/MasterPlan.jpg';
import social1 from '../../assets/gallery/social-zone/social-one.jpg';
import social2 from '../../assets/gallery/social-zone/social-two.jpg';
import social3 from '../../assets/gallery/social-zone/social-three.jpg';
import active1 from '../../assets/gallery/active-zone/active-one.jpg';
import active2 from '../../assets/gallery/active-zone/active-two.jpg';
import active3 from '../../assets/gallery/active-zone/active-three.jpg';
import green1 from '../../assets/gallery/green-zone/green-one.jpg';
import green2 from '../../assets/gallery/green-zone/green-two.jpg';
import green3 from '../../assets/gallery/green-zone/green-three.jpg';
import other1 from '../../assets/gallery/other-zone/other-one.jpg';
import other2 from '../../assets/gallery/other-zone/other-two.jpg';
import other3 from '../../assets/gallery/other-zone/other-three.jpg';

const galleryData = {
  'SOCIAL ZONE': [
    { src: social1, alt: 'Social 1' },
    { src: social2, alt: 'Social 2' },
    { src: social3, alt: 'Social 3' },
  ],
  'ACTIVE ZONE': [
    { src: active1, alt: 'Active 1' },
    { src: active2, alt: 'Active 2' },
    { src: active3, alt: 'Active 3' },
  ],
  'GREEN ZONE': [
    { src: green1, alt: 'Green 1' },
    { src: green2, alt: 'Green 2' },
    { src: green3, alt: 'Green 3' },
  ],
  'OTHER AMENITIES': [
    { src: other1, alt: 'Other 1' },
    { src: other2, alt: 'Other 2' },
    { src: other3, alt: 'Other 3' },
  ],
};

const Gallery = () => {
  const [activeZone, setActiveZone] = useState('SOCIAL ZONE');
  const zones = Object.keys(galleryData);

  return (
    <div id="Gallery">
    <div className="bg-light py-5 text-center">
      <h2 className="fw-bold display-5 mb-4 text-uppercase">Gallery</h2>


      <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
        {zones.map((zone) => (
          <button
            key={zone}
            onClick={() => setActiveZone(zone)}
            className={`btn ${activeZone === zone ? 'btn-success' : 'btn-outline-success'}`}
          >
            {zone}
          </button>
        ))}
      </div>

     
      <div className="container mb-5">
        <div className="row g-4">
          {galleryData[activeZone].map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card shadow h-100">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="card-img-top"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      
      {/* <div className="container mt-5 text-center">
        <h2 className="fw-bold display-6 mb-3">MASTER PLAN</h2>
        <p className="text-muted fs-5 mb-4">
          Urbanrise Galleria Gardens is a community of meticulously crafted luxury villa plots for sale in Shadnagar. Every feature of this community is crafted to enhance the enduring value the future. Explore the master plan of this community and buy open plots sale in Shadnagar, where thoughtful planning meets timeless appeal!
        </p>
        <img
          src={Masterplan}
          alt="Master Plan"
          className="img-fluid rounded shadow"
          style={{ maxHeight: '500px', width: '80%', }}
        />
      </div> */}
    </div>
    </div>
  );
};

export default Gallery;
