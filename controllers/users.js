const { checkIfStinky, checkCity } = require("../middlewares/users");
exports.stinkyFunction = [checkCity, checkIfStinky];

exports.getAllUsers = (req, res, next) => {
  try {
    const data = req.body;
    res.status(200).send({
      message: "Data recieved",
      payload: data,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createUser = (req, res, next) => {
  try {
    const data = req.body;
    res.status(200).send({
      message: "Data recieved",
      payload: data,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateUser = (req, res, next) => {
  try {
    const data = req.body;
    res.status(200).send({
      message: "Cat updated",
      payload: data,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteUser = (req, res, next) => {};
