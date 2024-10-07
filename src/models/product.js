const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    stock_quantity: {
        type: Number,
        required: true
    },
   
    image_url: {
        type: String
    },
    brand: {
        type: String
    },
    weight: {
        type: Number
    },
    dimensions: {
        type: String
    },
    material: {
        type: String
    },
    color: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

// Create the model
module.exports = mongoose.model('Product', productSchema);

 
