import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';
import type { ProductCardProps } from './ProductCard.props';

function ProductCard(props: ProductCardProps) {
    return <Link to={`/product/${props.Id}`} className={styles['link']}>
        <div className={styles['card']} >
                <div className={styles['head']} 
                     style={{ backgroundImage: 'url(/pizza-example.jpg))' }}>
                {/* <div className={styles['head']} style={{ backgroundImage: `url('${props.image}')` }}> */}
                    <img src='/pizza-example.jpg' className={styles['hard-image']}/>
                    <div className={styles['price']}>
                        {props.price}&nbsp;
                        <span className={styles['currency']}>U$</span>
                    </div>
                    <button className={styles['add-to-cart']}>
                        <img src='/cart-button-icon.svg' alt='add to cart'/>
                    </button>
                    <div className={styles['rating']}>
                        {props.rating}&nbsp;
                        <img src='/star-icon.svg' alt='star'/>
                    </div>
                </div>
                <div className={styles['footer']}>
                    <div className={styles['title']}>{props.name}</div>
                    <div className={styles['description']}>{props.ingredients}</div>
                </div>
           </div>
    </Link>;
};

export default ProductCard;