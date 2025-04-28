import { jwtGen } from "../helpers/index.js";
import {Usuario} from "../models/index.js";
import bcryptjs from "bcryptjs";

const login = async (req, res) => {
  const { correo, password } = req.body;

  try {
    //Email ver
    const user = await Usuario.findOne({ correo });
    if (!user) {
      return res.status(400).json({
        msg: "Correo invalido!",
      });
    }
    //User act ver
    if (!user.estado) {
      return res.status(400).json({
        msg: "Usuario desactivado!",
      });
    }
    //Password ver
    const psswVal = bcryptjs.compareSync(password, user.password);
    if (!psswVal) {
      return res.status(400).json({
        msg: "Contraseña incorrecta!",
      });
    }
    //JWT Gen
    const token = await jwtGen(user.id);

    res.json({
      msg: "login si (y)",
      user,
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "Ya chingó la página, culero...",
    });
  }
};

export default login;
