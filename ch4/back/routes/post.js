const express = require('express');
const multer = require('multer');
const path = require('path');
const db = require('../models');
const { isLoggedIn } = require('./middleware');

const router = express.Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); // 확장자를 뽑아오는 것.
      const basename = path.basename(file.originalname, ext); // pius.png, basename = pius, ext = .png
      done(null, basename + Date.now() + ext);
    },
  }),
  limit: { fileSize: 20 * 1024 * 1024 }, // 사이즈 제한
});
router.post('/images', isLoggedIn, upload.array('image'), (req, res) => {
  console.log(req.files);
  res.json(req.files.map(v => v.filename));
});

router.post('/', isLoggedIn, async (req, res, next) => {
  try {
    // req.body.content === '안녕하세요~~ #nodejs #vue' ,
    //req.body.imagePaths
    const hashtags = req.body.content.match(/#[^\s#]+/g);
    const newPost = await db.Post.create({
      content: req.body.content,
      UserId: req.user.id,
    });
    if (hashtags) {
      // map 함수의 결과값은 배열인데 배열의 인자들이 다 promise이다.
      // 왜냐하면 db.Hashtag.findOrCreate의 return이 Promise이기 때문.
      const result = await Promise.all(
        hashtags.map(tag =>
          db.Hashtag.findOrCreate({
            // 있으면 저장하지말고 없으면 저장.
            where: {
              name: tag.slice(1).toLowerCase(),
            },
          }),
        ),
      );
      await newPost.addHashtags(result.map(r => r[0]));
    }
    // 이거는 sequelize가 만들어주는 함수.. ㅜ.ㅜ;;
    const fullPost = await db.Post.findOne({
      where: { id: newPost.id },
      include: [
        {
          model: db.User,
          attributes: ['id', 'nickname'],
        },
      ],
    });
    return res.json(fullPost);
  } catch (err) {
    console.error(err);
    next(err);
  }
});
module.exports = router;
