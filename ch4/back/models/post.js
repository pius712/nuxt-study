module.exports = (sequelize, dataTypes) => {
  const Post = sequelize.define(
    'Post', // 테이블명은 posts로 된다.
    {
      content: {
        type: dataTypes.TEXT, // 매우 긴 글
        allowNull: false,
      },
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci', // 한글 + 이모지(mb4)
    },
  );
  Post.associate = db => {
    db.Post.belongsTo(db.User); // UserId가 추가 된다.
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image);
    db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
  };
  return Post;
};
