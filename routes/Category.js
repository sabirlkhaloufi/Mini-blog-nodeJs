const category = require("../controller/categorieController.js");
const router = require("express").Router();

router.post("/addcategory", category.create);

router.get("/category", category.findAll);

// router.get("/category", (req, res) => {
//   res.render("dashboard/category/category.ejs");
// });

// router.get("/deleteCategory:id", category.findOne);

// router.put("/:id", category.update);

router.get("/deleteCategory/:id", category.delete);

// app.use('/api/articles', router);
module.exports = router;
