import { useContext } from "react";
import Todo from "./Todo";
import s from "./TodosList.module.scss";
import { TodoContext } from "../../context/TodoContext";

export default function TodosList() {

  const { todos } = useContext(TodoContext)!;

  return (
    <div className={s.todoContainer}>
      {todos.map((item) => (
        <Todo key={item?.id} isCompleted={!!item.completed}>
          {item.name}
        </Todo>
      ))}
    </div>
  );
}
