import styled from "./Cartas.module.css";
import Carta from "../Carta/Carta.jsx";

export default function Cartas(props) {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className={styled.contenedor}>
      {arr.map((element) => {
        return <Carta />;
      })}
    </div>
  );
}
