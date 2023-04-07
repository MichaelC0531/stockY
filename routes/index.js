var express = require('express');
var router = express.Router();
const passport = require('passport');
/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('/sneakers');
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/sneakers',
    failureRedirect : '/sneakers'
  }
));

router.get('/logout', function(req, res, next) {
  req.logout(function(err){
    res.redirect('/sneakers')
  })
})
module.exports = router;
