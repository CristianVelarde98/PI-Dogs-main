const armonizarDatosExt = (datos) => {
  console.log(datos[0]);
  const armonizados = [];
  for (const dog of datos) {
    const objPerro = {};
    objPerro["ID"] = dog.id;
    objPerro["Nombre"] = dog.name;
    const expectativa = dog.life_span;
    console.log(expectativa);
    console.log(expectativa.length);
    if (expectativa.length > 8 && expectativa.length != 11) {
      objPerro["ExpectativaDeVidaMinima"] = dog.life_span.slice(0, 2).trim();
      objPerro["ExpectativaDeVidaMaxima"] = dog.life_span.slice(6, 8).trim();
    } else if (expectativa.length <= 8) {
      objPerro["ExpectativaDeVidaMaxima"] = dog.life_span.slice(0, 2).trim();
    } else if (expectativa.length == 11) {
      console.log("paso por aca ");
      objPerro["ExpectativaDeVidaMinima"] = dog.life_span.slice(0, 2).trim();
      objPerro["ExpectativaDeVidaMaxima"] = dog.life_span.slice(4, 6).trim();
      console.log(objPerro.ExpectativaDeVidaMinima);
      console.log(objPerro.ExpectativaDeVidaMaxima);
    }
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
      objPerro["Temperamentos"] = aux;
    } else objPerro["Temperamentos"] = [];
    armonizados.push(objPerro);
  }
  return armonizados;
};

// {
//   weight: { imperial: '6 - 13', metric: '3 - 6' },
//   height: { imperial: '9 - 11.5', metric: '23 - 29' },
//   id: 1,
//   name: 'Affenpinscher',
//   bred_for: 'Small rodent hunting, lapdog',
//   breed_group: 'Toy',
//   temperament: 'Stubborn, Curious, Playful, Adventurous, Active, Fun-loving',
//   origin: 'Germany, France',
//   reference_image_id: 'BJa4kxc4X',
//   image: {
//     id: 'BJa4kxc4X',
//     width: 1600,
//     height: 1199,
//     url: 'https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg'
//   }
// }

const armonizarDatosInt = (datos) => {
  const armonizados = [];
  for (const dato of datos) {
    const objPerro = {}; // esta creando el dato armonizado
    const dog = dato.dataValues;
    const temps = dog["Temperamentos"];
    const temperamentos = [];
    for (const key in dog) {
      if (key == "TiempoDeVida") {
        objPerro.Edad = dog[key];
      } else if (key != "Temperamentos") {
        objPerro[key] = dog[key]; // copio las propiedades del perrito
      }
    }
    for (const temp of temps) {
      temperamentos.push(temp.dataValues["Nombre"]);
    }
    objPerro["Temperamentos"] = temperamentos;
    armonizados.push(objPerro); // por cada vuelta empujo el dato armonizado al array
  }

  return armonizados;
};

module.exports = {
  armonizarDatosExt,
  armonizarDatosInt,
};
