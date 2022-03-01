import { FETCH_FAIL, FETCH_SUCCESS, FETCH_START, ADD_TODO } from "../actions";

export const initialState = {
  todoArr: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        error: "",
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        todoArr: action.payload,
      };

    case FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case ADD_TODO:
      console.log(action.payload)
      return {
        ...state,
        todoArr: [action.payload, ...state.todoArr],
      };

    default:
      return state;
  }
};

export default reducer;
