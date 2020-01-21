module.exports = (sequelize, dataTypes) => {
  const User = sequelize.define(
    'user',
    {
      email: {
        type: dataTypes.STRING(40),
        allowNull: false,
        unique: true,
      },
      password: {
        type: dataTypes.STRING(100),
        allowNull: false,
      },
      nickname: {
        type: dataTypes.STRING(30),
        allowNull: false,
      },
    },
    {
      charset: 'utf8',
      collate: 'utf8_general_ci',
      // timestamps: false, false 안하면 created_at, updated_at 자동으로 추가된다.
    },
  );
  User.associate = db => {};
  return User;
};
