import axios from "axios";

//  importacion de los types
import { GET_PERROS } from "./types.js";

export const getPerros = () => {
  return async function (dispatch) {
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
