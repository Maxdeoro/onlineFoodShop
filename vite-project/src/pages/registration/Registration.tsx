import { Link, useNavigate } from 'react-router-dom';
import styles from './Registration.module.css';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootStore } from '../../store/store';
import Header from '../../components/header/Header';
import { useEffect, type FormEvent } from 'react';
import Input from '../../components/input/Input';
import { Button } from '../../components/button/Button';
import { userActions, registration } from '../../store/user.slice';

export type RegistrationForm = {
    email: {
        value: string,
    };
    password: {
        value: string,
    };
    name: {
        value: string,
    };
};

function Registration() {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const {jwt, registrationErrorMessage} = useSelector((state: RootStore) => state.user );

    useEffect(() => {
        if(jwt) {
            navigate('/');
        }
    }, [jwt, navigate]);

    const submit = async (e: FormEvent) => {
        e.preventDefault();             // won't reload page
        dispatch(userActions.clearRegistrationError());
        const target = e.target as typeof e.target & RegistrationForm;
        const {email, password, name} = target;
        console.log(email.value);
        console.log(password.value);
        console.log(name.value);
        dispatch(registration({email: email.value, password: password.value, name: name.value}));
    };

    return <div className={styles['registrationWrapper']}>
        <Header>Registration</Header>
        {registrationErrorMessage && <div className={styles['error']}>
            {registrationErrorMessage}
        </div>}
        <form className={styles['registrationForm']} onSubmit={submit}>
            <div className={styles['field']}>
                <label htmlFor='email'>Your email</label>
                <Input id='email' name='email' placeholder='Email'/>
            </div>
            <div className={styles['field']}>
                <label htmlFor='password'>Your password</label>
                <Input id='password' name='password' placeholder='Password'/>
            </div>
            <div className={styles['field']}>
                <label htmlFor='name'>Your name</label>
                <Input id='name' name='name' placeholder='Name'/>
            </div>
            <Button appearance='big'>Register</Button>
        </form>
        <div className={styles['links']}>
            <div>Do you have an account?</div>
            <Link to='/auth/login'>Login.</Link>
        </div>
    </div>;
};
export default Registration;