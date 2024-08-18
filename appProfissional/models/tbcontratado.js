'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbContratado extends Model {
    static associate(models) {
      // Definindo a associação com a tabela `Endereco`
      tbContratado.belongsTo(models.Endereco, {
        foreignKey: 'idEndereco', // Chave estrangeira
        as: 'endereco'             // Nome do alias
      });
    }
  }
  tbContratado.init({
    nomeContratado: DataTypes.STRING,
    sobrenomeContratado: DataTypes.STRING,
    cpfContratado: DataTypes.STRING,
    emailContratado: DataTypes.STRING,
    telefoneContratado: DataTypes.STRING,
    senhaContratado: DataTypes.STRING,
    profissaoContratado: DataTypes.STRING,
    nascContratado: DataTypes.DATE,
    descContratado: DataTypes.TEXT,
    imagemContratado: DataTypes.STRING,
    tokenContratado: DataTypes.STRING,
    idEndereco: DataTypes.INTEGER // Inclua a chave estrangeira aqui
  }, {
    sequelize,
    modelName: 'tbContratado',
  });
  return tbContratado;
};
