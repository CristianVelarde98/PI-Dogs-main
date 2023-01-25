const { Router } = require("express");
const { CrearPerro } = require("../controladores/Perros.js");

const router = Router();

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    if (!name) res.status(200).send("no mandaste ningun name por query");
    else res.status(200).send(`mandaste el siguiente name por query: ${name}`);
  } catch (error) {
    res.status(400).send("tenemos un problema pa");
  }
});

router.get("/:idRaza", async (req, res) => {
  const { idRaza } = req.params;
  console.log(idRaza);
  res.status(200).send("llegamo al segundo endpint: " + idRaza);
});

router.post("/", async (req, res) => {
  const { nombre, altura, peso, años } = req.body;
  try {
    const respuesta = await CrearPerro(nombre, altura, peso, años);
    res.status(200).json(respuesta);
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
