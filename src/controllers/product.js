const Product = require("../models/product");



const getAllProduct = async(req ,res) => {
    const myData = await Product.find({});
    res.status(200).json({myData})
};

const getAllProductTesting = async (req , res)=>{
    res.status(200).json({msg: "I am getallproducttesting"})
};

module.exports = {getAllProduct,getAllProductTesting};