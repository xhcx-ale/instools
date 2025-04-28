import { Router } from "express";
import { check } from "express-validator";
import { admRole, fieldVal, jwtVal } from "../middlewares/index.js";
import {
  createDork,
  deleteDork,
  getDork,
  updateDork,
} from "../controllers/index.js";
import { catIdExs } from "../helpers/index.js";

const router = Router();

//Obtener todas las categorías - público
router.get("/", getDork);

//Crear categoria - privado - cualquier persona con un token válido
router.post(
  "/",
  [jwtVal, admRole, check("dork", "Campo obligatorio").notEmpty(), fieldVal],
  createDork
);

//Actualizar - privado - cualquier persona con un token válido
router.put(
  "/:id",
  [
    jwtVal,
    admRole,
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(catIdExs),
    check("dork", "Campo obligatorio").notEmpty(),
    fieldVal,
  ],
  updateDork
);

//Borrar categoría - privado - admin
router.delete(
  "/:id",
  [
    jwtVal,
    admRole,
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(catIdExs),
    fieldVal,
  ],
  deleteDork
);

export default router;
