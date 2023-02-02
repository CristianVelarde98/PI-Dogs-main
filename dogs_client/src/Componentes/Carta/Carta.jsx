import styled from "./Carta.module.css";
import { Link } from "react-router-dom";
import ImgPorDefault from "../../imagenes/dibujos de perros/descarga.png";

export default function Carta({ perro }) {
  const { ID, Nombre, PesoMaximo, PesoMinimo, Imagen, Temperamentos } = perro;

  return (
    <div className={`${styled.card} ${styled.contenedor}`}>
      <div className={styled.contenedorImg}>
        {Imagen ? (
          <img src={Imagen} alt="Link no valido" />
        ) : (
          <img src={ImgPorDefault} />
        )}
      </div>

      <div className={styled.contenedorName}>{Nombre}</div>

      <div className={styled.contenedorPeso}>
        <div>{PesoMinimo}</div>
        <div>{PesoMaximo}</div>
      </div>

      <div className={styled.contenedor3}>
        {Temperamentos.map((element) => {
          return <div className={styled.contTemp}>{element}</div>;
        })}
      </div>

      <Link to={`/Detalle/${ID}`}>
        <button className={styled.cardbutton}>Ver Perrito</button>
      </Link>
    </div>
  );
}
