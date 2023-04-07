require('./config/database');
const Sneaker = require('./models/sneaker');
const data = require('./data');

 // clear out all movies and performers to prevent dups
 Sneaker.deleteMany({})
  .then(function(results) {
    console.log(results);
    return Sneaker.create(data.sneakers);
  })
  .then(function(sneakers) {
    console.log(sneakers);
    process.exit();
  })
 .then(function() {
   process.exit();
 });
