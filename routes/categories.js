const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categories");

/**
 * Endpoint routes for categories.
 */
router.get("/", categoriesController.getAllCategories);
router.post("/", categoriesController.createCategory);
router.get("/:id", categoriesController.getCategoryById);


module.exports = router;