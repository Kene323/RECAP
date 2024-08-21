// Import
const { message } = require("statuses")
const Product = require("../model/productModel")

//Creeate a product 
const createProduct = async (req, res)=>{
    try{
        const {name, price, units} = req.body

    const productData = await Product.create({
        name, price, units
    })
    productData.save
    return res.status(201).json({
        success: true,
        message: "Product created succesfully",
        result: productData
    })
    }catch(err){
        res.status(500).json({
            success: false,
            message: [err.message, "1"]
        })
    }
}

// get all products
const getAllProducts = async (req, res)=>{
    try{
        const getProducts = await Product.find()
        res.status(200).json({
            success: true,
            message: "All Products obtained!!",
            result: getProducts
        })
    }catch(err){
        res.status(500).json({
            success: false,
            message: [err.message, "2"]
        })
    }
}


//get a single product 
const getSingleProduct = async (req, res)=>{
    try{
        const singleProduct = await Product.findById(req.params.id)
        if(!singleProduct){
            return res.status(404).json({
                success: false,
                message: "Product not found"
            })
        }else{
            return res.status(200).json({
                success: true,
                message: "Product Found!!",
                result: singleProduct
            })
        }
    }catch(err){
        res.status(500).json({
            success: false,
            message: [err.message, "3"]
        })
    }
}

// Delete a product
const deleteProduct = async (req, res)=>{
    try{
        const productDelete = await Product.findByIdAndDelete(req.params.id)
        if(!productDelete){
            return res.status(404).json({
                success: false,
                message: "Product not found"
            })
        }else{
            return res.status(200).json({
                success: true,
                message: "Product Deleted successfully!!",
                result: productDelete
            })
        }
    }catch(err){
        res.status(500).json({
            success: false,
            message: [err.message, "4"]
        })
    }
}

// Update a product
const updateProduct = async (req, res)=>{
    try{
        const {name, price, units} = req.body
        const product = await Product.findById(req.params.id)
        if(!product){
            return res.status(404).json({
                success: false,
                message: "Product not found"
            })
        }else{
        const productUpdate = await Product.findByIdAndUpdate(product._id, {name, price, units}, {new: true})
            return res.status(200).json({
                success: true,
                message: "Product updated successfully!!",
                result: productUpdate
            })
        }
    }catch(err){
        res.status(500).json({
            success: false,
            message: [err.message, "5"]
        })
    }
}

// exports
module.exports = {createProduct, getAllProducts, getSingleProduct, deleteProduct, updateProduct}