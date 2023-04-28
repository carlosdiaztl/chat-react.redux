import axios from "axios";
import { userTypes } from "../types/userTypes";
export const actionLoginAsync = ({ user, password }) => {
  return async (dispatch) => {
    const url =
      "https://pbakxq15qi.execute-api.us-west-2.amazonaws.com/testing";
    try {
      const response = await axios.post(url, {
        user: user,
        password: password,
      });
      dispatch(
        actionLoginSync({
          error: false,
          user: response.data, // Puedes reemplazar response.data con las propiedades que recibas en la respuesta
        })
      );
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      dispatch(actionLoginSync({ error: true, errorMessage: errorMessage }));
    }
  };
};
const actionLoginSync = (user) => {
  return {
    type: userTypes.USER_LOGIN,
    payload: {
      ...user,
    },
  };
};

export const actionLogoutSync = () => {
  return {
    type: userTypes.USER_LOGOUT,
  };
};
