require("dotenv").config();

const express = require("express")
// require("../src/db/conn")
const app = express();
const connectDB = require("./db/conn")
const PORT = process.env.PORT || 5000;

// const Product = require("../src/models/product")

// app.use(express.json());
//  app.post("/product", async(req, res)=>{
//     try{
// const addingproductrecord = new Product(req.body)
// console.log(req.body)
// addingproductrecord.save();
//     }catch(e){}
//  })

const product_routes = require("./routers/product");

app.get("/", (req,res)=>{
    res.send("hii")
});

app.use("/api/product" , product_routes)

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URL);
app.listen(PORT,()=>{
    console.log(`${PORT} YESS `);
});
    }catch(error){
        console.log(error)
    }
}

start();

