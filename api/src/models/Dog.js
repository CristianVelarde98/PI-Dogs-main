const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
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
        unique: true,
      },
      AlturaMaxima: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      AlturaMinima: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      PesoMaximo: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      PesoMinimo: {
        type: DataTypes.FLOAT,
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
