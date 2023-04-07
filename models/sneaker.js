const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bidSchema = new Schema ({
    bid: {type: Number, default: 0},
})

const askSchema = new Schema ({
    ask: {type: Number, default: 0},
})

const userSchema = new Schema ({
    name: String,
    bid: [bidSchema],
    ask: [askSchema],
    googleId: String
}, {
    timestamps: true
})

const sneakerSchema = new Schema ({
    brand: {type: String, required: true, lowercase: true},
    model: {type: String, required: true, unique: true, lowercase: true},
    size: {type: Number, required: true},
    // bid: [bidSchema],
    // ask: [askSchema],
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema);
module.exports = mongoose.model('Sneaker', sneakerSchema);
