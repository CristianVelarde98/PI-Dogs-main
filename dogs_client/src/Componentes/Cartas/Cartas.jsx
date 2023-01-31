import styled from "./Cartas.module.css";
import Carta from "../Carta/Carta.jsx";

export default function Cartas(props) {
  const c = props.elementos;
  const arr = [];
  for (let i = 0; i < c; i++) {
    arr.push(i);
  }

  return (
    <div className={styled.contenedor}>
      {arr.map((element) => {
        return <Carta />;
      })}
    </div>
  );
}
