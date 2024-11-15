import { useEffect, useState } from "react";
import Product from "./product";
import { getProducts } from "../apis/product/product.service";
import './product.css';

type PropsType = {
    products: Product[];
    setProducts: (products: Product[]) => void;
}

export default function ProductList({ products, setProducts }: PropsType) {

    useEffect(() => {
        getProducts()
            .then(response => setProducts(response.data))
            .catch(err => console.log(err.message))
    }, []);

    return (
        <>
            <h1>Product List</h1>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(({ id, title, price, description }) => (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{title}</td>
                                <td>{price}</td>
                                <td>{description}</td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </>
    )
}
