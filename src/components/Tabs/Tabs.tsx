import { ReactNode } from "react";
import s from "./Tabs.module.scss";
import clsx from "clsx";

export default function Tabs({ items=[], selected }: { items: ReactNode[], selected?: number }) {
  return (
    <div className={s.tabs}>
      {items && items.map((item, i) => (
        <div key={i} className={clsx(selected===i && s.tab_selected, s.tab)}>{item}</div>
      ))}
    </div>
  );
}
