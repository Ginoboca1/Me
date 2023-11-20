import { useEffect, useState } from "react";
import "../styles/pages/Home.css";
import { Modal } from "../components/Modal";
import Portada from "../components/Portada";
import Testimonio from "../components/testimonio";
import { FaMapMarkerAlt } from "react-icons/fa";

function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const modalShown = sessionStorage.getItem("modalShown");

    if (!modalShown) {
      setShowModal(true);
      sessionStorage.setItem("modalShown", "true");
    }
  }, []);

  return (
    <div className="home-container">
      {showModal && <Modal setShowModal={setShowModal} />}
      <Portada menu="Home" projects="Projects" contact="Contact" />
      <h1 className="title">¿Who f#$& I am?</h1>
      <div className="aboutMe-container">
        <Testimonio
          name="Gino Boca"
          className="contenedor-testimonio"
          imagen="gino"
          job="Frontend Web Developer"
          description="Gino is a frontend web developer who specializes in React and has experience working with Node Frameworks like Express and databases like MongoDB. He is currently learning NestJS. He enjoys coffee, music, and cats"
        />

        <div className="ubication-container">
          <div className="country-container">
            <i className="map-icon">
              <FaMapMarkerAlt />
            </i>
            <p className="city">Funes, Argentina.</p>
          </div>
          <p className="text">
            I live in a small town 6km away from Rosario called Funes. A place
            with terrible internet and dirt roads, but I enjoy living life on
            the edge, so to hell with that..
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
