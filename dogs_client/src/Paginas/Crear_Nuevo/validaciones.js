const regexName =
  /^[A-Z][a-zA-Z]+(\s+[a-zA-Z]+)*(,\s*[A-Z][a-zA-Z]+(\s+[a-zA-Z]+)*)*$/;

export default function validaciones({
  Nombre,
  EdadMinima,
  EdadMaxima,
  AlturaMaxima,
  AlturaMinima,
  PesoMaximo,
  PesoMinimo,
}) {
  const errores = {};

  if (
    !regexName.test(Nombre) ||
    !Nombre.length ||
    Nombre.length < 4 ||
    Nombre.length > 30
  ) {
    errores.Nombre = "Nombre invalido";
  }

  const auxEdadMax = parseInt(EdadMaxima);
  const auxEdadMin = parseInt(EdadMinima);

  if (!EdadMinima.length || !EdadMaxima.length) {
    errores.EdadMaxima = "EdadMaxima invalida";
    errores.EdadMinima = "EdadMinima invalida";
  } else if (auxEdadMax < auxEdadMin) {
    errores.EdadMaxima = "EdadMaxima invalida";
    errores.EdadMinima = "EdadMinima invalida";
  }

  const auxPesoMax = parseInt(PesoMaximo);
  const auxPesoMin = parseInt(PesoMinimo);

  if (!PesoMaximo.length || !PesoMinimo.length) {
    errores.PesoMaximo = "PesoMaximo invalida";
    errores.PesoMinimo = "PesoMinimo invalida";
  } else if (auxPesoMax < auxPesoMin) {
    errores.PesoMaximo = "PesoMaximo invalida";
    errores.PesoMinimo = "PesoMinimo invalida";
  }

  const auxAltMax = parseInt(AlturaMaxima);
  const auxAltMin = parseInt(AlturaMinima);

  if (!AlturaMaxima.length || !AlturaMinima.length) {
    errores.AlturaMaxima = "AlturaMaxima invalida";
    errores.AlturaMinima = "AlturaMinima invalida";
  } else if (auxAltMax < auxAltMin) {
    errores.AlturaMaxima = "AlturaMaxima invalida";
    errores.AlturaMinima = "AlturaMinima invalida";
  }

  return errores;
}
