import { Request, Response, NextFunction } from "express";
import Product from "../models/product";

export const save = (req: Request, res: Response, next: NextFunction) => {
    const { title, price, description } = req.body;
    const newProduct = new Product(null, title, price, description).save();
    res.status(201).json(newProduct);
}

export const getAll = (req: Request, res: Response) => {
    res.json(Product.fetchAll());
}

export const getById = (req: Request, res: Response) => {
    res.json(Product.fetchById(req.params.id));
}

export const updateById = (req: Request, res: Response) => {
    const { title, price, description } = req.body;
    new Product(req.params.id, title, price, description).update();
    res.status(204).end();
}

export const deleteById = (req: Request, res: Response) => {
    res.status(204).json(Product.deleteById(req.params.id));
}