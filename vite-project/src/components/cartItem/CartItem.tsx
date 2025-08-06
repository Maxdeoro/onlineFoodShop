import { useDispatch } from 'react-redux';
import styles from './CartItem.module.css';
import type { CartItemProps } from './CartItem.props';
import type { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';

function CartItem (props: CartItemProps) {
    const dispatch = useDispatch<AppDispatch>();

    const descrease = () => {
        dispatch(cartActions.remove(props.id));
    };

    const increase = () => {
        dispatch(cartActions.add(props.id));
    };

    const removeAll = () => {
        dispatch(cartActions.delete(props.id));
    };

    return <div className={styles['item']}>
        <div className={styles['image']} style={{backgroundImage: `url('${props.image}')`}}></div>
        <div className={styles['description']}>
            <div className={styles['name']}>{props.name}</div>
            <div className={styles['price']}>{props.price}&nbsp;U$</div>
        </div>
        <div className={styles['actions']}>
            <button className={styles['minus']} onClick={descrease}>
                <img src='/minus-icon.svg' alt='Descrease itens'/>
            </button>
            <div className={styles['number']}>{props.count}</div>
            <button className={styles['plus']} onClick={increase}>
                <img src='/plus-icon.svg' alt='Increase items'/>
            </button>
            <button className={styles['remove']} onClick={removeAll}>
                <img src='/delete-icon.svg' alt='Remove from cart' />
            </button>
        </div>
    </div>
};

export default CartItem;