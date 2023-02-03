import styled from "./Carta.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import ImgPorDefault from "../../imagenes/dibujos de perros/descarga.png";

export default function Carta({ perro }) {
  const { ID, Nombre, PesoMaximo, PesoMinimo, Imagen, Temperamentos } = perro;

  const [imageSrc, setImageSrc] = useState(Imagen);

  return (
    <div className={`${styled.card} ${styled.contenedor}`}>
      <div className={styled.contenedorImg}>
        <img
          src={imageSrc}
          alt="Link no valido"
          onError={() => setImageSrc(ImgPorDefault)}
        />
      </div>

      <div className={styled.contenedorName}>{Nombre}</div>

      <div className={styled.contenedorPeso}>
        <div>Peso min-max (kg) </div>

        <div>{PesoMinimo}</div>
        <div>-</div>
        <div>{PesoMaximo}</div>
      </div>

      <div className={styled.contenedor3}>
        <h4>Temperamentos</h4>
        {Temperamentos.map((element) => {
          return <div className={styled.contTemp}>{element}</div>;
        })}
      </div>

      <Link to={`/Detalle/${ID}`}>
        <button className={styled.cardbutton}>Ver Raza</button>
      </Link>
    </div>
  );
}
