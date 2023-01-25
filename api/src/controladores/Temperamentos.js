const { Temperamento } = require("../db.js");

const IntroducirTemperamentos = async (temps) => {
  const temperamentData = temps.map((temp) => {
    return { Nombre: temp };
  });

  const resp = await Temperamento.bulkCreate(temperamentData);
};

const consultarTemps = async () => {
  const respuesta = await Temperamento.findAll();
  return respuesta;
};

module.exports = {
  IntroducirTemperamentos,
  consultarTemps,
};
