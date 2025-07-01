import { forwardRef } from "react";
import type { InputProps } from "./Input.props";
import cn from 'classnames';
import styles from './Input.module.css';

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ className, isValid = true, ...props }, ref) {
    return (
        <input
            ref={ref}
            className={cn(styles['input'], className, {
                [styles['invalid']]: !isValid,
            })}
            {...props} 
        />
    );
});

export default Input;