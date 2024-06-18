'use strict';
import { Schema } from "mongoose";

// Definir el esquema de role
const roleuserSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  permisos: [{ type: Schema.Types.ObjectId, ref: 'permiso' }],
  orden: { type: Number,unique: true},
  createdAt: {type:Date, default: Date.now, require: true}
});

// Definición del esquema para el modelo de Rol_user
const RolUserSchema = new Schema({
  nombre: { type: String },
  orden: { type: Number,unique: true},
  createdAt: {type:Date, default: Date.now, require: true}
});

// Exportar el modelo de role
export {roleuserSchema,RolUserSchema};