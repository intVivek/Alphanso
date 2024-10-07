

export type TodosState = {
  id: number;
  name: string;
  completed?: boolean;
}

export interface TodoContextProps {
  todos: TodosState[];
  addTodo: (todo: string) => void;
  removeTodo: (index: number) => void;
}

export interface AddTodoAction {
  type: 'ADD_TODO';
  payload: string;
}

export interface RemoveTodoAction {
  type: 'REMOVE_TODO';
  payload: number;
}

export type TodoAction = AddTodoAction | RemoveTodoAction;