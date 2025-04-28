import { Router } from "express";
import { body, check } from "express-validator";

import  {login} from "../controllers/index.js";

import {fieldVal} from "../middlewares/index.js";

const router = Router();

router.post(
  "/",
  [
    check("correo", "Pon un correo, animal...").isEmail(),
    check("password", "Ponga la contraseña, pendejo!").notEmpty(),
    fieldVal,
  ],
  login
);

export default router;
