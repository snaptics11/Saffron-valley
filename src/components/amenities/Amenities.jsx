import React from 'react';
import './Amenities.css'; 

// Import icons/images
import amphitheatreIcon from '../../assets/amenities1.jpg'; 
import boxCricketIcon from '../../assets/amenities2.jpg';
import basketBallIcon from '../../assets/amenities3.jpg';
import boxFootBallIcon from '../../assets/amenities4.jpg';
import btRoadsIcon from '../../assets/amenities5.jpg';
import cctvSurveillanceIcon from '../../assets/amenities6.jpg';
import cyclingtrackIcon from "../../assets/amenities7.jpg"
import ArcIcon from "../../assets/amenities8.jpg";
import KidsplayareaIcon from "../../assets/amenities9.jpg";
import MultipurposestadiumIcon from "../../assets/amenities10.jpg";
import PlayzoneIcon from "../../assets/amenities11.jpg";
import SandvolleyballIcon from "../../assets/amenities12.jpg";
import SkatingrinkIcon from "../../assets/amenities13.jpg";
import TenniscourtIcon from "../../assets/amenities15.jpg";
import WatertankIcon from "../../assets/amenities16.jpg";
import GymIcon from "../../assets/dumbbell.jpg";
import CameraIcon from "../../assets/camera.jpg";
import TheaterIcon from "../../assets/theater.jpg";
import NationalparkIcon from "../../assets/national-park.jpg";
import FarmlandIcon from "../../assets/farmland.jpg";
import ChildernparkIcon from "../../assets/childernpark.jpg";

const Amenities = () => {
  const amenitiesData = [
    { icon: amphitheatreIcon, title: 'Tower Top Restaurant' },
    { icon: boxCricketIcon, title: '2 Swimming Pools' },
    { icon: basketBallIcon, title: 'Banquet Hall' },
    { icon: boxFootBallIcon, title: 'Fine Dine Restaurant' },
    { icon: btRoadsIcon, title: 'Tennis Court' },
    { icon: cctvSurveillanceIcon, title: 'Cricket / Football Turf' },
    { icon: cyclingtrackIcon, title: 'Basketball Court' },
    { icon: SandvolleyballIcon, title: 'Beach Volleyball' },
    { icon: cctvSurveillanceIcon, title: 'Wi-Fi Enabled Clubhouse' },
    { icon: MultipurposestadiumIcon, title: 'Indoor & Outdoor Games' },
    { icon: PlayzoneIcon, title: 'Yoga Room' },
    { icon: GymIcon, title: 'State-of-the-Art Gym' },
    { icon: SkatingrinkIcon, title: 'Guest Rooms' },
    { icon: TenniscourtIcon, title: 'Walking & Jogging Tracks' },
    { icon: ChildernparkIcon, title: 'Children’s Play Parks' },
    { icon: NationalparkIcon, title: 'Landscaped Parks' },
    { icon: TheaterIcon, title: 'Open Air Theatre' },
    { icon: CameraIcon, title: '24/7 Digital Security & Solar Fencing' },
    { icon: FarmlandIcon, title: 'Organic Farming Arena' },
  ];

  return (
    <section id="Amenities" className="amenities-section">
      <div className="container">
        <h2 className="text-center mb-3">AMENITIES</h2>
        <p className="text-center">
          Unparalleled Amenities, Elevating Your Lifestyle to Extraordinary Heights!
        </p>
        <div className="row g-4 justify-content-center">
          {amenitiesData.map((amenity, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 d-flex">
              <div className="amenity-card w-100">
                <img src={amenity.icon} alt={amenity.title} className="amenity-icon" />
                <p className="amenity-title">{amenity.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
