import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/button/Button';
import Header from '../../components/header/Header';
import Input from '../../components/input/Input';
import styles from './Login.module.css';
import { useEffect, type FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootStore } from '../../store/store';
import { login, userActions } from '../../store/user.slice';

export type LoginForm = {
    email: {
        value: string,
    };
    password: {
        value: string,
    };
};

// enter a@gmail.com as email, 123 as password

function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const {jwt, loginErrorMessage} = useSelector((state: RootStore) => state.user);

    useEffect(() => {
        if(jwt) {
            navigate('/');
        }
    }, [jwt, navigate]);

    const submit = async (e: FormEvent) => {
    e.preventDefault();             // won't reload page
    dispatch(userActions.clearLoginError());
    const target = e.target as typeof e.target & LoginForm;
    const {email, password} = target;
    console.log(email.value);
    console.log(password.value);
    sendLogin(email.value, password.value);
    };

    const sendLogin = async (email: string, password: string) => {
        dispatch(login({email, password}));
    };

    return <div className={styles['loginWrapper']} >
                <Header>Login</Header>
                {loginErrorMessage && <div className={styles['error']}>{loginErrorMessage}</div>}
                <form className={styles['loginForm']} onSubmit={submit}>
                    <div className={styles['field']}>
                        <label htmlFor='email'>Your email</label>
                        <Input id='email' name='email' placeholder='Email'/>
                    </div>
                    <div className={styles['field']}>
                        <label htmlFor='password'>Your password</label>
                        <Input id='password' name='password' type='password' placeholder='Password'/>
                    </div>
                    <Button appearance='big'>Login</Button>
                </form>
                <div className={styles['links']}>
                    <div>Don't you have an account?</div>
                    <Link to='/auth/registration'>Register.</Link>
                </div>
           </div>;
};

export default Login;