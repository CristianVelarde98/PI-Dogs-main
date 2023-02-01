import styled from "./SearchBar.modules.css";
import DispTemps from "../DispTemps/DispTemps";

// dentro de render cards (CARTAS) pone un paginado

export default function SearchBar() {
  const funcionParaFiltrar = () => {
    console.log("cambiando");
  };
  return (
    <>
      <button>Reiniciar</button>

      <span>Filtrar por Temperamento: </span>

      <DispTemps />

      <span>Mostrar: </span>
      <select onChange={funcionParaFiltrar}>
        <option value="">TODOS</option>
        <option value="">CREADOS</option>
        <option value="">EXISTENTES</option>
      </select>

      <span>Filtrar por orden: </span>
      <select onChange={funcionParaFiltrar}>
        <option value="">NONE</option>
        <option value="">ALFABETICO: A-Z</option>
        <option value="">ALFABETICO: Z-A</option>
        <option value="">PESO: ASENDENTE</option>
        <option value="">PESO: DESENDENTE</option>
      </select>

      <input placeholder="Buscar por Nombre" type="text" />
    </>
  );
}
