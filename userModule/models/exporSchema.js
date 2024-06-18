"use strict";
import { model } from "mongoose";
import { roleuserSchema, RolUserSchema } from "./rolUserSchema.js";
import { userSchema, UsuarioSchema } from "./userSchema.js";
import permisoSchema from "./permisoSchema.js";

export const Model = {
  Usuario: model("usuario", UsuarioSchema),
  User: model("user", userSchema),
  Role: model("role", roleuserSchema),
  Rol_user: model("rol_user", RolUserSchema),
  Permiso: model("permiso", permisoSchema),
};
