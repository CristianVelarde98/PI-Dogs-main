const { Dog } = require("../db.js");

const CrearPerro = async (nombre, altura, peso, años) => {
  const result = await Dog.create({
    Nombre: nombre,
    Altura: altura,
    Peso: peso,
    Años_de_vida: años,
  });
  return result;
};

module.exports = { CrearPerro };
