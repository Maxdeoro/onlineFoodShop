import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import ProductCard from "../../components/productCard/ProductCard";
import Search from '../../components/search/Search';
import { PREFIX } from "../../helpers/API";
import type { Product } from "../../interfaces/product.interface";
import styles from './Menu.module.css';

export function Menu() {

    const [products, setProducts] = useState<Product[]>([]);

    // get data from backend
    const getMenu = async() => {
        try {
            const response = await fetch(`${PREFIX}/products`);
            if(!response.ok) {
                return;
            }
            const data = await response.json() as Product[];

            setProducts(data);
        } catch(e) {
            console.error(e);
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
            {products.map(prod => (
            <ProductCard name={prod.name}
                ingredients={prod.ingredients.join(', ')}
                image="prod.image" price={prod.price} rating={prod.rating}
                Id={prod.Id} key={prod.Id}/>
            ))}
        </div>
    </>;
};