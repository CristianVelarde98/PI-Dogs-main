// * importacion de los types.js

import { GET_PERROS, POST_RAZA } from "../actions/types.js";

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
    case POST_RAZA:
      return {
        ...state,
        todosLosPerros: [],
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
