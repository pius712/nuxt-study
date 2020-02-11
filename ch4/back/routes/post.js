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
			// result.map(r => {
			// 	console.log('result');
			// 	console.log('r', r);
			// 	console.log('r[0]', r[0]);
			// });
			// 여기서 r 은 유사배열이다... r[0]에 모델 인스턴스가 들어간다라고 생각하면 된다.
			// 공식문서 : In this example, findOrCreate returns an array like this:
			// 그리고 await 붙으면 promise안에 value가 result에 들어간다.
			await newPost.addHashtags(result.map(r => r[0]));
			// 이렇게하면 중간에 relationship에 추가 된다.
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

router.get('/:id/comments', async (req, res, next) => {
	try {
		const post = await db.Post.findOne({ where: { id: req.params.id } });
		if (!post) {
			return res.status(404).send('포스트가 존재하지 않습니다');
		}
		const comments = await db.Comment.findAll({
			where: {
				PostId: req.params.id,
			},
			include: [
				{
					model: db.User,
					attributes: ['id', 'nickname'],
				},
			],
			order: [['createdAt', 'ASC']],
		});
		res.json(comments);
	} catch (err) {
		console.error(err);
		next(err);
	}
});

router.post('/:id/comment', isLoggedIn, async (req, res, next) => {
	// POST /post/:id/comment
	try {
		const post = await db.Post.findOne({ where: { id: req.params.id } });
		if (!post) {
			return res.status(404).send('포스트가 존재하지 않습니다.');
		}
		const newComment = await db.Comment.create({
			PostId: post.id,
			UserId: req.user.id,
			content: req.body.content,
		});
		// await post.addComment(newComment.id);
		const comment = await db.Comment.findOne({
			where: {
				id: newComment.id,
			},
			include: [
				{
					model: db.User,
					attributes: ['id', 'nickname'],
				},
			],
		});
	} catch (err) {
		next(err);
	}
});
module.exports = router;
