

export type TodosState = {
  id: number;
  name: string;
  completed?: boolean;
}

export interface TodoContextProps {
  todos: TodosState[];
  addTodo: (todo: string) => void;
  removeTodo: (index: number) => void;
  editTodo: (index: number, newTodo: Partial<Omit<TodosState, 'id'>>) => void;
}

export interface AddTodoAction {
  type: 'ADD_TODO';
  payload: string;
}

export interface RemoveTodoAction {
  type: 'REMOVE_TODO';
  payload: number;
}

export interface EditTodoAction {
  type: 'EDIT_TODO';
  payload: Partial<TodosState>
}

export type TodoAction = AddTodoAction | RemoveTodoAction | EditTodoAction;