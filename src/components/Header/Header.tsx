import Input from "../Input";
import Tabs from "../Tabs";
import s from "./Header.module.scss";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  return (
    <div className={s.header}>
      <div className={s.day}>Today</div>
      <div className={s.searchContainer}>
        <Input className={s.search} type="search" placeholder="Search"/>
        <CiSearch className={s.icon} />
      </div>
        <Tabs items={['All', 'Completed', 'Incomplete']}/>
    </div>
  );
}
