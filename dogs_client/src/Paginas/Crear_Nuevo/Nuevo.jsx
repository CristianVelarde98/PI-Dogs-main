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
    if (temp != "NONE" && temp.length && !mostrarTemps.includes(temp)) {
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
            placeholder="Nombre "
            type="text"
            autoComplete="off"
            className={
              errores.Nombre
                ? `${styled.input} ${styled.nombre} ${styled.inputBien}`
                : `${styled.input} ${styled.nombre} ${styled.inputMal}`
            }
          ></input>

          <input
            onChange={handlerInput}
            value={dogData.AlturaMaxima}
            name="AlturaMaxima"
            placeholder="Altura Maxima"
            type="number"
            autoComplete="off"
            className={
              errores.AlturaMaxima
                ? `${styled.input} ${styled.alturaMax} ${styled.inputBien}`
                : `${styled.input} ${styled.alturaMax} ${styled.inputMal}`
            }
          ></input>

          <input
            onChange={handlerInput}
            value={dogData.AlturaMinima}
            name="AlturaMinima"
            placeholder="Altura Minima"
            type="number"
            autoComplete="off"
            className={
              errores.AlturaMinima
                ? `${styled.input} ${styled.alturaMin} ${styled.inputBien}`
                : `${styled.input} ${styled.alturaMin} ${styled.inputMal}`
            }
          ></input>

          <input
            onChange={handlerInput}
            value={dogData.PesoMaximo}
            name="PesoMaximo"
            placeholder="Peso Maximo"
            type="number"
            autoComplete="off"
            className={
              errores.PesoMaximo
                ? `${styled.input} ${styled.pesoMax} ${styled.inputBien}`
                : `${styled.input} ${styled.pesoMax} ${styled.inputMal}`
            }
          ></input>

          <input
            onChange={handlerInput}
            value={dogData.PesoMinimo}
            name="PesoMinimo"
            placeholder="Peso Minimo"
            type="number"
            autoComplete="off"
            className={
              errores.PesoMinimo
                ? `${styled.input} ${styled.pesoMin} ${styled.inputBien}`
                : `${styled.input} ${styled.pesoMin} ${styled.inputMal}`
            }
          ></input>

          <input
            onChange={handlerInput}
            value={dogData.Edad}
            name="Edad"
            placeholder="Edad"
            type="number"
            autoComplete="off"
            className={
              errores.PesoMinimo
                ? `${styled.input} ${styled.años} ${styled.inputBien}`
                : `${styled.input} ${styled.años} ${styled.inputMal}`
            }
          ></input>

          <input
            onChange={(e) => unaImag(e)}
            placeholder="Link de la imagen  (debe terminar en png o jpg)"
            type="text"
            className={`${styled.input} ${styled.imagen} ${styled.inputBien}`}
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
              className={`${styled.input} ${styled.nuevoTemp} ${styled.inputBien}`}
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
