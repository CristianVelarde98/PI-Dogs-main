// * importacion de los types.js

import {} from "../actions/types.js";

const initialState = {
  games: [],
  topGames: [],
  detail: {},
  renderGames: [],
};

const rootReducer = (state = initialState, { type, payload }) => {};

export default rootReducer;
