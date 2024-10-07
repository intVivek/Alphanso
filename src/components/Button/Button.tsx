import clsx from "clsx";
import { ComponentProps } from "react";
import s from './Button.module.scss'

export default function Button({
    className,
    ...props
}: ComponentProps<'button'>) {
    return <button className={clsx(s.button, className)} {...props} />
}