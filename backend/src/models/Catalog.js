const {model, Schema} = require("mongoose");

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = model("Catalog", schema);