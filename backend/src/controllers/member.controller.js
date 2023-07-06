const fs = require('fs/promises');

const Members = require('../models/Member');

const getAll = async (_, res) => {
	try {
		const members = await Members.find();

		res.status(200).json({ message: 'OK', data: members });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

const create = async (req, res) => {
	try {
		const { name, job, facebook_link, twitter_link, instagram_link } = req.body;
		const image = req.imageName;

		Members.create({
			name,
			image,
			job,
			facebook_link,
			twitter_link,
			instagram_link,
		});

		res.status(201).json({ message: 'OK' });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

const put = async (req, res) => {
	try {
		const { name, job, facebook_link, twitter_link, instagram_link } = req.body;
		const { id } = req.params;

		await Members.findByIdAndUpdate(id, {
			name,
			job,
			facebook_link,
			twitter_link,
			instagram_link,
		});

		res.status(200).json({ message: 'OK' });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

const _delete = async (req, res) => {
	try {
		const { id } = req.params;

		const member = await Members.findById(id);

		fs.unlink(`${process.cwd()}/uploads/${member.image}`);

		await Members.findByIdAndDelete(id);

		res.status(200).json({ message: 'OK' });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

module.exports = { getAll, create, put, _delete };
