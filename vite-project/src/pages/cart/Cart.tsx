import { useSelector } from "react-redux";
import Header from "../../components/header/Header";
import type { RootStore } from "../../store/store";
import CartItem from "../../components/cartItem/CartItem";
import { useEffect, useState } from "react";
import type { Product } from "../../interfaces/product.interface";
import axios from "axios";
import { PREFIX } from "../../helpers/API";
import styles from './Cart.module.css';

const DELIVERY_FEE = 145;

export function Cart() {
    const [cartProducts, setCartProducts] = useState<Product[]>([]);

    const items = useSelector((state: RootStore) => state.cart.items);

    const getItem = async (id: number) => {
        const { data } = await axios.get<Product>(`${PREFIX}/products/${id}`);
        console.log(data);
        return data;
    };

    const loadAllItems = async () => {
        const result = await Promise.all(items.map(i => getItem(i.id))) ;
        setCartProducts(result);
    };

    const total = items.map(item => {
                        const product = cartProducts.find(prod => prod.id === item.id);
                        if(!product) {
                            return 0;
                        }
                        return item.count * product.price;
                    }).reduce((acc, i) => acc += i, 0);

    useEffect(() => {
        console.log("Items in cart:", items);
        loadAllItems();
    }, [items]);

    useEffect(() => {
        loadAllItems();
    }, [items]);

    return <>
            <Header className={styles['header']}>Cart</Header>
            {items.map(item => {
                const product = cartProducts.find(prod => prod.id === item.id);
                if(!product) {
                    return;
                }
                return <CartItem key={product.id} count={item.count} {...product} id={item.id}/>;
            })}
            <div className={styles['line']}>
                <div className={styles['text']}>Total amount</div>
                <div className={styles['price']}>{total}&nbsp;<span>$U</span></div>
            </div>
            <hr className={styles['hr']}/>
            <div className={styles['line']}>
                <div className={styles['text']}>Delivery</div>
                <div className={styles['price']}>{DELIVERY_FEE}&nbsp;<span>$U</span></div>
            </div>
            <hr className={styles['hr']}/>
            <div className={styles['line']}>
                <div className={styles['text']}>Total {items.length}</div>
                <div className={styles['price']}>{total + DELIVERY_FEE}&nbsp;<span>$U</span></div>
            </div>
           </>;
};