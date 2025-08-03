import { useEffect, useState, type ChangeEvent } from "react";
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
    const [filter, setFilter] = useState<string>();

    useEffect(() => {
        getMenu(filter);
    }, [filter]);

    const getMenu = async (name?: string) => {
        try {
            setIsLoading(true);         // product loading starts

            const {data} = await axios.get<Product[]>(`${PREFIX}/products`, {
                params: {
                    name,
                },
            });
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

    const updateFilter = (e: ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
    };

    return <>
        <div className={styles['head']}>
            <Header>Menu</Header>
            <Search placeholder="Search" onChange={updateFilter}/>
        </div>
        <div>
            {error && <>Something went wrong:(...{error}</>}
            {!isLoading && products.length > 0 && <MenuList products={products}/>}
            {isLoading && <>Please wait...</>}
            {!isLoading && products.length === 0 && <>Products not found.</>}
        </div>
    </>;
};

export default Menu;