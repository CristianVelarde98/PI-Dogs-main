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

  if (!EdadMaxima.length) {
    if (EdadMaxima < EdadMinima) errores.EdadMaxima = "EdadMaxima invalida";
    if (!EdadMaxima.length) errores.EdadMaxima = "EdadMaxima invalida";
  }

  if (!EdadMinima.length) {
    if (EdadMinima > EdadMaxima) errores.EdadMinima = "EdadMinimainvalida";
    if (!EdadMinima.length) errores.EdadMinima = "EdadMinimainvalida";
  }

  if (!PesoMaximo.length) {
    if (PesoMaximo < PesoMinimo) errores.PesoMaximo = "PesoMaximo invalida";
    if (!PesoMaximo.length) errores.PesoMaximo = "PesoMaximo invalida";
  }

  if (!PesoMinimo.length) {
    if (PesoMinimo > PesoMaximo) errores.PesoMinimo = "PesoMinimo invalida";
    if (!PesoMinimo.length) errores.PesoMinimo = "PesoMinimo invalida";
  }

  if (!AlturaMaxima.length) {
    if (AlturaMaxima < AlturaMinima)
      errores.AlturaMaxima = "AlturaMaxima invalida";
    if (!AlturaMaxima.length) errores.AlturaMaxima = "AlturaMaxima invalida";
  }

  if (!AlturaMinima.length) {
    if (AlturaMinima > AlturaMaxima)
      errores.AlturaMinima = "AlturaMinima invalida";
    if (!AlturaMinima.length) errores.AlturaMinima = "AlturaMinima invalida";
  }

  return errores;
}
