// * importacion de los types.js

import { GET_PERROS } from "../actions/types.js";

const initialState = {
  todosLosPerros: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PERROS:
      return {
        ...state,
        todosLosPerros: payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
