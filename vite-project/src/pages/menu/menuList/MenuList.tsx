import ProductCard from "../../../components/productCard/ProductCard";
import type { MenuListProps } from "./MenuList.props";

const MenuList = ({products}: MenuListProps) => {
    return products.map(prod => (
            <ProductCard name={prod.name}
                ingredients={prod.ingredients.join(', ')}
                image="prod.image" price={prod.price} rating={prod.rating}
                Id={prod.Id} key={prod.Id}/>
            ))
};

export default MenuList;