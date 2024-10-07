import clsx from "clsx";
import { ComponentProps } from "react";
import s from './Input.module.scss'

export default function Input({
    className,
    ...props
}: ComponentProps<'input'>) {
    return <input className={clsx(s.input, className)} {...props} />
}