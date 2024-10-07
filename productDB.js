const connectDB = require("./src/db/conn");
const Product = require("./src/models/product");
const ProductJson = require("./product.json");
const uri = "mongodb+srv://Ankit:Ylr8xC2TUaOvwuwA@ankitapi.wo93h.mongodb.net/?retryWrites=true&w=majority&appName=AnkitAPI";

const start = async () =>{
    try{
        await connectDB(uri)
        await Product.create(ProductJson);
        console.log("success")
    }catch(e){
        console.log("error")
    }
}

start();