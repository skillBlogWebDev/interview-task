import { 
  LOGIN, 
  PASSWORD,
} from "../../constants/constants";

const initialState = {
  login: '',
  password: '',
};
  
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
  case LOGIN:
    return { ...state, login: action.payload };
  case PASSWORD:
    return { ...state, password: action.payload };
  default:
    return state;
  }
};