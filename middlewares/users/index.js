export const checkIfStinky = (req, res, next) => {
  if (res.locals.data === "evca") {
    res.status(200).send({
      message: "You are stinky",
    });
  } else {
    res.status(200).send({
      message: `${res.locals.data} is not stinky`,
    });
  }
};

export const checkCity = (req, res, next) => {
  const { name, city } = req.params;
  if (city === "dobrovice") {
    res.status(500).send({
      message: "Tohle mesto smrdi",
    });
  } else {
    res.locals.data = name;
    next();
  }
};
