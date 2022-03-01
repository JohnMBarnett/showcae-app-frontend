import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const ADD_TODO = "ADD_TODO";

export const fetchStart = () => {
  return { type: FETCH_START };
};

export const fetchSuccess = (todoArr) => {
  console.log(todoArr)
  return { type: FETCH_SUCCESS, payload: todoArr };
};

export const fetchFail = (error) => {
  return { type: FETCH_FAIL, payload: error };
};

export const addSmurf = (todoObj) => {
  return { type: ADD_TODO, payload: todoObj };
};
