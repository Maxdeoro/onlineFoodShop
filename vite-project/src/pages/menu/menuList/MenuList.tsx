import ProductCard from "../../../components/productCard/ProductCard";
import type { MenuListProps } from "./MenuList.props";
import styles from './MenuList.module.css';

const MenuList = ({products}: MenuListProps) => {
    return  <div className={styles['wrapper']}>
                {products.map(prod => (
                <ProductCard name={prod.name}
                    ingredients={prod.ingredients.join(', ')}
                    image="prod.image" price={prod.price} rating={prod.rating}
                    Id={prod.Id} key={prod.Id}
                />
            ))}
            </div>
};

export default MenuList;