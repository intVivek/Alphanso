import { useContext } from "react";
import Todo from "./Todo";
import s from "./TodosList.module.scss";
import { TodoContext } from "../../context/TodoContext";

export default function TodosList() {
  const { todos, removeTodo } = useContext(TodoContext)!;

  const removeTodoHandler = (id: number) => {
    removeTodo(id);
  };

  return (
    <div className={s.todoContainer}>
      {todos.map((item) => (
        <Todo
          key={item?.id}
          isCompleted={!!item.completed}
          onRemove={() => removeTodoHandler(item.id)}
        >
          {item.name}
        </Todo>
      ))}
    </div>
  );
}
