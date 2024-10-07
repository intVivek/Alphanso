import Input from "../Input";
import s from "./Header.module.scss";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  return (
    <div className={s.header}>
      <div className={s.day}>Today</div>
      <div className={s.searchContainer}>
        <Input className={s.search} type="search" />
        <CiSearch className={s.icon} />
      </div>
    </div>
  );
}
