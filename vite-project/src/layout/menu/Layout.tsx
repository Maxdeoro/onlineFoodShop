import { Link, Outlet, useLocation } from "react-router-dom";
import styles from './Layout.module.css';
import { Button } from "../../components/button/Button";
import { useEffect } from "react";
import cn from 'classnames';

export function Layout() {

    const location = useLocation();

    useEffect(() => {
        console.log(location);
    }, [location]);

    return <div className={styles['layout']}>
                <div className={styles['sidebar']}>
                    <div className={styles['user']}>
                        <img src='/avatar.png' className={styles['avatar']} alt='avatar'/>
                        <div className={styles['name']}>John Snow</div>
                        <div className={styles['email']}>jsnow@yahoo.com</div>
                    </div>
                    <div className={styles['menu']}>
                        <Link to='/' className={cn(styles['link'], {
                            [styles.active]: location.pathname === '/',
                        })}>
                            <img src="/menu-icon.svg" alt="menu icon"/>
                            Menu
                        </Link>
                        <Link to='/cart' className={cn(styles['link'], {
                            [styles.active]: location.pathname === '/cart',
                        })}>
                            <img src='cart-icon.svg' alt='cart icon'/>
                            Cart
                        </Link>
                    </div>
                    <Button className={styles['exit']}>
                        <img src='/exit-icon.svg' alt='exit icon'/>
                        Exit
                    </Button>
                </div>
                <div>
                    <Outlet/>
                </div>
            </div>;
};