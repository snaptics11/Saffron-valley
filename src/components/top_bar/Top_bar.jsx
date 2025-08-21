import React from 'react';
import "./Top_bar.css";

function Top_bar() {
    return (
        <div className='Top_bar'>
            <header className="bg-success text-light text-center py-3">
                <div className="container d-flex justify-content-end align-items-end">
                    <div className="social ">
                        Follow Us:
                        <a href="https://www.facebook.com/profile.php?id=61578829793153#" className="mx-2" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/saffronvalley_sln/" className="mx-2" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/saffron-valley-farm-houses-and-resorts/?viewAsMember=true" className="mx-2" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-linkedin"></i>
                        </a>
                        <a href="https://youtube.com/@slnsaffronvalley?si=wsVG5bIcW02tbCWI" className="mx-2" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-youtube"></i>
                        </a>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Top_bar;
