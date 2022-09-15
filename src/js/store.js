import { createStore } from "redux";
import { moviesReducer } from "./Reducers/reducer";
export const store = createStore(
  moviesReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
