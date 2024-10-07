import getUniqueId from "../utils/getUnigueId";
import { TodoAction, TodosState } from "./TodoContext.d";

export const todoReducer = (
  state: TodosState[],
  action: TodoAction
): TodosState[] => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: getUniqueId(), name: action.payload }];

    case "REMOVE_TODO":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};
