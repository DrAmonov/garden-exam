const {model, Schema} = require("mongoose");

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: "ongoing"
    }
}, {timestamps: true});

module.exports = model("Project", schema);