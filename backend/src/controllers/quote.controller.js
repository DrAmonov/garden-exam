const fs = require('fs/promises');
const Quotes = require('../models/Quote');

const getAll = async (_, res) => {
	try {
		const quotes = await Quotes.find();

		res.status(200).json({ message: 'OK', data: quotes });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

const create = async (req, res) => {
	try {
		const { name, email, phone, service_type, message } = req.body;

		Quotes.create({ name, email, phone, service_type, message });

		res.status(201).json({ message: 'OK' });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

const put = async (req, res) => {
	try {
		const { status } = req.body;
		const { id } = req.params;

		await Quotes.findByIdAndUpdate(id, { status });

		res.status(200).json({ message: 'OK' });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

const _delete = async (req, res) => {
	try {
		const { id } = req.params;

		await Quotes.findByIdAndDelete(id);

		res.status(200).json({ message: 'OK' });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

module.exports = { getAll, create, put, _delete };
