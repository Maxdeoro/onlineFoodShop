import { useSelector } from "react-redux";
import Header from "../../components/header/Header";
import type { RootStore } from "../../store/store";
import CartItem from "../../components/cartItem/CartItem";
import { useEffect, useState } from "react";
import type { Product } from "../../interfaces/product.interface";
import axios from "axios";
import { PREFIX } from "../../helpers/API";
import styles from './Cart.module.css';

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

    useEffect(() => {
        console.log("Items in cart:", items);
        loadAllItems();
    }, [items]);

    // const loadAllItems = async () => {
    //  const result = await Promise.all(
    //     items.map(i => {
    //         if (i.id) {
    //             return getItem(i.id);
    //         } else {
    //             console.error("Item ID is undefined", i);
    //             return null; // or handle it as needed
    //         }
    //     })
    //  );
    //  setCartProducts(result.filter(product => product !== null)); // Filter out null values
    // };

    useEffect(() => {
        loadAllItems();
    }, [items]);

    return <>
            <Header className={styles['header']}>Cart</Header>
            {items.map(item => {
                const product = cartProducts.find(prod => prod.Id === item.id);
                if(!product) {
                    return;
                }
                return <CartItem count={item.count} {...product} id={item.id}/>;
            })}
           </>;
};