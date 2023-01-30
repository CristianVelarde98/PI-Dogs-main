import styled from "./Home.module.css";
import NavBar from "../../Componentes/NavBar/NavBar.jsx";
import SearchBar from "../../Componentes/SearchBar/SearchBar.jsx";
import Cartas from "../../Componentes/Cartas/Cartas.jsx";

export default function Home() {
  return (
    <div className={styled.contenedor}>
      <NavBar />
      <SearchBar />
      <Cartas />
    </div>
  );
}
