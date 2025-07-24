import { useState, useEffect } from "react";
import PopupForm from "./PopupForm";
import "./Brochure.css";
const Brochure = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <div className="side-button" onClick={handleShow}>
        Book Free Site Visit
      </div>
      <PopupForm show={show} handleClose={handleClose} />
    </>
  );
};
export default Brochure;
