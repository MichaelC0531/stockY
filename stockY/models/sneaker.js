const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    username: String
    
})
const sneakerSchema = new Schema ({
    brand: {type: String, required: true, lowercase: true},
    model: {type: String, required: true, unique: true, lowercase: true},
    size: {type: Number, required: true},
    bid: {type: Number, default: 0},
    ask: Number,
    bidder: [userSchema],
    seller: [userSchema]
})
module.exports = mongoose.model('Sneaker', sneakerSchema);