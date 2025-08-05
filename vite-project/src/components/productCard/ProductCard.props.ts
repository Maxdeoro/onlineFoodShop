// import type { HTMLAttributes } from "react";

// export interface ProductCardProps extends HTMLAttributes<HTMLDivElement>{
//     name: string;
//     ingredients: string;
//     image: string;
//     price: number;
//     rating: number;
//     id: number;
// };

import type { HTMLAttributes } from "react";

export interface ProductCardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'id'> {
    name: string;
    ingredients: string;
    image: string;
    price: number;
    rating: number;
    id: number;
};
