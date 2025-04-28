import bcryptjs from "bcryptjs";
import { Usuario } from "../models/index.js";

const usrGet = async (req, res) => {
  // const { dos, tres, cuatro } = req.query
  const { limit = 5, desde = 0 } = req.query;
  const query = { estado: true };
  //  const users = await Usuario.find(query).skip(Number(desde)).limit(Number(limit));
  //  const total = await Usuario.countDocuments(query)

  const [total, users] = await Promise.all([
    Usuario.countDocuments(query),
    Usuario.find(query).skip(Number(desde)).limit(Number(limit)),
  ]);

  res.json({
    total,
    users,
  });
};

const usrPost = async (req, res) => {
  const { nombre, correo, password, role } = req.body;
  const usr = new Usuario({ nombre, correo, password, role });

  //pssw encrypt
  const salt = bcryptjs.genSaltSync();
  usr.password = bcryptjs.hashSync(password, salt);

  //save
  await usr.save();
  res.json(usr);
};

const usrPut = async (req, res) => {
  const id = req.params.id;
  const { _id, password, google, correo, ...resto } = req.body;

  if (password) {
    //pssw encrypt
    const salt = bcryptjs.genSaltSync();
    resto.password = bcryptjs.hashSync(password, salt);
  }

  const usuario = await Usuario.findByIdAndUpdate(id, resto);

  res.json(usuario);
};

const usrPatch = (req, res) => {
  res.json({
    msg: "patch API",
  });
};

const usrDelete = async (req, res) => {
  const { id } = req.params;
  
  //Borrado físico
  //   const user = await Usuario.findByIdAndDelete(id)

  const user = await Usuario.findByIdAndUpdate(id, { estado: false });

  res.json(user);
};

export { usrGet, usrPost, usrPut, usrPatch, usrDelete };
