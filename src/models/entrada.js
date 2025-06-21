import { Schema, model } from "mongoose";

const entSchema = Schema({
  empleado: {
    type: Schema.Types.ObjectId,
    ref: "Empleado",
    required: true,
  },
  entrada: {
    type: Date,
    default: Date.now
  },
  sucursal: {
    type: Schema.Types.ObjectId,
    ref: "Suc",
    required: true,
  },
});

entSchema.methods.toJSON = function () {
  const { __v, _id, ...entrada } = this.toObject();
  entrada.id = _id
  return entrada;
};

export default model("Entrada", entSchema);