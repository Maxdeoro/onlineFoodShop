import { useDispatch } from 'react-redux';
import styles from './CartItem.module.css';
import type { CartItemProps } from './CartItem.props';
import type { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';

function CartItem (props: CartItemProps) {
    const dispatch = useDispatch<AppDispatch>();

    const descrease = () => {
        
    };

    const increase = () => {
        dispatch(cartActions.add(props.id));
    };

    const remove = () => {};

    return <div className={styles['item']}>
        <div className={styles['image']} style={{backgroundImage: `url('${props.image}')`}}></div>
        <div className={styles['description']}>
            <div className={styles['name']}>{props.name}</div>
            <div className={styles['currency']}>{props.price}&nbsp;U$</div>
        </div>
        <div className={styles['actions']}>
            <button className={styles['button']} onClick={descrease}>
                <img src='/cart-button-icon.svg' alt='Descrease itens'/>
            </button>
            <div>{props.count}</div>
            <button className={styles['button']} onClick={increase}>
                <img src='/cart-button-icon.svg' alt='Increase items'/>
            </button>
            <button className={styles['remove']} onClick={remove}>
                <img src='/cart-button-icon.svg' alt='Remove from cart' />
            </button>
        </div>
    </div>
};

export default CartItem;