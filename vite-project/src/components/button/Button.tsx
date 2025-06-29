// import type { FC, JSX } from 'react';
// import styles from './Button.module.css';
import type { FC } from 'react';
import type { ButtonProps } from './Button.props';
import cn from 'classnames';

// export function Button({children, className, ...props}: ButtonProps): JSX.Element {
//     return (
//         <button className={cn('button accent', className)} {...props}>
//             {children}
//         </button>
//     );
// };

export const ButtonAlt: FC<ButtonProps> = ({children, className, ...props}) => {
    return (
        <button className={cn('button accent', className)} {...props}>{children}</button>
    );
};

