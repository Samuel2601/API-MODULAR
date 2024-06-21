import express from 'express';
import { auth } from '../../middlewares/validationResultExpress.js';// Importar middleware de autenticación
import Controller from '../controllers/ListarModel.js'; // Importar controlador

const list = express.Router();

// Rutas para listar elementos de diferentes modelos
list.get('/listar_usuarios', auth, Controller.listarUsuarios);
list.get('/listar_ficha_sectorial', auth, Controller.listarActividadesProyecto);
list.get('/listar_incidentes_denuncias', auth, Controller.listarIncidentesDenuncias);
list.get('/listar_categorias', auth, Controller.listarCategorias);
list.get('/listar_subcategorias', auth, Controller.listarSubcategorias);
list.get('/listar_encargados_categorias', auth, Controller.listarEncargadosCategorias);
list.get('/listar_roles_usuarios', auth, Controller.listarRolesUsuarios);
list.get('/listar_estados_incidentes', auth, Controller.listarEstadosIncidentes);
list.get('/listar_estados_actividades_proyecto', auth, Controller.listarEstadosActividadesProyecto);
list.get('/listar_tipos_actividades_proyecto', auth, Controller.listarTiposActividadesProyecto);
list.get('/listar_direcciones_geo', auth, Controller.listarDireccionesGeo);
list.get('/listar_permisos', auth, Controller.listarPermisos);

export default list;
