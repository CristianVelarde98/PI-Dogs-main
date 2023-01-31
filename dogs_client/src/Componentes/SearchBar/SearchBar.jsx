import styled from "./SearchBar.modules.css";
import DispTemps from "../DispTemps/DispTemps";

// dentro de render cards (CARTAS) pone un paginado

export default function SearchBar() {
  const funcionParaFiltrar = () => {
    console.log("cambiando");
  };
  return (
    <div className={styled.searchBar}>
      <button>Reiniciar</button>

      <span>Filtrar Por: </span>
      <DispTemps />

      <span>Mostrar: </span>
      <select onChange={funcionParaFiltrar}>
        <option value="">TODOS</option>
        <option value="">CREADOS</option>
        <option value="">EXISTENTES</option>
      </select>

      <span>Filtrar Por: </span>
      <select onChange={funcionParaFiltrar}>
        <option value="">NONE</option>
        <option value="">ALFABETICO: A-Z</option>
        <option value="">ALFABETICO: Z-A</option>
        <option value="">PESO: ASENDENTE</option>
        <option value="">PESO: DESENDENTE</option>
      </select>
    </div>
  );
}
