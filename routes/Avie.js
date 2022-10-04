const avie = require('../controller/avieController.js');

const router = require("express").Router();
  
    
router.post("/", avie.create);

router.get("/", avie.findAll);

router.get("/:id", avie.findOne);

router.put("/:id", avie.update);

router.delete("/:id", avie.delete);



// app.use('/api/articles', router);
module.exports = router;