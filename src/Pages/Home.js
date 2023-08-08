import { useEffect, useState } from "react";
import { Modal } from "../components/Modal";
import Portada from "../components/Portada";
import Testimonio from "../components/testimonio";
import Ubicacion from "../components/Ubicacion";

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
    <div>
      {showModal && <Modal setShowModal={setShowModal} />}
      <Portada menu="Home" proyectos="Proyectos" contacto="Repositorio" />
      <h1 className="title">¿Quien soy?</h1>
      <Testimonio
        name="Gino Boca"
        imagen="gino"
        job="Frontend Web Developer"
        description="Hola! mi nombre es Gino. Soy Frontend Web Developer, diseño Web Responsives y me especializo en React. Disfruto mucho del cafe, la musica, y me gustan los gatos. No, en serio. Amo los gatos."
      />
      <Ubicacion />
    </div>
  );
}

export default Home;
