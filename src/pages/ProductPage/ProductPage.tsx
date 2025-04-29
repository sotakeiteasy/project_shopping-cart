import { ProductCard } from "@/components";
import { useParams } from 'react-router';
import { useEffect, useState } from "react";
import { Product } from "@/utils/types";
import { useCart } from "@/utils/hooks/useCart";

export default function ProductPage() {
    const [product, setProduct] = useState<Product>()
    const { id } = useParams();
    const { cart } = useCart()
    const countCart = cart.length

    useEffect(() => {
        async function getProducts() {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data: Product = await response.json();
            setProduct(data)
        }
        getProducts();
    }, [id]);

    return (
        <>
            <div>I was to lazy to make this page... I have enough css/html practice for now and this site for router/react only</div>
           { product && <ProductCard product={product} countCart={countCart} />}
        </>
    )
}