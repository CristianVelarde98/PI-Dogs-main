import styled from "./Home.module.css";
import NavBar from "../../Componentes/NavBar/NavBar.jsx";
import SearchBar from "../../Componentes/SearchBar/SearchBar.jsx";
import Cartas from "../../Componentes/Cartas/Cartas.jsx";
import Loading from "../Loading/Loading.jsx";
import * as actions from "../../Redux/actions/actions.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function Home() {
  const dispatch = useDispatch();
  const cartas = useSelector((state) => {
    return state.todosLosPerros;
  });
  const [futuraInfo, setFuturaInfo] = useState(true);

  useEffect(() => {
    if (!cartas.length) {
      dispatch(actions.getPerros());
    } else setFuturaInfo(false);
  }, [cartas]);

  if (futuraInfo) return <Loading />;
  if (typeof cartas[0] === "string") {
    alert(`${cartas[0]}`);
    return <Loading />;
  }

  return (
    <div className={styled.contenedor}>
      <NavBar />
      <div className={styled.contenedor2}>
        <SearchBar />
      </div>
      <Cartas elementos={cartas} />
    </div>
  );
}
