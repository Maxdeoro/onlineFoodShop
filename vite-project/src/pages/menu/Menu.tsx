import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import ProductCard from "../../components/productCard/ProductCard";
import Search from '../../components/search/Search';
import { PREFIX } from "../../helpers/API";
import type { Product } from "../../interfaces/product.interface";
import styles from './Menu.module.css';
import axios from "axios";

export function Menu() {

    const [products, setProducts] = useState<Product[]>([]);

    // get data from backend
    // const getMenu = async() => {
    //     try {
    //         const response = await fetch(`${PREFIX}/products`);
    //         if(!response.ok) {
    //             return;
    //         }
    //         const data = await response.json() as Product[];

    //         setProducts(data);
    //     } catch(e) {
    //         console.error(e);
    //         return;
    //     }
    // };
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getMenu = async () => {
        try {
            setIsLoading(true);         // product loading starts
            await new Promise<void>((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 4000);
            });
            const {data} = await axios.get<Product[]>(`${PREFIX}/products`);
            setProducts(data);
            setIsLoading(false);        // product loading finished
        } catch(e) {
            console.error(e);
            setIsLoading(false);        // stop loading if error
            return;
        }
    };

    useEffect(() => {
        getMenu();
    }, []);

    return <>
        <div className={styles['head']}>
            <Header>Menu</Header>
            <Search placeholder="Search"/>
        </div>
        <div>
            {!isLoading && products.map(prod => (
            <ProductCard name={prod.name}
                ingredients={prod.ingredients.join(', ')}
                image="prod.image" price={prod.price} rating={prod.rating}
                Id={prod.Id} key={prod.Id}/>
            ))}
            {isLoading && <>Please wait...</>}
        </div>
    </>;
};