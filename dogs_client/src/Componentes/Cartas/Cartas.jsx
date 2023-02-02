import styled from "./Cartas.module.css";
import Carta from "../Carta/Carta.jsx";
import React, { useState } from "react";

export default function Cartas(props) {
  const arr = props.elementos;
  const [paginaActual, setPaginaActual] = useState(1);

  const indexUltimaCarta = paginaActual * 8;
  const indexPrimeraCarta = indexUltimaCarta - 8;
  const nuevoArr = arr.slice(indexPrimeraCarta, indexUltimaCarta);

  const paginas = [];
  const nPaginas = Math.ceil(arr.length / 8);

  for (let i = 1; i <= nPaginas; i++) {
    paginas.push(i);
  }

  const paginado = (pagina) => {
    setPaginaActual(pagina);
  };
  return (
    <div>
      <div className={styled.paginado}>
        <ul>
          {paginas.map((pagina) => {
            return <button onClick={() => paginado(pagina)}>{pagina}</button>;
          })}
        </ul>
      </div>

      <div className={styled.contenedor}>
        {nuevoArr.map((elemento) => {
          return <Carta perro={elemento} />;
        })}
      </div>

      <div className={styled.paginado}>
        <ul>
          {paginas.map((pagina) => {
            return <button onClick={() => paginado(pagina)}>{pagina}</button>;
          })}
        </ul>
      </div>
    </div>
  );
}
