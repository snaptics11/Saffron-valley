import "./Header.css";
import backgroundImage from "../../assets/1_00001.jpg";

function Header() {
  return (
    <section
      id="Home"
      className="head-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div className="content-box">
        <h1 className="headline">
          Luxury Resort-Style Villas @ Masaipet, Toopran
        </h1>
        <p className="subheadline">1 km from Haldi Reservoir</p>
        <p className="subheadline1">
          18-Acre Gated Community with World-Class Amenities
        </p>
        <p className="details">
          76 Villas &nbsp;|&nbsp; 605 sq. yds. Each &nbsp;|&nbsp; 1.5-Acre
          Clubhouse &nbsp;|&nbsp; Waterfront Walking Trails
        </p>
      </div>
    </section>
  );
}

export default Header;
