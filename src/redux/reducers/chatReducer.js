import { chatTypes } from "../types/chatTypes";

export const chatReducer = (state = [], action) => {
  switch (action.type) {
    case chatTypes.GET_CHAT:
      return [...action.payload];

    default:
      return state;
  }
};
