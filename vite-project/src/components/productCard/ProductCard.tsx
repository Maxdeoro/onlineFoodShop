import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';
import type { ProductCardProps } from './ProductCard.props';

function ProductCard({name, ingredients, image, price, rating, Id}: ProductCardProps) {
    return <Link to={`/product/${Id}`} className={styles['link']}>
        <div className={styles['card']} >
                <div className={styles['head']} style={{ backgroundImage: `url('${image}')` }}>
                    <div className={styles['price']}>
                        {price}&nbsp;
                        <span className={styles['currency']}>U$</span>
                    </div>
                    <button className={styles['add-to-cart']}>
                        <img src='/cart-button-icon.svg' alt='add to cart'/>
                    </button>
                    <div className={styles['rating']}>
                        {rating}&nbsp;
                        <img src='/star-icon.svg' alt='star'/>
                    </div>
                </div>
                <div className={styles['footer']}>
                    <div className={styles['title']}>{name}</div>
                    <div className={styles['description']}>{ingredients}</div>
                </div>
           </div>
    </Link>;
};

export default ProductCard;