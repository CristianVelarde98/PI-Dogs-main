const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Dog",
    {
      ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "LID",
      },
      Nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      Altura: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      Peso: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      Años_de_vida: {
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: false }
  );
};
