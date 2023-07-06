const jwt = require("jsonwebtoken");
const config = require("config");

const isAdmin = async(req, res, next)=>{
    try {
        const token = req.headers.authorization && req.headers.authorization.split(" ")[1];
        
        const admin = jwt.verify(token, config.get("SECURITY_KEY"));

        if(!admin){
           return res.status(403).json({message: "Invalid token"});
        };

        req.verified = admin;

        next();
    } catch (error) {
        res.status(403).json({message: "Invalid token"});
    };
};

module.exports = isAdmin;


