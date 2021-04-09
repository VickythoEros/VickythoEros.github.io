const router = require('express').Router();


// page d'accueil
router.get('/', function(req, res, next) {
  
   res.render('layouts/mairie/accueil', { title: 'D-Way'});
 
  });


module.exports = router;