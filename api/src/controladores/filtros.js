const armonizarDatosExt = (datos) => {};

const armonizarDatosInt = (datos) => {
  for (const dato of datos) {
    if (dato) console.log(dato.dataValues);
  }
  // const temps = datos[0].dataValues.Temperamentos; // aca tengo un array con boj para interar y sacar los datavalues
  // console.log(temps[0].dataValues);
};

module.exports = {
  armonizarDatosExt,
  armonizarDatosInt,
};

// {
//   weight: { imperial: '50 - 70', metric: '23 - 32' },
//   height: { imperial: '27 - 30', metric: '69 - 76' },
//   id: 127,
//   name: 'Greyhound',
//   bred_for: 'Coursing hares',
//   breed_group: 'Hound',
//   life_span: '10 - 13 years',
//   temperament: 'Affectionate, Athletic, Gentle, Intelligent, Quiet, Even Tempered',
//   reference_image_id: 'ryNYMx94X',
//   image: {
//     id: 'ryNYMx94X',
//     width: 1024,
//     height: 681,
//     url: 'https://cdn2.thedogapi.com/images/ryNYMx94X.jpg'
//   }
// }

// {
//   ID: 'L1',
//   Nombre: 'duvan',
//   AlturaMaxima: 43.3,
//   AlturaMinima: 16.3,
//   PesoMaximo: 30.8,
//   PesoMinimo: 27.6,
//   TiempoDeVida: 7,
//   Imagen: null,
//   Temperamentos: [
//     Temperamento {
//       dataValues: [Object],
//       _previousDataValues: [Object],
//       uniqno: 1,
//       _changed: Set(0) {},
//       _options: [Object],
//       isNewRecord: false
//     },
//     Temperamento {
//       dataValues: [Object],
//       _previousDataValues: [Object],
//       uniqno: 1,
//       _changed: Set(0) {},
//       _options: [Object],
//       isNewRecord: false
//     }
//   ]
// }
