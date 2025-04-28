import { Schema, model } from "mongoose";

const ventaSchema = Schema({
  fecha: {
    type: String,
    unique: true
  },
  /*sucursal: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
  },*/
  T1: {
    type: Number,
    default: 0,
  },
  T2: {
    type: Number,
    default: 0,
  },
  T3: {
    type: Number,
    default: 0,
  },
  Total: {
    type: Number,
    default: 0,
  },
});

ventaSchema.methods.toJSON = function () {
  const data = this.toObject();
  return data;
};

export default model("Venta", ventaSchema);