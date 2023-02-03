import styled from "./Detalle.module.css";
import NavBar from "../../Componentes/NavBar/NavBar";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import * as actions from "../../Redux/actions/actions.js";
import Loading from "../Loading/Loading.jsx";
import ImgPorDefault from "../../imagenes/dibujos de perros/descarga.png";

export default function Detalle() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const perro = useSelector((state) => {
    return state.detalle;
  });
  const [info, setInfo] = useState(false);
  const [imageSrc, setImageSrc] = useState(ImgPorDefault);

  useEffect(() => {
    if (!perro.length || perro[0].ID !== id) {
      dispatch(actions.getDetalle(id));
    }
  }, []);

  useEffect(() => {
    if (perro.length && perro[0].ID == id) {
      setInfo(true);
      setImageSrc(perro[0].Imagen);
    }
  }, [perro, id]);

  if (!info) return <Loading />;

  const Nombre = perro[0].Nombre;
  const altura = `${perro[0].AlturaMinima} - ${perro[0].AlturaMaxima}`;
  const peso = `${perro[0].PesoMinimo} - ${perro[0].PesoMaximo}`;
  const expectativa = `${perro[0].ExpectativaDeVidaMinima} - ${perro[0].ExpectativaDeVidaMaxima}`;
  const temperamentos = perro[0].Temperamentos;

  return (
    <>
      <NavBar />
      <div className={styled.contenedor}>
        <div className={`${styled.card} `}>
          <div className={styled.contenedorImg}>
            <img
              src={imageSrc}
              alt="Link no valido"
              onError={() => setImageSrc(ImgPorDefault)}
            />
          </div>

          <div className={styled.contenedorName}>
            <div>Raza: </div>
            <div>{Nombre}</div>
          </div>

          <div className={styled.contenedorPeso}>
            <div>Peso min-max (kg): </div>
            <div>{peso}</div>
          </div>

          <div className={styled.contenedorAltura}>
            <div>Altura min-max (cm): </div>
            <div>{altura}</div>
          </div>

          <div className={styled.contenedorAños}>
            <div>Expectativa de vida (años):</div>
            <div>{expectativa}</div>
          </div>

          <div className={styled.contenedor3}>
            <h4>Temperamentos</h4>
            {temperamentos.map((element) => {
              return <div className={styled.contTemp}>{element}</div>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
