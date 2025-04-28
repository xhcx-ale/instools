const admRole = (req, res, next) => {
  if (!req.user) {
    return res.status(500).json({
      msg: "token no validado!",
    });
  }

  const { role, nombre } = req.user;

  if (role !== "ADMIN_ROLE") {
    return res.status(401).json({
      msg: `${nombre} NO ERES AKMI WEEE`,
    });
  }

  next();
};

const hvaRole = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(500).json({
        msg: "token no validado!",
      });
    }

    if ( !roles.includes(req.user.role)) {
        return res.status(401).json({
            msg: `Se re quiere algún Rol: ${roles}`
        })
    }

    next();
  };
};

export { admRole, hvaRole };
