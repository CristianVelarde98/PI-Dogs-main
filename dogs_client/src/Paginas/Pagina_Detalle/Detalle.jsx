import styled from "./Detalle.module.css";
import NavBar from "../../Componentes/NavBar/NavBar";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import * as actions from "../../Redux/actions/actions.js";
import Loading from "../Loading/Loading.jsx";

export default function Detalle() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [info, setInfo] = useState(false);
  const perro = useSelector((state) => {
    return state.detalle;
  });

  let nombre;
  let altura;
  let peso;
  let expectativa;
  let imagen;
  let temperamentos;

  useEffect(() => {
    if (!perro.length) {
      dispatch(actions.getDetalle(id));
    } else setInfo(perro[0]);
  }, [perro]);

  if (!info) return <Loading />;
  if (!!info) {
    console.log("hay info");
  }

  return (
    <div className={styled.contenedor}>
      <NavBar />
      <h1>{`Estoy en la pagina Detalle con el id: ${id}`}</h1>
    </div>
  );
}
