const router = require('express').Router();


router.get('/connexion', (req, res)=>{
    res.render('layouts/connexion', { title: 'D-Way - Connexion' });
});


router.post('/connexion', (req, res)=>{
    const infos_login = req.body;

});

module.exports = router;