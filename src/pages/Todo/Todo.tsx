import { useContext, useState } from "react";
import Button from "../../components/Button";
import Header from "../../components/Header/Header";
import Input from "../../components/Input";
import TodosList from "../../components/TodosList";
import { TodoContext } from "../../context/TodoContext";
import s from "./Todo.module.scss";

export default function Todo() {

    const { addTodo } = useContext(TodoContext)!;
    const [value, setValue] = useState('')

    const handleAddTodo = () => {
        addTodo(value)
        setValue('')
    }
  return (
    <div className={s.todoContainer}>
      <div className={s.todo}>
        <Header />
        <TodosList />
        <Input placeholder="Type Something" value={value} onChange={(e)=>setValue(e.target.value)}/>
        <Button className={s.button} disabled={!value} onClick={handleAddTodo}>Add Task</Button>
      </div>
    </div>
  );
}
