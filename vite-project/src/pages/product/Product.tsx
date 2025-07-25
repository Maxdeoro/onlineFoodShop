import { useLoaderData } from "react-router-dom";
import type { Product } from "../../interfaces/product.interface";

export function Product() {

    const data = useLoaderData() as Product;

    return (
            <>Product - {data.name}</>
    );
};