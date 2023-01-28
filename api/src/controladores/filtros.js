const armonizarDatosExt = (datos) => {
  const armonizados = [];
  for (const dog of datos) {
    const objPerro = {};
    objPerro["ID"] = dog.id;
    objPerro["Nombre"] = dog.name;
    // objPerro["TiempoDeVida"] = dog.life_span.slice(0, 2).trim();
    dog.image?.url
      ? (objPerro["Imagen"] = dog.image.url)
      : (objPerro["Imagen"] = dog.reference_image_id);
    const altura = dog.height.metric;
    if (altura.length > 2) {
      const aux = altura.split(" - ");
      objPerro["AlturaMinima"] = aux[0];
      objPerro["AlturaMaxima"] = aux[1];
    } else if (altura.length == 2) objPerro["AlturaMaxima"] = altura;
    const peso = dog.weight.metric;
    if (peso.length > 2) {
      const aux = peso.split(" - ");
      objPerro["PesoMinimo"] = aux[0];
      objPerro["PesoMaximo"] = aux[1];
    } else if (peso.length == 2) objPerro["PesoMaximo"] = peso;
    const temps = dog.temperament;
    if (temps) {
      const aux = temps.split(", ");
      objPerro["temperamentos"] = aux;
    } else objPerro["temperamentos"] = [];
    armonizados.push(objPerro);
  }
  return armonizados;
};

const armonizarDatosInt = (datos) => {
  const armonizados = [];
  for (const dato of datos) {
    const objPerro = {}; // esta creando el dato armonizado
    const dog = dato.dataValues;
    const temps = dog["Temperamentos"];
    const temperamentos = [];
    for (const key in dog) {
      if (key != "Temperamentos") {
        objPerro[key] = dog[key]; // copio las propiedades del perrito
      }
    }
    for (const temp of temps) {
      temperamentos.push(temp.dataValues["Nombre"]);
    }
    objPerro["temperamentos"] = temperamentos;
    armonizados.push(objPerro); // por cada vuelta empujo el dato armonizado al array
  }
  return armonizados;
};

module.exports = {
  armonizarDatosExt,
  armonizarDatosInt,
};
