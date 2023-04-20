const Sneaker = require('../models/sneaker').Sneaker

module.exports = {
    index,
    show,
    new: newSell,
    create,
    update,
}

function index(req, res) {
    Sneaker.find({}, function(err, sneakers) {
        res.render('sneakers/index', {sneakers, user: req.user})
    })
}
function show(req, res) {
    Sneaker.findById(req.params.id, function(err, sneaker) {
        res.render('sneakers/product', {sneaker})
    })
}
function newSell(req, res) {
    res.render('sneakers/new')
}
function create (req, res) {
    const sneaker = new Sneaker(req.body)
    sneaker.save(function(err) {
        if (err) return res.redirect('/sneaker/new')
        res.redirect('/sneakers')
    })
}
function update (req, res) {
    Sneaker.findById(req.params.id, function(err, sneaker) {
        console.log(req.body)
        if (req.body.update === 'bid' && req.body.price > sneaker.bid) {
            sneaker.bid = req.body.price
        } else if (req.body.update === 'ask' && req.body.price < sneaker.ask) {
            sneaker.ask = req.body.price
        } 
        sneaker.save(function(err) {
            if (err) return res.redirect('/sneaker/product')
            res.render('sneakers/product', {sneaker} )
        })
    })
}
