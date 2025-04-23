const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categories");


/**
 * Sends hello world
 * URL: http://localhost:4000/v1/categories/
 * Method: GET
 */
router.get("/all", categoriesController.getAllCategories);
router.post("/create", categoriesController.createCategory);
router.get("/:id", categoriesController.findCategoryById);


module.exports = router;