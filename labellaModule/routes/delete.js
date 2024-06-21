import express from 'express';
import { auth } from '../../middlewares/validationResultExpress.js'; // Importar middleware de autenticación
import Controller from '../controllers/EliminarModel.js'; // Importar controlador

const delet = express.Router();

// Rutas para eliminar elementos de diferentes modelos
delet.delete('/eliminar_usuario/:id', auth, Controller.eliminarUsuario);
delet.delete('/eliminar_actividad_proyecto/:id', auth, Controller.eliminarActividadProyecto);
delet.delete('/eliminar_incidente_denuncia/:id', auth, Controller.eliminarIncidenteDenuncia);

delet.put('/eliminar_categoria/:id', auth, Controller.eliminarCategoria);
delet.put('/eliminar_subcategoria/:id', auth, Controller.eliminarSubcategoria);

delet.delete('/eliminar_encargado_categoria/:id', auth, Controller.eliminarEncargadoCategoria);
delet.delete('/eliminar_rol_usuario/:id', auth, Controller.eliminarRolUsuario);
delet.delete('/eliminar_estado_incidente/:id', auth, Controller.eliminarEstadoIncidente);
delet.delete('/eliminar_estado_actividad_proyecto/:id', auth, Controller.eliminarEstadoActividadProyecto);
delet.delete('/eliminar_tipo_actividad_proyecto/:id', auth, Controller.eliminarTipoActividadProyecto);
delet.delete('/eliminar_direccion_geo/:id', auth, Controller.eliminarDireccionGeo);
delet.delete('/eliminar_permisos/:id', auth, Controller.eliminarPermiso);

delet.get('/verificar_categoria/:id', auth, Controller.verificarCategoria);
delet.get('/verificar_subcategoria/:id', auth, Controller.verificarSubCategoria);

export default delet;
