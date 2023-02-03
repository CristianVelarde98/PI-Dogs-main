import styled from "./SearchBar.modules.css";
import DispTemps from "../DispTemps/DispTemps";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import * as actions from "../../Redux/actions/actions.js";
import { useEffect } from "react";
import axios from "axios";

// dentro de render cards (CARTAS) pone un paginado

export default function SearchBar() {
  const dispatch = useDispatch();
  const cartas = useSelector((state) => {
    return state.detalle;
  });
  const [temps, setTemps] = useState();
  const [name, setName] = useState("");
  useEffect(() => {
    axios.get("http://localhost:3001/temperaments").then((res) => {
      setTemps(res.data);
    });
  }, []);

  const [valores, setValores] = useState({
    temp: "",
    bdd: "",
    ord: "",
  });

  const funcionParaFiltrar = (evento, remitente) => {
    evento.preventDefault();
    let valor = evento.target.value;
    switch (remitente) {
      case "temperamento":
        setValores({ ...valores, temp: valor, bdd: "" });
        dispatch(actions.filtroTemps(valor));
        break;
      case "orden":
        setValores({ ...valores, ord: valor });
        dispatch(actions.filtroPorPeso(valor));
        break;
      case "baseDeDatos":
        setValores({ ...valores, bdd: valor, temp: "" });
        dispatch(actions.filtroBDD(valor));
        break;
      default:
        setValores({
          temp: "",
          bdd: "",
          ord: "",
        });
        setName("");
        dispatch(actions.reiniciarFiltros());
        break;
    }
  };

  const funcionIntermedia = (evento) => {
    if (evento.key === "Enter") {
      setName("");
      dispatch(actions.buscarPorNombre(name));
    }
  };

  return (
    <>
      <button onClick={(e) => funcionParaFiltrar(e)}>Reiniciar</button>

      <span>Filtrar por Temperamento: </span>

      <select
        value={valores.temp}
        onChange={(e) => funcionParaFiltrar(e, "temperamento")}
      >
        <option>NONE</option>
        {temps?.map((element) => {
          return <option>{element.Nombre}</option>;
        })}
      </select>

      <span>Mostrar: </span>
      <select
        value={valores.bdd}
        onChange={(e) => funcionParaFiltrar(e, "baseDeDatos")}
      >
        <option>TODOS</option>
        <option>CREADOS</option>
        <option>EXISTENTES</option>
      </select>

      <span>Filtrar por orden: </span>
      <select
        value={valores.ord}
        onChange={(e) => funcionParaFiltrar(e, "orden")}
      >
        <option>NONE</option>
        <option>ALFABETICO: A-Z</option>
        <option>ALFABETICO: Z-A</option>
        <option>PESO: ASCENDENTE</option>
        <option>PESO: DESCENDENTE</option>
      </select>

      <input
        placeholder="Buscar por Nombre"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyPress={funcionIntermedia}
      />
    </>
  );
}
