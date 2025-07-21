import { Link } from 'react-router-dom';
import { Button } from '../../components/button/Button';
import Header from '../../components/header/Header';
import Input from '../../components/input/Input';
import styles from './Login.module.css';
import type { FormEvent } from 'react';

const submit = (e: FormEvent) => {
    e.preventDefault();             // won't reload page
    console.log(e);
};

function Login() {
    return <div className={styles['loginWrapper']} >
                <Header>Login</Header>
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