import { Request, Response } from 'express';
import Product from '../models/Product';

export const getAllProducts = async(req: Request, res: Response) => {
    try{
        const products = await Product.findAll();
        res.json(products);
    } 
    catch(error) {
        res.status(500).json({ error: "Database Error", details: error});
    }
};

export const getProductByID = async(req: Request, res: Response) => {
    try{
        console.log(req.params.id)
        const product = await Product.findByPk(req.params.id);
        console.log(product)
        if(!product) res.status(404).json({message: "Product not Found"});
        res.json(product);
    }
    catch(error) {
        res.status(500).json({error: "Database error", details: error});
    }
};

export const createProduct = async(req: Request, res: Response) => {
    try{
        console.log(req.body);
        const product = await Product.create({
            name: req.body.name,
            price: req.body.price,
            stock: req.body.stock,
            description: req.body.description
        });
        console.log(product)
        res.status(201).json({message: "Product added", product});
    } 
    catch(error){
        //console.log("Flow stopped")
        res.status(500).json({error: "Database error", details: error});
    }
};

export const updateProduct = async(req: Request, res: Response) => {
    try{
        const product = await Product.findByPk(req.params.id);
        if(!product) res.status(400).json({message: "Product not found"});
        if(product!=null){
            await product.update(req.body);
        }
        
        res.status(200).json({message: "Product Updated", product});
    } 
    catch(error){
        res.status(500).json({error: "Database error", details: error});
    }
};

export const deleteProduct = async(req: Request, res: Response) => {
    try{
        const product = await Product.findByPk(req.params.id);
        if(!product) res.status(404).json({message: "Product not Found"});
        if(product!=null){
            await product.destroy();
        }
        
    } 
    catch(error){
        res.status(500).json({error: "Database error", details: error});
    }
};