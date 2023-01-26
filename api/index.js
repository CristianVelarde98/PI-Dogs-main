const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const axios = require("axios");
const { API_KEY } = process.env;
const {
  IntroducirTemperamentos,
} = require("./src/controladores/Temperamentos.js");

const API = `https://api.thedogapi.com/v1/breeds?${API_KEY}`;

const preloadTemperaments = async () => {
  const respuesta = await axios.get(API); //.data trae todo el contenido de la API de perros
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
  IntroducirTemperamentos(uniqueArray);
};
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    preloadTemperaments();
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
