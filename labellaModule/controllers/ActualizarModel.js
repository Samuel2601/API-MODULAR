import * as Model from "../models/Model.js";
import * as bcrypt from "bcrypt-nodejs";

// Función para actualizar un usuario por su ID
const actualizarUsuario = async function (req, res) {
  if (req.user) {
    const id = req.params["id"];
    let data = req.body;

    if (req.files.foto) {
      const file = req.files.foto;
      const img_path = file.path;
      const name = img_path.split("/"); // usar / en producción \\ local
      const portada_name = name[2];
      data.foto = portada_name;
    }

    try {
      if (data.password) {
        bcrypt.hash(data.password, null, null, async function (err, hash) {
          if (hash) {
            data.password = hash;
            const usuarioActualizado = await Model.Usuario.findByIdAndUpdate(
              id,
              data,
              { new: true }
            );
            res.status(200).send({
              message: "Usuario actualizado correctamente",
              data: usuarioActualizado,
            });
          }
        });
      } else {
        delete data.password;
        const usuarioActualizado = await Model.Usuario.findByIdAndUpdate(
          id,
          data,
          { new: true }
        );
        res.status(200).send({
          message: "Usuario actualizado correctamente",
          data: usuarioActualizado,
        });
      }
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Error al actualizar el usuario", error });
    }
  } else {
    res.status(500).send({ message: "Acceso no permitido" });
  }
};

// Función para actualizar una actividad de proyecto por su ID
const actualizarActividadProyecto = async function (req, res) {
  if (req.user) {
    const id = req.params["id"];
    console.log(id, req.body);
    try {
      const actividadActualizada =
        await Model.Ficha_sectorial.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true, // Asegura la validación según el esquema
        });

      if (!actividadActualizada) {
        return res
          .status(404)
          .send({ message: "Ficha Sectorial no encontrada" });
      }

      res.status(200).send({
        message: "Ficha Sectorial actualizada correctamente",
        data: actividadActualizada,
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Error al actualizar la Ficha Sectorial", error });
    }
  } else {
    res.status(403).send({ message: "Acceso no permitido" });
  }
};

// Función para actualizar un incidente o denuncia por su ID
const actualizarIncidenteDenuncia = async function (req, res) {
  if (req.user) {
    console.log("Body", req.body, req.files);
    const id = req.params["id"];

    const evidencia = [];
    let index = 0;
    while (req.files["evidencia" + index]) {
      const file = req.files["evidencia" + index];
      const img_path = file.path;
      const name = img_path.split("/"); // usar / en producción \\ local
      const portada_name = name[2];
      evidencia.push(portada_name);
      index++;
    }
    if (evidencia.length > 0) {
      req.body.evidencia = evidencia;
    }

    try {
      const incidenteActualizado =
        await Model.Incidentes_denuncia.findByIdAndUpdate(
          id,
          { $inc: { __v: 1 }, ...req.body },
          { new: true }
        );
      res.status(200).send({
        message: "Incidente/denuncia actualizado correctamente",
        data: incidenteActualizado,
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Error al actualizar el incidente/denuncia", error });
    }
  } else {
    res.status(500).send({ message: "Acceso no permitido" });
  }
};

// Función para actualizar una categoría por su ID
const actualizarCategoria = async function (req, res) {
  if (req.user) {
    const id = req.params["id"];
    try {
      const categoriaActualizada = await Model.Categoria.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
      );
      res.status(200).send({
        message: "Categoría actualizada correctamente",
        data: categoriaActualizada,
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Error al actualizar la categoría", error });
    }
  } else {
    res.status(500).send({ message: "Acceso no permitido" });
  }
};

// Función para actualizar una subcategoría por su ID
const actualizarSubcategoria = async function (req, res) {
  if (req.user) {
    const id = req.params["id"];
    try {
      const subcategoriaActualizada =
        await Model.Subcategoria.findByIdAndUpdate(id, req.body, { new: true });
      res.status(200).send({
        message: "Subcategoría actualizada correctamente",
        data: subcategoriaActualizada,
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Error al actualizar la subcategoría", error });
    }
  } else {
    res.status(500).send({ message: "Acceso no permitido" });
  }
};

// Función para actualizar un encargado de categoría por su ID
const actualizarEncargadoCategoria = async function (req, res) {
  if (req.user) {
    const id = req.params["id"];
    try {
      const encargadoActualizado =
        await Model.Encargado_categoria.findByIdAndUpdate(id, req.body, {
          new: true,
        });
      res.status(200).send({
        message: "Encargado de categoría actualizado correctamente",
        data: encargadoActualizado,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Error al actualizar el encargado de categoría",
        error,
      });
    }
  } else {
    res.status(500).send({ message: "Acceso no permitido" });
  }
};

// Función para actualizar un rol de usuario por su ID
const actualizarRolUsuario = async function (req, res) {
  if (req.user) {
    const id = req.params["id"];
    try {
      const rolActualizado = await Model.Rol_user.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
      );
      res.status(200).send({
        message: "Rol de usuario actualizado correctamente",
        data: rolActualizado,
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Error al actualizar el rol de usuario", error });
    }
  } else {
    res.status(500).send({ message: "Acceso no permitido" });
  }
};

// Función para actualizar un permiso por su ID
const actualizarPermiso = async function (req, res) {
  if (req.user) {
    const id = req.params["id"];
    try {
      const permisoActualizado = await Model.Permiso.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
      );
      res.status(200).send({
        message: "Permiso actualizado correctamente",
        data: permisoActualizado,
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Error al actualizar el permiso", error });
    }
  } else {
    res.status(500).send({ message: "Acceso no permitido" });
  }
};

// Función para actualizar un estado de incidente por su ID
const actualizarEstadoIncidente = async function (req, res) {
  if (req.user) {
    const id = req.params["id"];
    try {
      const estadoActualizado = await Model.Estado_incidente.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
      );
      res.status(200).send({
        message: "Estado de incidente actualizado correctamente",
        data: estadoActualizado,
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Error al actualizar el estado de incidente", error });
    }
  } else {
    res.status(500).send({ message: "Acceso no permitido" });
  }
};

// Función para actualizar un estado de actividad de proyecto por su ID
const actualizarEstadoActividadProyecto = async function (req, res) {
  if (req.user) {
    const id = req.params["id"];
    try {
      const estadoActualizado =
        await Model.Estado_actividad_proyecto.findByIdAndUpdate(id, req.body, {
          new: true,
        });
      res.status(200).send({
        message: "Estado de actividad de proyecto actualizado correctamente",
        data: estadoActualizado,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Error al actualizar el estado de actividad de proyecto",
        error,
      });
    }
  } else {
    res.status(500).send({ message: "Acceso no permitido" });
  }
};

// Función para actualizar un tipo de actividad de proyecto por su ID
const actualizarTipoActividadProyecto = async function (req, res) {
  if (req.user) {
    const id = req.params["id"];
    try {
      const tipoActualizado =
        await Model.Tipo_actividad_proyecto.findByIdAndUpdate(id, req.body, {
          new: true,
        });
      res.status(200).send({
        message: "Tipo de actividad de proyecto actualizado correctamente",
        data: tipoActualizado,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Error al actualizar el tipo de actividad de proyecto",
        error,
      });
    }
  } else {
    res.status(500).send({ message: "Acceso no permitido" });
  }
};

// Función para actualizar un tipo de medida por su ID
const actualizarTipoMedida = async function (req, res) {
  if (req.user) {
    const id = req.params["id"];
    try {
      const tipoActualizado = await Model.Tipo_medida.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
      );
      res.status(200).send({
        message: "Tipo de medida actualizado correctamente",
        data: tipoActualizado,
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Error al actualizar el tipo de medida", error });
    }
  } else {
    res.status(500).send({ message: "Acceso no permitido" });
  }
};

// Función para actualizar una dirección geográfica por su ID
const actualizarDireccionGeo = async function (req, res) {
  if (req.user) {
    var id = req.params["id"];
    try {
      let direccionActualizada = await Model.Direccion_geo.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
      );
      res
        .status(200)
        .send({
          message: "Dirección geográfica actualizada correctamente",
          data: direccionActualizada,
        });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({
          message: "Error al actualizar la dirección geográfica",
          error: error,
        });
    }
  } else {
    res.status(500).send({ message: "Acceso no permitido" });
  }
};
const Controller = {
  actualizarActividadProyecto,
  actualizarCategoria,
  actualizarEncargadoCategoria,
  actualizarEstadoActividadProyecto,
  actualizarEstadoIncidente,
  actualizarIncidenteDenuncia,
  actualizarPermiso,
  actualizarRolUsuario,
  actualizarSubcategoria,
  actualizarTipoActividadProyecto,
  actualizarTipoMedida,
  actualizarUsuario,
  actualizarDireccionGeo,
};

export default Controller;
