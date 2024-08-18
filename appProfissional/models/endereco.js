'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Endereco extends Model {
    static associate(models) {
      // Definindo a associação inversa
      Endereco.hasMany(models.tbContratado, {
        foreignKey: 'idEndereco',
        as: 'contratados'
      });
    }
  }
  Endereco.init({
    ruaEndereco: DataTypes.STRING,
    cepEndereco: DataTypes.STRING,
    numCasaEndereco: DataTypes.STRING,
    complementoEndereco: DataTypes.STRING,
    bairroEndereco: DataTypes.STRING,
    ufEndereco: DataTypes.STRING,
    cidadeEndereco: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Endereco',
  });
  return Endereco;
};
