import React, { createContext, useReducer, ReactNode, useState, useMemo } from "react";
import { TodoContextProps, TodosState } from "./TodoContext.d";
import { todoReducer } from "./todoReducer";
import { TabsEnum } from "../components/Header/Header";

export const TodoContext = createContext<TodoContextProps | undefined>(
  undefined
);

interface TodoProviderProps {
  children: ReactNode;
}

type filtersType = {
    search: string;
    type: TabsEnum
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [filterValues, setFilterValues] = useState<filtersType>({
    search: '',
    type: TabsEnum.ALL
  });

  const addTodo = (todo: string) => {
    dispatch({ type: "ADD_TODO", payload: todo });
  };

  const removeTodo = (index: number) => {
    dispatch({ type: "REMOVE_TODO", payload: index });
  };

  const editTodo = (id: number, editedTodo: Partial<Omit<TodosState, 'id'>>) => {
    dispatch({ type: 'EDIT_TODO', payload: { id, ...editedTodo } });
  };

  const filterTodo = (filters: Partial<filtersType>) => {
    setFilterValues(p=>({...p, ...filters}))
  }

  const filteredTodo = useMemo(() => {
    return todos.filter((todo) => {
      const matchesSearch = todo.name.toLowerCase().includes(filterValues.search.toLowerCase());
      const matchesType =
        filterValues.type === TabsEnum.ALL ||
        (filterValues.type === TabsEnum.COMPLETED && todo.completed) ||
        (filterValues.type === TabsEnum.INCOMPLETE && !todo.completed);
  
      return matchesSearch && matchesType;
    });
  }, [filterValues, todos]);

  return (
    <TodoContext.Provider value={{ todos, filteredTodo, filterValues, addTodo, removeTodo, editTodo, filterTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
