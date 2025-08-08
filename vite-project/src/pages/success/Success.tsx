import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/Button";
import styles from './Success.module.css';

export function Success() {

    const navigate = useNavigate();

    return (
        <div className={styles['success']}>
            <img src="/product-demo.png" alt="product image"/>
            <div className={styles['text']}>Your order has been succefully placed!</div>
            <Button appearance='big' onClick={() => navigate('/')}>Place new order</Button>
        </div>
    );
};