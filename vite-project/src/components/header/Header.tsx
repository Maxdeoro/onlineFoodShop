import type { JSX } from 'react';
import styles from './Header.module.css';
import type { HeaderProps } from './Header.props';
import cn from 'classnames';

function Header({children, className, ...props}: HeaderProps): JSX.Element {
    return <h1 className={cn(className, styles['h1'])} {...props}>{children}</h1>
};

export default Header;