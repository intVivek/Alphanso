import { ChangeEventHandler, useContext } from "react";
import Input from "../Input";
import Tabs from "../Tabs";
import s from "./Header.module.scss";
import { CiSearch } from "react-icons/ci";
import { TodoContext } from "../../context/TodoContext";

export enum TabsEnum {
  ALL,
  COMPLETED,
  INCOMPLETE,
}

const TabsValues = {
  [TabsEnum.ALL]: {
    value: "All",
  },
  [TabsEnum.COMPLETED]: {
    value: "Completed",
  },
  [TabsEnum.INCOMPLETE]: {
    value: "Incomplete",
  },
};

export default function Header() {
  const { filterValues, filterTodo } = useContext(TodoContext)!;
  const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    filterTodo({ search: e.target.value });
  };

  const handleTabChange = (currentTab: TabsEnum) => {
    filterTodo({ type: currentTab});
  };

  return (
    <div className={s.header}>
      <div className={s.day}>Today</div>
      <div className={s.searchContainer}>
        <Input
          onChange={handleSearch}
          className={s.search}
          type="search"
          placeholder="Search"
          value={filterValues.search}
        />
        <CiSearch className={s.icon} />
      </div>
      <Tabs items={Object.values(TabsValues).map((i) => i.value)} active={filterValues.type} onChange={handleTabChange}/>
    </div>
  );
}
