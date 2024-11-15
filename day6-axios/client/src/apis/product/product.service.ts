import Product from '../../components/product';
import http from '../axios';

export const getProducts = () => http.get('/products');

export const saveProd = (product: Product) => http.post('/products', product);