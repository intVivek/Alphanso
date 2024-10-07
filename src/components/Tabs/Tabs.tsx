import { ReactNode } from "react";
import s from "./Tabs.module.scss";
import clsx from "clsx";

export default function Tabs({
  items = [],
  onChange,
  active,
}: {
  items: ReactNode[];
  selected?: number;
  onChange: Function;
  active: number;
}) {
  return (
    <div className={s.tabs}>
      {items &&
        items.map((item, i) => (
          <div
            key={i}
            className={clsx(active === i && s.tab_selected, s.tab)}
            onClick={() => onChange(i)}
          >
            {item}
          </div>
        ))}
    </div>
  );
}
