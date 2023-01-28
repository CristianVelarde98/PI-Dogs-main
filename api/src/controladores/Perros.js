const { Dog } = require("../db.js");
const { Temperamento } = require("../db.js");
const axios = require("axios");
const { API_KEY } = process.env;
const { armonizarDatosExt, armonizarDatosInt } = require("./filtros.js");

const API = `https://api.thedogapi.com/v1/breeds?${API_KEY}`;

let id = 1;
const CrearPerro = async (
  nombre,
  alturaMax,
  alturaMin,
  pesoMax,
  pesoMin,
  años,
  imagen,
  temperamentos
) => {
  const result = await Dog.create({
    ID: "L" + id,
    Nombre: nombre,
    TiempoDeVida: años,
    Imagen: imagen,
    AlturaMaxima: alturaMax,
    AlturaMinima: alturaMin,
    PesoMaximo: pesoMax,
    PesoMinimo: pesoMin,
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
  const respInt = await Dog.findOne({
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
  if (respInt == null) {
    const respExt = await axios.get(
      `https://api.thedogapi.com/v1/breeds/${id}`
    );
    if (respExt.data.id == undefined) throw Error("Perro no encontrado");
    else {
      const armonado = armonizarDatosExt([respExt.data]);
      return armonado;
    }
  } else {
    const armonado = armonizarDatosInt([respInt]);
    return armonado;
  }
};

const traerPorNombre = async (name) => {
  const respInt = await Dog.findOne({
    where: { Nombre: name },
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
  if (respInt == null) {
    const respExt = await axios.get(
      `https://api.thedogapi.com/v1/breeds/search?q=${name}`
    );
    if (!respExt.data.length) throw new Error("Perro no encontrado");
    else if (respExt.data.length > 1) throw new Error("Nombre inexacto");
    else {
      const aux = respExt.data[0].id;
      return await findDog(`${aux}`);
    }
  } else {
    const armonado = armonizarDatosInt([respInt]);
    return armonado;
  }
};

const traerTodos = async () => {
  const respInt = await Dog.findAll({
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
  const respExt = await axios.get(API);
  const intArmonizados = armonizarDatosInt(respInt);
  const extArmonizados = armonizarDatosExt(respExt.data);
  return [...intArmonizados, ...extArmonizados];
};

module.exports = { CrearPerro, findDog, traerPorNombre, traerTodos };
