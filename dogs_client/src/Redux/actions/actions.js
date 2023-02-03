import axios from "axios";

//  importacion de los types
import {
  GET_DETALLE,
  GET_PERROS,
  POST_RAZA,
  FILTRO_BDD,
  FILTRO_PESO,
  FILTRO_TEMPS,
  FILTRO_RESET,
  BUSCAR_NAME,
} from "./types.js";

export const getPerros = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/dogs")
      .then((resp) => {
        return dispatch({
          type: GET_PERROS,
          payload: resp.data,
        });
      })
      .catch((error) => {
        return dispatch({
          type: GET_PERROS,
          payload: ["error al cargar los perros..."],
        });
      }, 10000);
  };
};

export const postRaza = (perro) => {
  return function (dispatch) {
    axios
      .post("http://localhost:3001/dogs", perro)
      .then((res) => {
        alert(res.data.mensaje);
        return dispatch({
          type: POST_RAZA,
          payload: [],
        });
      })
      .catch((err) => {
        alert(err);
      }, 10000);
  };
};

export const getDetalle = (id) => {
  return function (dispatch) {
    axios.get(`http://localhost:3001/dogs/${id}`).then((res) => {
      return dispatch({
        type: GET_DETALLE,
        payload: res.data,
      }).catch((er) => {
        alert("Problema con el servidor, intenta mas tarde");
      });
    });
  };
};

export const buscarPorNombre = (nombre) => {
  return function (dispatch) {
    return dispatch({
      type: BUSCAR_NAME,
      payload: nombre,
    });
  };
};

export const filtroBDD = (valor) => {
  return function (dispatch) {
    return dispatch({
      type: FILTRO_BDD,
      payload: valor,
    });
  };
};

export const filtroPorPeso = (valor) => {
  return function (dispatch) {
    return dispatch({
      type: FILTRO_PESO,
      payload: valor,
    });
  };
};

export const filtroTemps = (valor) => {
  return function (dispatch) {
    return dispatch({
      type: FILTRO_TEMPS,
      payload: valor,
    });
  };
};

export const reiniciarFiltros = () => {
  return function (dispatch) {
    return dispatch({
      type: FILTRO_RESET,
      payload: "",
    });
  };
};
