module.exports = (sequelize, dataTypes) => {
  const Hashtag = sequelize.define(
    'Hashtag',
    {
      name: {
        type: dataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      charset: 'utf8',
      collate: 'utf8_general_ci',
    },
  );
  Hashtag.associate = db => {
    db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });
  };
  return Hashtag;
};
