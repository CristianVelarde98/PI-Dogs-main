import styled from "./Landing.module.css";
import imagen from "../../imagenes/perros sonriendo/perros-sonrientes-portada.jpg";
import { Link } from "react-router-dom";
import Boton from "../../Componentes/Boton/Boton";

export default function Landing() {
  return (
    <div className={styled.contenedor}>
      <img src={imagen} alt="imagen"></img>
      <div className={styled.parrafo}>
        <h1>Hola, Bienvenidos a PERRITOS:</h1>
        <div>
          Esta es una aplicacion interactiva para ver y crear nuevas razas de
          perros, vas a poder ordenarlos de muchas formas y ver a detalle cada
          uno de los de ellos
        </div>
      </div>
      <div className={styled.contenedorBtn}>
        <Link to={"/Home"}>
          <Boton string={"Iniciar App"} />
        </Link>
      </div>
    </div>
  );
}
