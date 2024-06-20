'use strict'

import express from 'express';
import Controller  from '../controllers/ActualizarModel.js';
import {auth} from '../middlewares/authenticate.js';
import multiparty from 'connect-multiparty';

const updat = express.Router();

// Rutas para la actualización de diferentes modelos
const path = multiparty({
    uploadDir: './uploads/avatar/',
    maxFieldsSize: 50 * 1024 * 1024
});
updat.put('/actualizar_usuario/:id', [auth, path], Controller.actualizarUsuario);
updat.put('/actualizar_actividad_proyecto/:id', auth, Controller.actualizarActividadProyecto);

const path1 = multiparty({
    uploadDir: './uploads/incidentes/',
    maxFieldsSize: 50 * 1024 * 1024
});
updat.put('/actualizar_incidente_denuncia/:id', [auth, path1], Controller.actualizarIncidenteDenuncia);

updat.put('/actualizar_categoria/:id', auth, Controller.actualizarCategoria);
updat.put('/actualizar_subcategoria/:id', auth, Controller.actualizarSubcategoria);
updat.put('/actualizar_encargado_categoria/:id', auth, Controller.actualizarEncargadoCategoria);
updat.put('/actualizar_rol_usuario/:id', auth, Controller.actualizarRolUsuario);
updat.put('/actualizar_estado_incidente/:id', auth, Controller.actualizarEstadoIncidente);
updat.put('/actualizar_estado_actividad_proyecto/:id', auth, Controller.actualizarEstadoActividadProyecto);
updat.put('/actualizar_tipo_actividad_proyecto/:id', auth, Controller.actualizarTipoActividadProyecto);
updat.put('/actualizar_direccion_geo/:id', auth, Controller.actualizarDireccionGeo);
updat.put('/actualizar_permisos/:id', auth, Controller.actualizarPermiso);

export default updat;
