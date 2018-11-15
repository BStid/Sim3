import axios from "axios";

//ACTION TYPES
const GET_USER = "GET_USER";
const UPDATE_INPUT = "UPDATE_INPUT";

//INITIAL STATE
const initialState = {
  user: [],
  usernameInput: "",
  passwordInput: ""
};
//ACTION CREATORS
export const updateInput = input => {
  return {
    type: UPDATE_INPUT,
    payload: input
  };
};
//GET
export const getUser = () => {
  return {
    type: GET_USER,
    payload: axios.get("/api/user")
  };
};
//REDUCER
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_INPUT:
      console.log(
        "passing reducer...",
        action.payload.target.name,
        action.payload.target.value
      );
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.value
      };
    case `${GET_USER}_PENDING`:
      return {
        ...state
      };
    case `${GET_USER}_FULFILLED`:
      console.log(action.payload);
      return {
        ...state,
        user: action.payload
      };
    case `${GET_USER}_REJECTED`:
      return {
        ...state
      };
  }
}
