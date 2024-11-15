import { v4 as uuidv4 } from 'uuid';

let products: Product[] = [];

export default class Product {

    constructor(public id: string | null, public title: string, public price: number, public description: string){
    }

    save(){
        // this.id = new String(Math.random()).toString();
        this.id = uuidv4();
        products.push(this);
        return this;
    }

    update(){
        const index = products.findIndex(p => p.id === this.id);
        if(index > -1) {
            products[index] = this;
        } else {
            throw new Error(`No Product found with id: ${this.id}`);
        }
    }

    static fetchAll(){
        return products;
    }

    static fetchById(id: string){
        const product = products.find(p => p.id === id);
        if(product){
            return product;
        } else {
            throw new Error(`No Product found with id: ${id}`);
        }
    }

    static deleteById(id: string){
        const index = products.findIndex(p => p.id === id);
        if(index > -1) {
           products = products.filter(p => p.id !== id);
        } else {
            throw new Error(`No Product found with id: ${id}`);
        }
    }


}