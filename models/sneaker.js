const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const priceSchema = new Schema ({
    bid: {type: Number, default: 0},
    ask: {type: Number, default: 0},
})


const userSchema = new Schema ({
    name: String,
    bidAndAsk: [priceSchema],
    googleId: String
}, {
    timestamps: true
})

const sneakerSchema = new Schema ({
    brand: {type: String, required: true, lowercase: true},
    model: {type: String, required: true, unique: true, lowercase: true},
    size: {type: Number, required: true},
    bidAndAsk: [priceSchema],
}, {
    timestamps: true
})

module.exports = {
  User: mongoose.model('User', userSchema),
  Sneaker: mongoose.model('Sneaker', sneakerSchema)
};

