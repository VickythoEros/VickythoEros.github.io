const router = require('express').Router();

router.get('/inscription', (req, res)=>{
    res.render('layouts/inscription', { title: 'D-Way - Inscription' });
});

router.post('/inscrire', (req, res)=>{
   
});



module.exports = router;
