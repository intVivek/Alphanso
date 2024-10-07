import React, { createContext, useReducer, ReactNode } from 'react';
import { TodoContextProps } from './TodoContext.d'
import { todoReducer } from './todoReducer';

export const TodoContext = createContext<TodoContextProps | undefined>(undefined);

interface TodoProviderProps {
    children: ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
    const [todos, dispatch] = useReducer(todoReducer, []);

    const addTodo = (todo: string) => {
        dispatch({ type: 'ADD_TODO', payload: todo });
      };

    return (
        <TodoContext.Provider value={{ todos, addTodo }}>
            {children}
        </TodoContext.Provider>
    );
};