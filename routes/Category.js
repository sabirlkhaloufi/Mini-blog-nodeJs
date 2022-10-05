const category = require("../controller/categorieController.js");
var router = require("express").Router();

router.post("/addcategory", category.create);

router.get("/category", category.findAll);

// router.get("/category", (req, res) => {
//   res.render("dashboard/category/category.ejs");
// });

// router.get("/:id", category.findOne);

// router.put("/:id", category.update);

// router.delete("/:id", category.delete);

// app.use('/api/articles', router);
module.exports = router;
