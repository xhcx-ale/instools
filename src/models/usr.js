import { Schema, model } from "mongoose";

const usrSchema = Schema({
  nombre: {
    type: String,
    required: [true, "Camppo obligatorio"],
  },
  correo: {
    type: String,
    required: [true, "Campo obligatorio"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Campo obligatorio"],
  },
  role: {
    type: String,
    required: true,
    emun: ["ADMIN_ROLE", "USER_ROLE"],
  },
  estado: {
    type: Boolean,
    default: true,
  },
});

usrSchema.methods.toJSON = function () {
  const { __v, password, _id, ...usuario } = this.toObject();
  usuario.uid = _id
  return usuario;
};

export default model("Usuario", usrSchema);