import express from 'express';
import { auth } from '../middlewares/authenticate.js'; // Importar middleware de autenticación
import Controller from '../controllers/RegistroModel.js'; // Importar controlador
import multiparty from 'connect-multiparty';

const creat = express.Router();

const path = multiparty({
  uploadDir: './uploads/incidentes/',
  maxFieldsSize: 50 * 1024 * 1024
});

const path2 = multiparty({
  uploadDir: './uploads/fichas/',
  maxFieldsSize: 50 * 1024 * 1024
});

const path3 = multiparty({
  uploadDir: './uploads/barrios/',
  maxFieldsSize: 50 * 1024 * 1024
});

// Rutas para registrar elementos en diferentes modelos
creat.post('/registrar_incidente_denuncia', [auth, path], Controller.registrarIncidenteDenuncia);
creat.post('/registrar_usuario', Controller.registrarUsuario);
creat.post('/registrar_actividad_proyecto', [auth, path2], Controller.registrarActividadProyecto);
creat.post('/registrar_categoria', auth, Controller.registrarCategoria);
creat.post('/registrar_subcategoria', auth, Controller.registrarSubcategoria);
creat.post('/registrar_encargado_categoria', auth, Controller.registrarEncargadoCategoria);
creat.post('/registrar_rol_usuario', auth, Controller.registrarRolUsuario);
creat.post('/registrar_estado_incidente', auth, Controller.registrarEstadoIncidente);
creat.post('/registrar_estado_actividad_proyecto', auth, Controller.registrarEstadoActividadProyecto);
creat.post('/registrar_tipo_actividad_proyecto', auth, Controller.registrarTipoActividadProyecto);
creat.post('/registrar_direccion_geo', [auth, path3], Controller.registrarDireccionGeo);
creat.post('/registrar_permisos', auth, Controller.registrarPermiso);

export default creat;
