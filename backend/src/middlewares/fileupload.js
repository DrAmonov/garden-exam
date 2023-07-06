const {v4: uuid} = require("uuid");
const path = require("path");

const fileUpload = async(req, res, next)=>{
    try {
        const image = req.files?.image;

        if(!image) return res.status(403).json({message: "Image required"});
        
        const extname = path.extname(image.name);

        const imageName = `${uuid()}${extname}`;

        image.mv(`${process.cwd()}/uploads/${imageName}`);

        req.imageName = imageName;

        next();

    } catch (error) {
        res.status(403).json({message: "Image required"});
    }
};

module.exports = fileUpload;