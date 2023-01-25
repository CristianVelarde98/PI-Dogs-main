const { Dog } = require("../db.js");
const { Temperamento } = require("../db.js");

let id = 1;
const CrearPerro = async (nombre, altura, peso, años, temperamentos) => {
  const result = await Dog.create({
    ID: "L" + id,
    Nombre: nombre,
    Altura: altura,
    Peso: peso,
    Años_de_vida: años,
  });

  temperamentos.map(async (temp) => {
    const resp = await Temperamento.findOrCreate({
      where: {
        Nombre: temp,
      },
    });
    await result.addTemperamento(resp[0]);
  });
  id++;
  return result;
};

const findDog = async (id) => {
  const respuesta = await Dog.findOne({
    where: { ID: id },
    include: [
      {
        model: Temperamento,
        attributes: ["Nombre"],
        through: {
          attributes: [],
        },
      },
    ],
  });
  return respuesta;
};

const traerTodos = async () => {
  return "sin nombre";
};

const traerPorNombre = async (name) => {
  return "con nombre";
};

module.exports = { CrearPerro, findDog, traerPorNombre, traerTodos };
