import styled from "./Carta.module.css";
import { Link } from "react-router-dom";
import ImgPorDefault from "../../imagenes/dibujos de perros/descarga.png";

export default function Carta({ perro }) {
  const { ID, Nombre, PesoMaximo, PesoMinimo, Imagen, Temperamentos } = perro;
  console.log(Imagen);

  return (
    <div className={`${styled.card} ${styled.contenedor}`}>
      <div className={`${styled.carddetails}`}></div>
      <div className={styled.contenedorImg}>
        {Imagen ? (
          <img src={Imagen} alt="Link no valido" />
        ) : (
          <img src={ImgPorDefault} />
        )}
      </div>

      <div>{Nombre}</div>

      <div>
        <div>{PesoMinimo}</div>
        <div>{PesoMaximo}</div>
      </div>

      <div className={styled.contenedor3}>
        {Temperamentos.map((element) => {
          return <div>{element}</div>;
        })}
      </div>

      <Link to={`/Detalle/${ID}`}>
        <button className={styled.cardbutton}>Ver Perrito</button>
      </Link>
    </div>
  );
}
