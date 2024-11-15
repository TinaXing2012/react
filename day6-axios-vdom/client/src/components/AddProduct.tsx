import { ChangeEvent, FormEvent, useState } from "react";
import { saveProd } from "../apis/product/product.service";
import Product from "./product";

type PropsType = {
    saveProduct: (prod: Product) => void
}

export default function AddProduct({ saveProduct }: PropsType) {
    const [product, setProduct] = useState<Product>({ title: '', price: 0, description: '' });


    const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    }

    const addNewProduct = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await saveProd(product);
            saveProduct(response.data);
            setProduct({ title: '', price: 0, description: '' });
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
            <h2>Add a new Product</h2>
            <form onSubmit={addNewProduct}>
                <label htmlFor="title">Title:</label><br />
                <input type="text" id="title" name="title" value={product.title} onChange={changeHandler} /><br />
                <label htmlFor="price">Price:</label><br />
                <input type="number" id="price" name="price" value={product.price} onChange={changeHandler} /><br /><br />
                <label htmlFor="description">Description:</label><br />
                <textarea id="description" name="description" value={product.description} onChange={changeHandler}></textarea><br /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
