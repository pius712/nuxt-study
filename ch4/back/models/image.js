module.exports = (sequelize, dataTypes) => {
  const Image = sequelize.define(
    'Image', // 테이블명은 posts로 된다.
    {
      src: {
        type: dataTypes.STRING(200), // 매우 긴 글
        allowNull: false,
      },
    },
    {
      charset: 'utf8',
      collate: 'utf8_general_ci', // 한글
    },
  );
  Image.associate = db => {
    db.Image.belongsTo(db.Post);
  };
  return Image;
};
