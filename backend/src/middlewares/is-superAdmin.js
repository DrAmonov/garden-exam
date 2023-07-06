const jwt = require("jsonwebtoken");
const config = require("config");
const Admins = require("../models/Admin");

const isSuperAdmin = async (req, res, next) => {
  try {
    const token =
      req.headers.authorization && req.headers.authorization.split(" ")[1];

    const admin = jwt.verify(token, config.get("SECURITY_KEY"));

    const findAdmin = await Admins.findById(admin.id);

    if (!findAdmin) {
      return res.status(403).json({ message: "Invalid token" });
    }


    if (findAdmin.role !== "super") {
      return res.status(403).json({ message: "You are not super admin" });
    }

    req.verified = admin;

    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid token" });
  }
};

module.exports = isSuperAdmin;
