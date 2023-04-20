require('./config/database');
const Sneaker = require('./models/sneaker').Sneaker;
const data = require('./data');


 Sneaker.deleteMany({})
  .then(function(results) {
    console.log(results);
    return Sneaker.create(data.sneakers);
  })
  .then(function(sneakers) {
    console.log(sneakers);
  })
  .then(function() {
    process.exit();
 });
