import Todo from "./Todo";
import s from "./TodosList.module.scss";

const list = [
  {
    id: 1,
    name: "Todo 1",
    completed: true,
  },
  {
    id: 2,
    name: "Todo 2",
    completed: false,
  },
];

export default function TodosList() {
  return (
    <div className={s.todoContainer}>
      {list.map((item) => (
        <Todo key={item.id} isCompleted={item.completed}>
          {item.name}
        </Todo>
      ))}
    </div>
  );
}
