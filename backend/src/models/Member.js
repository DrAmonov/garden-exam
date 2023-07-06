const {model, Schema} = require("mongoose");

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: true
    },
    facebook_link: {
        type: String,
        required: true
    },
    twitter_link: {
        type: String,
        required: true
    },
    instagram_link: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = model("Member", schema);