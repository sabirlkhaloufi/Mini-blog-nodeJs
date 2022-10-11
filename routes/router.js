const {afficher,ajouter,modifier,supprimer,edit} = require('../controller/commentairController.js');
const router = require("express").Router();


router.get('/afficher',afficher);
// ! pour afficher la forme 
router.get('/ajouter',(req,res)=>{
    res.render('ajouter')
});
// ! action de l'insertion 
router.post('/ajouter',ajouter)
// ! action de l'insertion 
router.post('/article/ajouter',ajouter)
// ! pour afficher la fome rempli avec les donnes 
router.post('/edit',edit);
// ! action de la modification 
router.post('/modifier',modifier);
// ! action supp
router.post('/supprimer',supprimer);

  
module.exports= router