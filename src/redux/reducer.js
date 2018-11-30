import axios from "axios";

//ACTION TYPES
const CHECK_USER = "CHECK_USER";
const UPDATE_INPUT = "UPDATE_INPUT";
const REGISTER_USER = "REGISTER_USER";

//INITIAL STATE
const initialState = {
  user: "",
  usernameInput: "",
  passwordInput: "",
  usernameRegisterInput: "",
  passwordRegisterInput: "",
  errorMessage: false,
  redirect: false
};
//ACTION CREATORS
export const updateInput = input => {
  return {
    type: UPDATE_INPUT,
    payload: input
  };
};

//POST
export const checkUser = (username, password) => {
  return {
    type: CHECK_USER,
    payload: axios.post("/api/user", { username, password })
  };
};
export const registerUser = (username, password) => {
  return {
    type: REGISTER_USER,
    payload: axios.post("/api/newuser", { username, password })
  };
};

//REDUCER
export default function reducer(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case UPDATE_INPUT:
      console.log(action.payload.target.name, action.payload.target.value);
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.value
      };
    case `${CHECK_USER}_PENDING`:
      return {
        ...state,
        user: ""
      };
    case `${CHECK_USER}_FULFILLED`:
      return {
        ...state,
        user: action.payload.data
      };
    case `${CHECK_USER}_REJECTED`:
      return {
        ...state,
        user: ""
      };
    case `${REGISTER_USER}_PENDING`:
      return {
        ...state
      };
    case `${REGISTER_USER}_FULFILLED`:
      console.log(action.payload);
      return {
        ...state,
        errorMessage: action.payload.data[0],
        user: action.payload.data[1]
      };
    case `${REGISTER_USER}_REJECTED`:
      return {
        ...state
      };
    default:
      return state;
  }
}
