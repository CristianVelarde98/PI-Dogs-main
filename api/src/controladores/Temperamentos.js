const { Temperamento } = require("../db.js");

const IntroducirTemperamentos = async (temps) => {
  const temperamentData = temps.map((temp) => {
    return { Nombre: temp };
  });

  const resp = await Temperamento.bulkCreate(temperamentData);
  return resp;
};

module.exports = {
  IntroducirTemperamentos,
};
