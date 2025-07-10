import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';
import type { ProductCardProps } from './ProductCard.props';
import type { FC } from 'react';

export const ProductCard: FC<ProductCardProps> = ({Id, price, image, title, rating,
    description, ...props}) => {
    return <Link to={`/product/${Id}`} className={styles['link']}>
        <div className={styles['card']} {...props}>
                <div className={styles['head']} style={{backgroundImage:`url('${image}')`}}>
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
                    <div className={styles['title']}>{title}</div>
                    <div className={styles['description']}>{description}</div>
                </div>
           </div>
    </Link>;
};