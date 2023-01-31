import styled from "./Nuevo.module.css";
import NavBar from "../../Componentes/NavBar/NavBar";
import Boton from "../../Componentes/Boton/Boton";
import imagen from "../../imagenes/dibujos de perros/descarga.png";
import DispTemps from "../../Componentes/DispTemps/DispTemps";
import validaciones from "./validaciones.js";
import { useState } from "react";

export default function Nuevo() {
  const [mostrarTemps, setMostrarTemps] = useState([]);
  const [nuevoTemp, setNuevoTemp] = useState("");
  const [unaImg, setUnaImg] = useState(<img src={imagen} alt="" />);
  const [dogData, setDogData] = useState({
    Nombre: "",
    Edad: "",
    AlturaMaxima: "",
    AlturaMinima: "",
    PesoMaximo: "",
    PesoMinimo: "",
  });
  const [errores, setErrores] = useState({
    Nombre: "",
    Edad: "",
    AlturaMaxima: "",
    AlturaMinima: "",
    PesoMaximo: "",
    PesoMinimo: "",
  });

  const handlerInput = (evento) => {
    const propiedad = evento.target.name;
    const valor = evento.target.value;

    setDogData({ ...dogData, [propiedad]: valor });

    setErrores(validaciones({ ...dogData, [propiedad]: valor }));
  };
  console.log(errores);

  const unaImag = (event) => {
    const regex = /\.(jpg|png)$/i;
    const algo = event.target.value;
    if (!algo.length || !regex.test(algo)) setUnaImg(<img src={imagen} />);
    else setUnaImg(<img src={`${algo}`} alt="No es un link valido" />);
  };

  const sacar = (evento, elemento) => {
    setMostrarTemps(mostrarTemps.filter((temp) => temp != elemento));
  };

  const otroTemp = (event) => {
    setNuevoTemp(`${event.target.value}`);
  };

  const agregarTemp = () => {
    const temp = nuevoTemp;
    if (temp != "NONE" && temp.length) {
      if (!mostrarTemps.includes(temp))
        setMostrarTemps([...mostrarTemps, temp]);
    }
    setNuevoTemp("");
  };

  return (
    <div>
      <NavBar />
      <div className={styled.contenedor}>
        <div className={styled.formulario}>
          <div className={styled.imgPorDef}>{unaImg}</div>

          <input
            onChange={handlerInput}
            value={dogData.Nombre}
            name="Nombre"
            placeholder="Nombre"
            type="text"
            className={`${styled.input} ${styled.nombre}`}
          ></input>

          <input
            onChange={handlerInput}
            value={dogData.AlturaMaxima}
            name="AlturaMaxima"
            placeholder="Altura Maxima"
            type="number"
            className={`${styled.input} ${styled.alturaMax}`}
          ></input>

          <input
            onChange={handlerInput}
            value={dogData.AlturaMinima}
            name="AlturaMinima"
            placeholder="Altura Minima"
            type="number"
            className={`${styled.input} ${styled.alturaMin}`}
          ></input>

          <input
            onChange={handlerInput}
            value={dogData.PesoMaximo}
            name="PesoMaximo"
            placeholder="Peso Maximo"
            type="number"
            className={`${styled.input} ${styled.pesoMax}`}
          ></input>

          <input
            onChange={handlerInput}
            value={dogData.PesoMinimo}
            name="PesoMinimo"
            placeholder="Peso Minimo"
            type="number"
            className={`${styled.input} ${styled.pesoMin}`}
          ></input>

          <input
            onChange={handlerInput}
            value={dogData.Edad}
            name="Edad"
            placeholder="Edad"
            type="number"
            className={`${styled.input} ${styled.años}`}
          ></input>

          <input
            onChange={(e) => unaImag(e)}
            placeholder="Link de la imagen  (debe terminar en png o jpg)"
            type="text"
            className={`${styled.input} ${styled.imagen}`}
          ></input>

          <div className={styled.contenedor2}>
            <div className={styled.titulo}>Temperamentos </div>

            <div className={styled.exist}>Existentes: </div>
            <div className={styled.disp}>
              <DispTemps estado={setMostrarTemps} actual={mostrarTemps} />
            </div>

            <div className={styled.nuevo}>Nuevo: </div>
            <input
              onChange={(e) => otroTemp(e)}
              value={nuevoTemp}
              type="text"
              placeholder="Añadir Temperamento"
              className={`${styled.input} ${styled.nuevoTemp}`}
            />
            <div className={styled.botonTemp}>
              <button onClick={agregarTemp}>Agregar</button>
            </div>

            <div className={styled.contenedor3}>
              {mostrarTemps?.map((element) => {
                return (
                  <div className={styled.contTemp}>
                    <div>{element}</div>
                    <button
                      className={styled.btnDelete}
                      onClick={(event) => sacar(event, element)}
                    >
                      X
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={`${styled.boton}`}>
            <Boton string={"Submit"} />
          </div>
        </div>
      </div>
    </div>
  );
}
