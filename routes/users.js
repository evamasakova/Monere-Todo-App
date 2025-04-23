const express = require('express');
const router = express.Router();
const { allowedRoles } = require("../middlewares/auth");
const usersController = require("../controllers/users");


/**
 * Sends hello world
 * URL: http://localhost:4000/v1/users/
 * Method: GET
 */
router.get('/:name/:city/:role', allowedRoles(["basic-user", "premium-user"]), usersController.stinkyFunction);
router.get("/:id", usersController.getAllUsers);
router.post("/", usersController.createUser);
router.put("/:id", usersController.updateUser);
router.delete("/:id", usersController.deleteUser);

module.exports = router;
