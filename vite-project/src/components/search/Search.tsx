import { forwardRef, type JSX } from 'react';
import styles from './Search.module.css';
import type { SearchProps } from './Search.props';
import cn from 'classnames';

const Search = forwardRef<HTMLInputElement, SearchProps>(function Input({
    isValid=true, className, ...props}, ref): JSX.Element {
        return (
            <div className={styles['input-wrapper']}>
                <input ref={ref} className={cn(styles['input'], className, {
                    [styles['invalid']]: !isValid,
                })} {...props}/>
                <img src='/search-icon.svg' className={styles['icon']} alt='search'/>
            </div>
        );
    });

export default Search;