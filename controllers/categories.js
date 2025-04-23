const Category = require("../models/categories");

exports.getAllCategories = async (req, res, next) => {
  try {
    const result = await Category.find();
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Categories found!",
        payload: result,
      });
    }npm 
    res.status(404).send({ msg: "Categories not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};


exports.createCategory = async (req, res, next) => {
  try {
    const data = new Category({
      name: req.body.name,
      icon: req.body.icon
      
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "Category created",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Category was not created",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};


exports.findCategoryById = async (req, res, next) => {
    try {
        const result = await Category.findById(req.params.id);
        if (result ) {
          return res.status(200).send({
            msg: "Category found!",
            payload: result,
          });
        }npm 
        res.status(404).send({ msg: "Category not found" });
      } catch (error) {
        res.status(500).send(error);
      }
}
