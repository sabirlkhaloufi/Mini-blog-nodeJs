const avie = require('../controller/avieController.js');
const Avie = require("../models/avieModel")
const router = require("express").Router();
  
    
router.post("/addAvie", avie.create);

router.get("/getAllAvie", avie.getAllAvie);

router.get("/getAvie/:id", avie.findOne);

router.put("/updateAvie/:id", avie.update);

router.delete("/deleteAvie/:id", avie.delete);



router.get('/Avis', async (req, res) => {
    res.render('dashboard/Avis/Avis.ejs',
    
    {
       avis:[
           {
               avie:"ksksk"
           },
           {
               avie:"ksksk"
           },
           {
               avie:"ksksk"
           }
       ]
    }
     )
 })

 
 router.get('/addAvie', (req, res) => {
    res.render('dashboard/Avis/addAvies.ejs')
})



module.exports = router;