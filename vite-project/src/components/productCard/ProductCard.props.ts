import type { HTMLAttributes } from "react";

export interface ProductCardProps extends HTMLAttributes<HTMLDivElement>{
    title: string;
    description: string;
    image: string;
    price: number;
    rating: number;
    Id: number;
};