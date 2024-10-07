import Button from "../../components/Button";
import Header from "../../components/Header/Header";
import Input from "../../components/Input";
import TodosList from "../../components/TodosList";
import s from "./Todo.module.scss";

export default function Todo() {
  return (
    <div className={s.todoContainer}>
      <div className={s.todo}>
        <Header />
        <TodosList />
        <Input />
        <Button className={s.button}>Add Task</Button>
      </div>
    </div>
  );
}
