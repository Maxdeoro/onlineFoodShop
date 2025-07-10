import { useParams } from "react-router-dom";

export function Product() {

    const { Id } = useParams();

    return <>Product - {Id}</>;
};