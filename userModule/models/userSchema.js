"use strict";
import { Schema } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  last_name: { type: String, 
   // required: true 
  },
  dni: {
    type: String,
    //required: false,
    trim: true,
    //unique: true,
    lowercase: true,
    //index: { unique: true },
  },
  telf: {
    type: String, //required: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    index: { unique: true },
  },
  password: {
    type: String,
    //required: true,
  },
  verificado: { type: Boolean, default: false },
  status: { type: Boolean, default: true, require: true },
  role: { type: Schema.Types.ObjectId, ref: "role", required: true },
  googleId: {
    type: String,
    default: null,
  },
  facebookId: {
    type: String,
    default: null,
  },
  photo: {
    type: String,
    default: null,
  },
  verificationCode: {
    type: String,
  },
  createdAt: { type: Date, default: Date.now, require: true },
});

const UsuarioSchema = new Schema({
  cedula: { type: String },
  nombres: { type: String, required: true },
  telefono: { type: String, required: true },
  rol_user: { type: Schema.Types.ObjectId, ref: "rol_user", required: true },
  correo: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  password_temp: { type: String },
  foto: { type: String },
  estado: { type: String, default: "On" },
  googleId: {
    type: String,
    default: null,
  },
  facebookId: {
    type: String,
    default: null,
  },
  createdAt: { type: Date, default: Date.now, require: true },
});

// Exportar el modelo de role
export { userSchema, UsuarioSchema };
