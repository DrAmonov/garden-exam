const {connect} = require("mongoose");
const config = require("config");

const Admins = require("../models/Admin");


const bootstrap = async(app)=>{
    await connect(config.get("MONGO_URI"));

    const admin = await Admins.findOne();

    if(!admin){
        Admins.create({username: "komronbek", password: "$2a$12$499HvsBYqv.pENStTdCqbuZVzHnNoNlzeJV1Dc71l6GwxqMyGrEFi", role: "super"})
    };

    const PORT = config.get("PORT");
    app.listen(PORT, ()=>{
        console.log(PORT);
    })
};

module.exports = bootstrap;