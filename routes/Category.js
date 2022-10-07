const category = require("../controller/categorieController.js");
const router = require("express").Router();


router.post("/addcategory", category.create);
router.get("/category", category.findAll);
router.get("/updateCategory/:id", category.findOne);
router.post("/updateAddCategory/:id", category.update);
router.get("/deleteCategory/:id", category.delete);




// router.get("/category", (req, res) => {
//   res.render("dashboard/category/category.ejs");
// });


// router.put("/:id", category.update);


// app.use('/api/articles', router);
module.exports = router;
