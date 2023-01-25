const { Router } = require("express");
const { consultarTemps } = require("../controladores/Temperamentos.js");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const resp = await consultarTemps();
    res.status(200).json(resp);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// agarrar la respuesta y filtrar los temperamentos
// meter los temperamentos en la base de datos

module.exports = router;
