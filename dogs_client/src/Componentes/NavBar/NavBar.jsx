import styled from "./NavBar.module.css";
import Boton from "../Boton/Boton.jsx";
import icon from "../../imagenes/dibujos de perros/icon.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className={styled.contenedor}>
      <Link to={"/"}>
        <img src={icon} alt="" className={styled.imagen} />
      </Link>
      <Link to={"/Home"}>
        <Boton string={"INICIO"} className={styled.inicio} />
      </Link>
      <Link to={"/Formulario"}>
        <Boton string={"AGREGAR PERRITO"} className={styled.agregar} />
      </Link>
    </div>
  );
}
