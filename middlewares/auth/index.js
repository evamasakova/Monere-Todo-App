//["basic-user, premium-user"]
export const allowedRoles = (data) => {
  return (req, res, next) => {
    console.log(data)
    console.log(req.params.role)
    if (data.includes(req.params.role) || req.params.role === "admin") return next();
    return res.status(403).send({
      message: "You are not authorized for this action",
    });
  };
};
