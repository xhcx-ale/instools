import { Schema, model } from "mongoose";

const DorkSchema = Schema({
  dork: {
    type: String,
    required: [true, "Campo obligatorio"],
    unique: true,
  },
  estado: {
    type: Boolean,
    default: true,
    rerquired: true,
  },
});

DorkSchema.methods.toJSON = function () {
  const { __v, estado, _id, ...data } = this.toObject();
  data.uid = _id;
  return data;
};

export default model("Dork", DorkSchema);
