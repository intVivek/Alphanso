import { useContext } from "react";
import Todo from "./Todo";
import s from "./TodosList.module.scss";
import { TodoContext } from "../../context/TodoContext";

export default function TodosList() {
  const { todos, removeTodo, editTodo } = useContext(TodoContext)!;

  const removeTodoHandler = (id: number) => {
    removeTodo(id);
  };

  const handleCompleted = (id: number, completed: boolean) => {
    editTodo(id, {completed: !completed})
  }

  return (
    <div className={s.todoContainer}>
      {todos.map((item) => (
        <Todo
          key={item?.id}
          isCompleted={!!item.completed}
          onRemove={() => removeTodoHandler(item.id)}
          onClick={()=>handleCompleted(item.id, !!item.completed)}
        >
          {item.name}
        </Todo>
      ))}
    </div>
  );
}
