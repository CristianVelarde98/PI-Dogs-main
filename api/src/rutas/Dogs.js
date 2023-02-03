const { Router } = require("express");
const {
  CrearPerro,
  findDog,
  traerPorNombre,
  traerTodos,
} = require("../controladores/Perros.js");

const router = Router();

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    let resp;
    if (!name) resp = await traerTodos();
    else resp = await traerPorNombre(name);
    res.status(200).json(resp);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/:idRaza", async (req, res) => {
  const { idRaza } = req.params;
  try {
    const perro = await findDog(idRaza);
    res.status(200).json(perro);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/", async (req, res) => {
  const {
    nombre,
    alturaMax,
    alturaMin,
    pesoMax,
    pesoMin,
    edadMinima,
    edadMaxima,
    imagen,
    temperamentos,
  } = req.body;
  try {
    const respuesta = await CrearPerro(
      nombre,
      alturaMax,
      alturaMin,
      pesoMax,
      pesoMin,
      edadMinima,
      edadMaxima,
      imagen,
      temperamentos
    );
    res.status(200).json({ mensaje: respuesta.Nombre + " agregado con exito" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// axios
//   .post("https://example.com/data", {
//     firstName: "Fred",
//     lastName: "Flintstone",
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

module.exports = router;
