const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');

const Admins = require('../models/Admin');

const login = async (req, res) => {
	try {
		const { username, password } = req.body;

		const admin = await Admins.findOne({ username });

		if (!admin) {
			return res.status(403).json({ message: 'Invalid username or password' });
		}

		const compare = await bcrypt.compare(password, admin.password);

		if (!compare) {
			return res.status(403).json({ message: 'Invalid username or password' });
		}

		const token = jwt.sign({ id: admin.id }, config.get('SECURITY_KEY'));

		res.status(200).json({ message: 'success', token });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

module.exports = { login };
