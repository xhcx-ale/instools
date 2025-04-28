import { Router } from "express";
import { body, check } from "express-validator";

// import { admRole, hvaRole } from "../middlewares/role.validation.js";
// import fieldVal from "../middlewares/usr.validation.js";
// import jwtVal from "../middlewares/jwt.validation.js";

import { admRole, hvaRole, fieldVal, jwtVal } from "../middlewares/index.js";

import {
  usrDelete,
  usrGet,
  usrPatch,
  usrPost,
  usrPut,
} from "../controllers/index.js";

import { roleExs, emailExs, usrIdExs } from "../helpers/index.js";

const router = Router();

router.get("/", usrGet);

router.post(
  "/",
  [
    jwtVal,
    admRole,
    check("nombre", "Ponga algo, pendejo!").notEmpty(),
    check("correo", "Pon un correo, animal...").isEmail(),
    check("correo").custom(emailExs),
    check("password", "Debe tener más de 6 carácteres").isLength({ min: 6 }),
    //check('role', 'Rol no válido...').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check("role").custom(roleExs),
    fieldVal,
  ],
  usrPost
);

router.put(
  "/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(usrIdExs),
    check("role").custom(roleExs),
    fieldVal,
  ],
  usrPut
);

router.patch("/", usrPatch);

router.delete(
  "/:id",
  [
    jwtVal,
    //admRole,
    hvaRole("ADMIN_ROLE", "VENTAS_ROLE", "ELPEPE_ROLE"),
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(usrIdExs),
    fieldVal,
  ],
  usrDelete
);

export default router;
