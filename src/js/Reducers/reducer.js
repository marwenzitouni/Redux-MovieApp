import data from "../../data";
import { ADD_MOVIE, DELETE_MOVIE } from "../Constants/constants";

const initialState = { movies: data, test: "test" };
export const moviesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, payload],
      };
case    DELETE_MOVIE:
return {
...state,movies:state.movies.filter((el)=>el._id != payload)
}
     default: return state;
  }
};
