import React from "react";
import "./About.css";
import construtionIcon from "../../assets/constrution-icon.png";
import tickIcon from "../../assets/tick.png";
import treeIcon from "../../assets/tree-icon.png";
import landIcon from "../../assets/land-icon.png";
import plotIcon from "../../assets/plot-icon.png";
import areaIcon from "../../assets/area-icon.png";
import amenitiesIcon from "../../assets/amenities-icon.png";
import villaPlotImage from "../../assets/gallery4.jpg";

function About() {
  const features = [
    { icon: treeIcon, text: "A Lifestyle Beyond Ordinary" },
    { icon: tickIcon, text: "A Well-Connected Location" },
    { icon: construtionIcon,text: "From a Trusted Real Estate Developer",},
  ];

  const stats = [
    { icon: landIcon, label: "Acres", value: "18" },
    { icon: plotIcon, label: "Villas", value: "76" },
    { icon: areaIcon, label: "Sq. yds", value: "605" },
    { icon: amenitiesIcon, label: "Acre Clubhouse & Amenities", value: "1.5" },
  ];

  return (
    <section id="About project" className="about-section">
      <div className="text-center mb-4">
        <h1 className="about-heading">
          VILLAS THAT DEFINE{" "}
          <span className="text-success">Luxury &amp; SERENITY</span>
        </h1>
        <p className="about-text">
          <strong>
            Ready Luxury Villas for Sale in Masaipet, Toopran – Saffron Valley
          </strong>
          <br />
          <br />
          Saffron Valley offers ready luxury villas in a premium gated community
          at Masaipet, Toopran. Surrounded by lush greenery and waterbodies,
          <br />
          it is designed for those who seek peace, privacy, and world-class
          amenities just minutes from the city.
        </p>
      </div>

      <div className="container">
        <div className="row align-items-center gy-5">
          {/* Features List */}
          <div className="col-12 col-md-6">
            <ul className="feature-list list-unstyled">
              {features.map((item, idx) => (
                <li key={idx}>
                  <img src={item.icon} alt="Feature Icon" />
                  <span className="feature-text">{item.text}</span><br/><br/>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="col-12 col-md-6 text-center d-flex align-items-center justify-content-center">
            <img
              src={villaPlotImage}
              alt="Villa Plot Aerial View"
              className="about-image"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="row stats-container g-4 justify-content-center text-center mt-3">
          {stats.map((stat, idx) => (
            <div key={idx} className="col-6 col-sm-6 col-md-3">
              <div className="stats-box bg-white">
                <img src={stat.icon} alt={stat.label} />
                <div className="stats-number">{stat.value}</div>
                <div className="stats-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
