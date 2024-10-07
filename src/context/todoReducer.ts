import { TodoAction, TodosState } from "./TodoContext.d";

export const todoReducer = (state: TodosState[], action: TodoAction): TodosState[] => {
    switch (action.type) {
        default:
            return state;
    }
};