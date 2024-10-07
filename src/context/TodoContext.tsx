import React, { createContext, useReducer, ReactNode } from 'react';
import { TodoContextProps } from './TodoContext.d'
import { todoReducer } from './todoReducer';

export const TodoContext = createContext<TodoContextProps | undefined>(undefined);

interface TodoProviderProps {
    children: ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
    const [todos, dispatch] = useReducer(todoReducer, []);

    return (
        <TodoContext.Provider value={{ todos }}>
            {children}
        </TodoContext.Provider>
    );
};