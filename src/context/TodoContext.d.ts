export type TodoAction = any

export type TodosState = {
  name: string;
  completed?: boolean;
}

export interface TodoContextProps {
  todos: TodosState[];
}
