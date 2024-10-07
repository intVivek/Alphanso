

export type TodosState = {
  id: number;
  name: string;
  completed?: boolean;
}

export interface TodoContextProps {
  todos: TodosState[];
  addTodo: (todo: string) => void;
}

export interface AddTodoAction {
  type: 'ADD_TODO';
  payload: string;
}

export type TodoAction = AddTodoAction;