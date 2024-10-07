import { ComponentProps, MouseEventHandler } from "react";
import s from "./Todo.module.scss";
import { CiCircleCheck } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import clsx from "clsx";

export default function Todo({
  isCompleted,
  children,
  onRemove,
  ...props
}: {
  isCompleted: boolean;
  onRemove: MouseEventHandler<SVGElement>;
} & ComponentProps<"div">) {

  return (
    <div
      className={clsx(isCompleted ? s.todo_completed : "", s.todo)}
      {...props}
    >
      {isCompleted ? (
        <CiCircleCheck className={s.check} />
      ) : (
        <div className={s.uncheck} />
      )}
      {children}
      <RxCross2 onClick={onRemove} className={s.cross}/>
    </div>
  );
}
