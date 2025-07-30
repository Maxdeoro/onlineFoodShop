import { NavLink, Outlet, useNavigate } from "react-router-dom";
import styles from './Layout.module.css';
import { Button } from "../../components/button/Button";
import cn from 'classnames';
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { userActions } from "../../store/user.slice";

export function Layout() {

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const logout = () => {
        dispatch(userActions.logout());
        navigate('/auth/login');
    };

    return <div className={styles['layout']}>
                <div className={styles['sidebar']}>
                    <div className={styles['user']}>
                        <img src='/avatar.png' className={styles['avatar']} alt='avatar'/>
                        <div className={styles['name']}>John Snow</div>
                        <div className={styles['email']}>jsnow@yahoo.com</div>
                    </div>
                    <div className={styles['menu']}>
                        <NavLink to='/' className={({isActive}) => cn(styles['link'], {
                            [styles.active]: isActive,
                        })}>
                            <img src="/menu-icon.svg" alt="menu icon"/>
                            Menu
                        </NavLink>
                        <NavLink to='/cart' className={({isActive}) => cn(styles['link'], {
                            [styles.active]: isActive,
                        })}>
                            <img src='cart-icon.svg' alt='cart icon'/>
                            Cart
                        </NavLink>
                    </div>
                    <Button className={styles['exit']} onClick={logout}>
                        <img src='/exit-icon.svg' alt='exit icon'/>
                        Exit
                    </Button>
                </div>
                <div className={styles['content']}>
                    <Outlet/>
                </div>
            </div>;
};