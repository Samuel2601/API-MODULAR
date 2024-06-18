"use strict";
import { Schema } from "mongoose";

// Definir el esquema de permiso
const permisoSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
   //se va nombreComponente
  nombreComponente: {
    type: String,
    required: true,
    unique: true,
  },
  user: [{ type: Schema.Types.ObjectId, ref: "user" }],
  createdAt: { type: Date, default: Date.now, require: true },
  //se va rolesPermitidos
  rolesPermitidos: [
    {
      type: Schema.Types.ObjectId,
      ref: "rol_user",
      required: true,
    },
  ],
});

// Exportar el modelo de role
export default permisoSchema;
