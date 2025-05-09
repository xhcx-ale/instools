import { Schema, model } from "mongoose";

const roleSchema = Schema({
  role: {
    type: String,
    required: [true, "Campo obligatorio"],
  },
});

export default model("Role", roleSchema);
