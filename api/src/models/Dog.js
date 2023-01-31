const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define(
    "Dog",
    {
      ID: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      Nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      AlturaMaxima: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      AlturaMinima: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      PesoMaximo: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      PesoMinimo: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      TiempoDeVida: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Imagen: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};
