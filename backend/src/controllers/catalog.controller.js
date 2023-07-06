const fs = require('fs/promises');

const Catalogs = require('../models/Catalog');

const getAll = async (req, res) => {
	try {
		const catalogs = await Catalogs.find();

		res.status(200).json({ message: 'OK', data: catalogs });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

const create = async (req, res) => {
	try {
		const { title } = req.body;
		const image = req.imageName;

		Catalogs.create({ title, image });

		res.status(201).json({ message: 'OK' });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

const put = async (req, res) => {
	try {
		const { title } = req.body;
		const { id } = req.params;

		await Catalogs.findByIdAndUpdate(id, { title });

		res.status(200).json({ message: 'OK' });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

const _delete = async (req, res) => {
	try {
		const { id } = req.params;

		const catalog = await Catalogs.findById(id);

		fs.unlink(`${process.cwd()}/uploads/${catalog.image}`);

		await Catalogs.findByIdAndDelete(id);

		res.status(200).json({ message: 'OK' });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

module.exports = { getAll, create, put, _delete };
