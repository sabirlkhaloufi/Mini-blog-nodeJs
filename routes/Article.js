
    const articles = require("../controller/articleController.js");
    const router = require("express").Router();
  
    
    router.post("/", articles.create);
  
    router.get("/", articles.findAll);
  
    router.get("/:id", articles.findOne);
  
    router.put("/:id", articles.update);

    router.delete("/:id", articles.delete);

    

    // app.use('/api/articles', router);
    module.exports = router;
  