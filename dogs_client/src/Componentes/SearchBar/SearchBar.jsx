import styled from "./SearchBar.modules.css";

// dentro de render cards pone un paginado

export default function SearchBar() {
  const funcionParaFiltrar = () => {
    console.log("cambiando");
  };
  return (
    <div className={styled.contenedor}>
      <button>Reiniciar</button>

      <span>Mostrar: </span>
      <select onChange={funcionParaFiltrar}>
        <option value="">TODOS</option>
        <option value="">CREADOS</option>
        <option value="">EXISTENTES</option>
      </select>

      <span>Filtrar Por: </span>
      <select className="">
        <option value="">NONE</option>
        <option value="">ALFABETICO: A-Z</option>
        <option value="">ALFABETICO: Z-A</option>
        <option value="">PESO: ASENDENTE</option>
        <option value="">PESO: DESENDENTE</option>
      </select>
    </div>
  );
}
