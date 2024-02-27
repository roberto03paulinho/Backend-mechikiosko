const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('product', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
    brand: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: true,
      defaultValue: []
    },
    img: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true
    },
    quantity: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true
    },
    category: {
        type: DataTypes.STRING,
        allowNull: true
    },
    company: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: true,
        defaultValue: []
    }
  }, {
    timestamps: false
  });
};
