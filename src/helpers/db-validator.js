import Role from "../models/usr.role.js";
import { Usuario } from "../models/index.js";

const roleExs = async (role = "") => {
  const existeRol = await Role.findOne({ role });
  if (!existeRol) {
    throw new Error(`El rol ${role} no existe!, ${JSON.stringify(existeRol)}`);
  }
};

const emailExs = async (correo = "") => {
  //emailCheck
  const takenMail = await Usuario.findOne({ correo });
  if (takenMail) {
    throw new Error(`Correo ${correo} en uso`);
  }
};

const usrIdExs = async (id) => {
  const idInDb = await Usuario.findById(id);
  if (!idInDb) {
    throw new Error(`ID ${id} no está en DB`);
  }
};

const catIdExs = async (id) => {
  const idInDb = await Category.findById(id);
  if (!idInDb) {
    throw new Error(`ID ${id} no está en DB`);
  }
};

const prodIdExs = async (id) => {
  const idInDb = await Product.findById(id);
  if (!idInDb) {
    throw new Error(`ID ${id} no está en DB`);
  }
};

const allowedCollections = ( collection = '', colletions = []) => {
  const included = colletions.includes( collection )
  if (!included) {
    throw new Error(`La colección ${ collection } no es válida!`)
  }
  return true
}

export { roleExs, emailExs, usrIdExs, catIdExs, prodIdExs, allowedCollections };
