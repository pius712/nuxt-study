module.exports = (sequelize, dataTypes) => {
  return sequelize.define(
    'user',
    {
      email: {
        type: dataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      nickname: {
        type: dataTypes.STRING,
        allowNull: false,
      },
    },
    {
      charset: 'utf8',
      collate: 'utf8_unicode_ci',
    },
  );
};
