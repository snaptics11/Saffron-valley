import "./Header.css";
import backgroundImage from "../../assets/background1.jpg";

function Header() {
  return (
    <div
      id="Home"
      className="head-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "20px",
      }}
    >
      <div className="content-box">
        <h1>Luxury Resort-Style Villas @ Masaipet, Toopran</h1>
        <p>
          1 km from Haldi Reservoir | 18-Acre Gated Community with World-Class
          Amenities
        </p>
        <h3>
          76 Villas | 605 sq. yds. Each | 1.5-Acre Clubhouse | Waterfront
          Walking Trails
        </h3>
      </div>
    </div>
  );
}

export default Header;
