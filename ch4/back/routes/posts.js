const express = require('express');
const multer = require('multer');
const path = require('path');

const db = require('../models');
const { isLoggedIn } = require('./middleware');

const router = express.Router();

router.get('/', async (req, res, next) => {
	// GET /posts?offset=10&limit=10
	try {
		const posts = await db.Post.findAll({
			include: [
				{
					model: db.User,
					attributes: ['id', 'nickname'],
				},
			],
			order: [['createdAt', 'DESC']],
			offset: parseInt(req.query.offset, 10),
			limit: parseInt(req.query.limit, 10),
		});
		res.json(posts);
	} catch (err) {
		console.error(err);
		next(err);
	}
});

module.exports = router;
