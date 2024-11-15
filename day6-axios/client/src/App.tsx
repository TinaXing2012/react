import { useState } from "react";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import Product from "./components/product";

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);

  const saveProduct = (prod: Product) => {
    setProducts([...products, prod]);
  }
  
  return (
    <div>
      <ProductList products={products} setProducts={setProducts}/>
      <AddProduct saveProduct={saveProduct}/>
    </div>
  )
}
