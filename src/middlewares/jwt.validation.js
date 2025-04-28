import jwt from "jsonwebtoken";
import Usuario from "../models/usr.js";

const jwtVal = async (req, res, next) => {
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      msg: "Petición sin token!",
    });
  }

  try {
    const { uid } = jwt.verify(token, process.env.KEY);
    const getUser = await Usuario.findById(uid);

    if (!getUser) {
      return res.status(401).json({
        msg: 'Usuario no tiene permitido eliminar, eliminado.'
      })
    }

    //verificar uid true
    if (!getUser.estado) {
      return res.status(401).json({
        msg: "Usuario no tiene permitido eliminar, desactivado.",
      });
    }

    req.user = getUser;

    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({
      msg: "Token invalido",
    });
  }
};

export default jwtVal;
