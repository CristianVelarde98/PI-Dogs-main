// * importacion de los types.js

import {
  GET_PERROS,
  POST_RAZA,
  GET_DETALLE,
  FILTRO_BDD,
  FILTRO_PESO,
  FILTRO_TEMPS,
  FILTRO_RESET,
  BUSCAR_NAME,
} from "../actions/types.js";

const initialState = {
  todosLosPerros: [],
  detalle: [],
  filtrado: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PERROS:
      return {
        ...state,
        todosLosPerros: payload,
        filtrado: payload,
      };

    case POST_RAZA:
      return {
        ...state,
        todosLosPerros: [],
      };
    case GET_DETALLE:
      return { ...state, detalle: payload };
    case BUSCAR_NAME:
      const perro = state.todosLosPerros.find(
        (elemento) => elemento.Nombre === payload
      );
      if (perro) return { ...state, filtrado: [perro] };
      alert("La raza buscada no existe o el nombre que ingreso es inexacto");
      return { ...state };
    case FILTRO_RESET:
      return { ...state, filtrado: state.todosLosPerros };
    case FILTRO_TEMPS:
      if (payload === "NONE")
        return { ...state, filtrado: state.todosLosPerros };
      return {
        ...state,
        filtrado: state.todosLosPerros.filter((elemento) =>
          elemento.Temperamentos.includes(payload)
        ),
      };
    case FILTRO_BDD:
      console.log(payload);
      if (payload === "CREADOS") {
        return {
          ...state,
          filtrado: state.todosLosPerros.filter((elemento) => {
            return elemento.ID[0] === "L";
          }),
        };
      }
      if (payload === "EXISTENTES") {
        return {
          ...state,
          filtrado: state.todosLosPerros.filter((elemento) => {
            return elemento.ID[0] !== "L";
          }),
        };
      }
      return { ...state, filtrado: state.todosLosPerros };
    case FILTRO_PESO:
      if (payload === "ALFABETICO: A-Z") {
        return {
          ...state,
          filtrado: [
            ...state.filtrado.sort(function (a, b) {
              let nombreA = a.Nombre.toLowerCase();
              let nombreB = b.Nombre.toLowerCase();
              if (nombreA < nombreB) return -1;
              if (nombreA > nombreB) return 1;
              return 0;
            }),
          ],
        };
      }
      if (payload === "ALFABETICO: Z-A") {
        return {
          ...state,
          filtrado: [
            ...state.filtrado.slice().sort((a, b) => {
              if (a.Nombre < b.Nombre) return 1;
              if (a.Nombre > b.Nombre) return -1;
              return 0;
            }),
          ],
        };
      }
      if (payload === "PESO: ASCENDENTE") {
        return {
          ...state,
          filtrado: [
            ...state.filtrado
              .slice()
              .sort((a, b) => parseInt(a.PesoMinimo) - parseInt(b.PesoMinimo)),
          ],
        };
      }
      if (payload === "PESO: DESCENDENTE") {
        return {
          ...state,
          filtrado: [
            ...state.filtrado
              .slice()
              .sort((a, b) => b.PesoMaximo - a.PesoMaximo),
          ],
        };
      }
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
