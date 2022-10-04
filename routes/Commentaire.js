const Commentaire = require('../controller/commentairController');

var router = require("express").Router();
  
    
router.post("/", Commentaire.create);

router.get("/", Commentaire.findAll);

router.get("/:id", Commentaire.findOne);

router.put("/:id", Commentaire.update);

router.delete("/:id", Commentaire.delete);



// app.use('/api/articles', router);
module.exports = router;