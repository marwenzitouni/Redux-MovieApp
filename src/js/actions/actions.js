import { ADD_MOVIE, DELETE_MOVIE } from "../Constants/constants"

export const addMovie=(newMovie) => {
    return {
        type:ADD_MOVIE,
        payload:newMovie
    };
  }
  export const deleteMovie = (id) => {
    return {
      type: DELETE_MOVIE,
      payload: id,
    };
  };