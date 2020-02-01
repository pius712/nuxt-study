module.exports = (sequelize, dataTypes) => {
  const Comment = sequelize.define(
    'Comment', // 테이블명은 posts로 된다.
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
  Comment.associate = db => {
    db.Comment.belongsTo(db.User); // UserId가 추가 된다. //반대 쪽에서도 추가해줘야한다.
    db.Comment.belongsTo(db.Post);
  };
  return Comment;
};
