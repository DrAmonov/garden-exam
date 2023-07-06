const fs = require('fs/promises');

const Contacts = require('../models/Contact');

const getAll = async (_, res) => {
	try {
		const contacts = await Contacts.find();

		res.status(200).json({ message: 'OK', data: contacts });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

const create = async (req, res) => {
	try {
		const { name, email, subject, message } = req.body;

		Contacts.create({ name, email, subject, message });

		res.status(201).json({ message: 'OK' });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

const _delete = async (req, res) => {
	try {
		const { id } = req.params;

		await Contacts.findByIdAndDelete(id);

		res.status(200).json({ message: 'OK' });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

module.exports = { getAll, create, _delete };
