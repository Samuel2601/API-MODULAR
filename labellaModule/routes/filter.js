import express from 'express';
import { auth } from '../../middlewares/validationResultExpress.js'; // Importar middleware de autenticación
import Controller from '../controllers/ObtenerModel.js'; // Importar controlador

const filt = express.Router();

// Rutas para obtener elementos de diferentes modelos
filt.get('/obtener_usuario/:id', auth, Controller.obtenerUsuario);
filt.get('/obtener_actividad_proyecto/:id', auth, Controller.obtenerActividadProyecto);
filt.get('/obtener_incidente_denuncia/:id', auth, Controller.obtenerIncidenteDenuncia);
filt.get('/obtener_categoria/:id', auth, Controller.obtenerCategoria);
filt.get('/obtener_subcategoria/:id', auth, Controller.obtenerSubcategoria);
filt.get('/obtener_encargado_categoria/:id', auth, Controller.obtenerEncargadoCategoria);
filt.get('/obtener_rol_usuario/:id', auth, Controller.obtenerRolUsuario);
filt.get('/obtener_estado_incidente/:id', auth, Controller.obtenerEstadoIncidente);
filt.get('/obtener_estado_actividad_proyecto/:id', auth, Controller.obtenerEstadoActividadProyecto);
filt.get('/obtener_tipo_actividad_proyecto/:id', auth, Controller.obtenerTipoActividadProyecto);
filt.get('/obtener_direccion_geo/:id', auth, Controller.obtenerDireccionGeo);
filt.post('/verificar_permiso', auth, Controller.verificarPermiso);
filt.get('/obtener_permisosrol/:id', auth, Controller.obtenerPermisosRol);

export default filt;
