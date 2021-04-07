const router = require('express').Router();

router.get('/soi-meme', (req, res)=>{
    // on fait la demande pour soi-même, on a donc pas besoin de remplir un formulaire
    // on vérifie si le numéro est bien dans la BD. Si oui, on demande le paiement avant de continuer les opérations. Sinon, on lui signale que son numéro n'est pas répertorié
    res.render('#');
});

router.get('/tiers', (req, res)=>{
    // on fait pour un tiers, on doit donc remplir le formulaire
    res.render('#');
});

router.post('/soi-meme', (req, res)=>{
  
    
});

module.exports = router;