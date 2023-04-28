import axios from "axios";
import { chatTypes } from "../types/chatTypes";

export const actionGetchatsAsync = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://pbakxq15qi.execute-api.us-west-2.amazonaws.com/testing?user=admin&password=admin"
      );
      const chats = response.data;
      dispatch(actionGetChatsSync(chats));
    } catch (error) {
      console.log(error);
      // dispatch una acción de error si lo deseas
    }
  };
};

const actionGetChatsSync = (chats) => {
  return {
    type: chatTypes.GET_CHAT,
    payload: chats,
  };
};
