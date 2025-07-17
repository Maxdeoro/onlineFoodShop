import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Search from '../../components/search/Search';
import { PREFIX } from "../../helpers/API";
import type { Product } from "../../interfaces/product.interface";
import styles from './Menu.module.css';
import axios, { AxiosError } from "axios";
import MenuList from "./menuList/MenuList";

function Menu() {

    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>();

    const getMenu = async () => {
        try {
            setIsLoading(true);         // product loading starts

            // imitation of bad internet connection
            await new Promise<void>((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 2000);
            });
            const {data} = await axios.get<Product[]>(`${PREFIX}/products`);
            setProducts(data);
            setIsLoading(false);        // product loading finished
        } catch(e) {
            console.error(e);
            if(e instanceof AxiosError) {
                setError(e.message);
            }
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
            {error && <>Something went wrong:(...{error}</>}
            {!isLoading && <MenuList products={products}/>}
            {isLoading && <>Please wait...</>}
        </div>
    </>;
};

export default Menu;