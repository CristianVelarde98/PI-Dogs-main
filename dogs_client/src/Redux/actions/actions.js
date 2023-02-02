import axios from "axios";

//  importacion de los types
import { GET_PERROS, POST_RAZA } from "./types.js";

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
