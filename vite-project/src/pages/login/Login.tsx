import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/button/Button';
import Header from '../../components/header/Header';
import Input from '../../components/input/Input';
import styles from './Login.module.css';
import { useState, type FormEvent } from 'react';
import axios, { AxiosError } from 'axios';
import { PREFIX } from '../../helpers/API';
import type { LoginResponse } from '../../interfaces/auth.interface';

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

    const [error, setError] = useState<string | undefined>();
    const navigate = useNavigate();

    const submit = async (e: FormEvent) => {
    e.preventDefault();             // won't reload page
    setError(undefined);
    const target = e.target as typeof e.target & LoginForm;
    const {email, password} = target;
    console.log(email.value);
    console.log(password.value);
    sendLogin(email.value, password.value);
};

    const sendLogin = async (email: string, password: string) => {
    try {
        const {data} = await axios.post<LoginResponse>(`${PREFIX}/auth/login`, {email, password});
        console.log(data);
        localStorage.setItem('jwt', data.access_token);
        navigate('/');
    } catch(e) {
        if(e instanceof AxiosError) {
            console.log(e);
            setError(e.response?.data.message);
        }
    }
};

    return <div className={styles['loginWrapper']} >
                <Header>Login</Header>
                {error && <div className={styles['error']}>{error}</div>}
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