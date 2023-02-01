import styled from "./Detalle.module.css";
import NavBar from "../../Componentes/NavBar/NavBar";
import { useParams } from "react-router-dom";

export default function Detalle() {
  const { id } = useParams();

  return (
    <div className={styled.contenedor}>
      <NavBar />
      <h1>{`Estoy en la pagina Detalle con el id: ${id}`}</h1>
    </div>
  );
}
