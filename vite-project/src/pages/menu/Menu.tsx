import Header from "../../components/header/Header";
import { ProductCard } from "../../components/productCard/ProductCard";
import Search from '../../components/search/Search';
import styles from './Menu.module.css';

export function Menu() {
    return <>
        <div className={styles['head']}>
            <Header>Menu</Header>
            <Search placeholder="Search"/>
        </div>
        <div>
            <ProductCard title="Pizza" description="Lorem ipsum dolor sit amet consectetur"
             image="/product-demo.png" price={150} rating={4} Id={55}/>
        </div>
    </>;
};