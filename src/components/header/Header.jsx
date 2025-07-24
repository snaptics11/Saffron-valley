import './Header.css';
import backgroundImage from '../../assets/background1.jpg';

function Header() {
  return (
    <div
      id="Home"
      className="head-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '20px',
      }}
    >
      <div className="content-box">
        <h1>Ready to Build Lifestyle Villa Plots @ Shadnagar</h1>
        <p>1km from National Highway | 100-Acre Residential Community Under MUDA Limits</p>
        <h3>34 Acres | 322 Plots | 3.5 Acres of Amenities | 165-400 sq. yds</h3>
      </div>
    </div>
  );
}

export default Header;
