import type { FC } from 'react';
import type { ButtonProps } from './Button.props';
import cn from 'classnames';
import styles from './Button.module.css';

export const Button: FC<ButtonProps> = ({children, appearance='small', className, ...props}) => {
    return (
        <button className={cn(styles['button'],styles['accent'], className, {
            [styles['small']]: appearance === 'small',
            [styles['big']]: appearance === 'big',
        })} 
                {...props}>{children}</button>
    );
};

