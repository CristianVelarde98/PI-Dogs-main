const axios = require("axios");
const { API_KEY } = process.env;
const { Router } = require("express");
const {
  IntroducirTemperamentos,
} = require("../controladores/Temperamentos.js");

const router = Router();

const API = `https://api.thedogapi.com/v1/breeds?${API_KEY}`;

router.get("/", async (req, res) => {
  const respuesta = await axios(API); //.data trae todo el contenido de la API de perros
  const temperamentos = respuesta.data.map(
    (obj) => obj.temperament && obj.temperament
  );

  let newArray = [];
  temperamentos.map((element) => {
    if (element !== undefined) {
      let words = element.split(", ");
      newArray = newArray.concat(words);
    }
  });
  const uniqueArray = newArray.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });

  const resp = await IntroducirTemperamentos(uniqueArray);
  res.status(200).json(resp);
});

// agarrar la respuesta y filtrar los temperamentos
// meter los temperamentos en la base de datos

module.exports = router;
