import styled from "./Cartas.module.css";
import Carta from "../Carta/Carta.jsx";

export default function Cartas(props) {
  const arr = props.elementos.slice(0, 8);

  return (
    <div className={styled.contenedor}>
      {arr.map((elemento) => {
        return <Carta perro={elemento} />;
      })}
    </div>
  );
}
